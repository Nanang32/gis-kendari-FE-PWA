<template>
    <Navbar />
    <div
      v-show="loadedData < 9"
      class="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center"
    >
      <LoadingIcon icon="spinning-circles" class="w-8 h-8" />
      <div class="text-center text-xs mt-2">Data sedang disiapkan.</div>
    </div>
    <div v-show="loadedData == 9" class="map" id="map"></div>
    <Modal :show="showModal" @hidden="showModal=false" size="modal-xl">
        <ModalBody class="p-4">
            <BridgeDetail v-if="modalType == typeBridge" :bridge="modalData" />
            <GroinDetail v-if="modalType == typeGroin" :groin="modalData" />
            <IrrigationDetail v-if="modalType == typeIrrigation" :irrigation="modalData" />
            <RiverDetail v-if="modalType == typeRiver" :river="modalData" />
            <RiverBasinDetail v-if="modalType == typeRiverBasin" :riverBasin="modalData" />
            <RiverInfrastructureDetail v-if="modalType == typeRiverInfrastructure" :riverInfrastructure="modalData" />
            <RoadDetail v-if="modalType == typeRoad" :road="modalData" />
            <WatershedDetail v-if="modalType == typeWatershed" :watershed="modalData" />
            <WeirDetail v-if="modalType == typeWeir" :weir="modalData" />
        </ModalBody>
        <ModalFooter>
            <button type="button" class="btn btn-primary w-24" @click="showModal=false">
                Tutup
            </button>
        </ModalFooter>
    </Modal>
    <Footer />
</template>
<script setup>
import Navbar from "../../../components/navbar-menu/Main.vue";
import Footer from "../../../components/footer-public/Main.vue";
import bridgeIcon from '@assets/images/icon/bridge.png'
import groinIcon from '@assets/images/icon/groin.png'
import riverInfrastructureIcon from '@assets/images/icon/river-infrastructure.png'
import weirIcon from '@assets/images/icon/weir.png'

import BridgeDetail from './components/bridge.vue'
import GroinDetail from './components/groin.vue'
import IrrigationDetail from './components/irrigation.vue'
import RiverDetail from './components/river.vue'
import RiverBasinDetail from './components/riverBasin.vue'
import RiverInfrastructureDetail from './components/riverInfrastructure.vue'
import RoadDetail from './components/road.vue'
import WatershedDetail from './components/watershed.vue'
import WeirDetail from './components/weir.vue'
import { ref, onMounted } from "vue";
import sendRequest from '@libs/http.js'
import L from "leaflet"
import "leaflet/dist/leaflet.css";
import 'leaflet-groupedlayercontrol';

const loadedData = ref(0);
const layerControl = ref(null);
const showModal = ref(false);
const modalData = ref(null);
const modalType = ref(null);
const typeWatershed = 'watershed';
const typeRiver = 'river';
const typeWeir = 'weir';
const typeGroin = 'groin';
const typeBridge = 'bridge';
const typeIrrigation = 'irrigation';
const typeRiverBasin = 'riverbasin';
const typeRoad = 'road';
const typeRiverInfrastructure = 'riverinfrastructure';

onMounted(() => {
    loadedData.value = 0;
    loadRiverBasin();
    loadWatershed();
    loadRiver();
    loadGroin();
    loadRiverInfrastructure();
    loadIrrigation();
    loadWeirs();
    loadRoad();
    loadBridge();
    initMap();
    window.onDetailClick = onDetailClick;
});

function initMap() {
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
    const mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2lzZGphdGFuc2RhIiwiYSI6ImNsOXYwbWprOTA0c3MzdW9jNTV5YTZpY2MifQ.ndkiiALi17ejWDQ9c7sY7w';
    const mb = L.tileLayer(mbUrl, { id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr });

    map.value = L.map('map', {
        center: [-4.144910, 122.174606],
        zoom: 10,
        layers: [osm, mb]
    });

    const baseLayers = { 'OpenStreetMap': osm, 'MapBox Satelite': mb };
    const groupedOverlays = { "PJSA": {}, "PJPA": {}, "Bina Marga": {} };
    layerControl.value = L.control.groupedLayers(baseLayers).addTo(map.value);
}

function onDetailClick(e) {
    showModal.value = true;
}

const onEachRiverInfrastructure = function(feature, layer) {
    const detailLink = `
    <table class='border-2 table table-striped'>
                <tbody class='border-2'>
                    <tr>
                        <td class='border-2 font-bold'>Nama</td>
                        <td class='border-2'>${feature.properties['Nama Data Infrastruktur'] || ''}</td>
                    </tr>
                    <tr>
                        <td class='border-2 font-bold'>Jenis Bangunan</td>
                        <td class='border-2'>${feature.properties['Jenis Bangunan'] || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>Tahun Pelaksanaan</td>
                        <td>${feature.properties['Tahun Pelaksanaan'] || ''}</td>
                    </tr>
                    <tr>
                        <td class='border-2 font-bold'>Volume</td>
                        <td class='border-2'>${feature.properties['Volume'] || ''}</td>
                    </tr>
                    <tr>
                        <td class='border-2 font-bold'>Satuan</td>
                        <td class='border-2'>${feature.properties['Satuan'] || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>Kondisi</td>
                        <td>${feature.properties['Kondisi'] || ''}</td>
                    </tr>
                </tbody>
    </table>
    <image src="${feature.properties.Foto}" class='m-2' alt='none' style='width:10%;height:10%;'>
    <div style="text-align: center">
        <a class="btn bg-blue-700 hover:bg-blue-500" style="color:white;" onclick="onDetailClick()">Detail</a>
    </div>`;
    if (feature.properties)
        layer.bindPopup(detailLink).on('popupopen', () => {
            modalType.value = typeRiverInfrastructure;
            modalData.value = feature.properties;
        });
};
async function loadRiverInfrastructure() {
    const response = await sendRequest({
        method: 'get',
        url: '/riverInfrastructures/geoJson',
    });
    const layerGroup = L.geoJSON(response.data, {
        onEachFeature: onEachRiverInfrastructure,
        pointToLayer: (feature, latlng) => {
            return L.marker(latlng, {
                icon: L.icon({
                    iconUrl: riverInfrastructureIcon,
                })
            });
        }
    });
    layerControl.value.addOverlay(layerGroup, 'Infrastruktur Sungai', 'PJSA');
    loadedData.value += 1;
}

const onEachRiver = function(feature, layer) {
    const detailLink = `
    <table class='border-2 table table-striped' style="width:300px;">
                <tbody class='border-2'>
                    <tr>
                        <td class='border-2 font-bold'>Nama Sungai</td>
                        <td class='border-2'>${feature.properties['Nama Data Dasar'] || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>Orde</td>
                        <td class='border-2'>${feature.properties.Orde || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>Panjang Sungai (KM2)</td>
                        <td>${feature.properties['Panjang Sungai (km)'] || ''}</td>
                    </tr>
                </tbody>
    </table>
    <image src="${feature.properties.Foto}"alt='none' class='m-2' style='width:10%;height:10%;'>
    <div style="text-align: center">
        <a class="btn bg-blue-700 hover:bg-blue-500" style="color:white;" onclick="onDetailClick()">Detail</a>
    </div>`;
    if (feature.properties)
        layer.bindPopup(detailLink).on('popupopen', () => {
            modalType.value = typeRiver;
            modalData.value = feature.properties;
        });
};
async function loadRiver() {
    const response = await sendRequest({
        method: 'get',
        url: '/rivers/geoJson',
    });
    const layerGroup = L.geoJSON(response.data, {
        onEachFeature: onEachRiver,
        style: {
            "color": "#67d9ff",
            "weight": 1,
        }
    });
    layerControl.value.addOverlay(layerGroup, 'Sungai', 'PJSA');
    loadedData.value += 1;
}

const onEachWatershed = function(feature, layer) {
    const detailLink = `
<table class='border-2 table table-striped' style="width:300px;">
                <tbody class='border-2'>
                    <tr>
                        <td class='border-2 font-bold'>Nama DAS</td>
                        <td class='border-2'>${feature.properties.nama_data_dasar || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>LUAS (KM2)</td>
                        <td class='border-2'>${feature.properties.luas || ''}</td>
                    </tr>
                </tbody>
    </table>
    <image src="${feature.properties.Foto}"alt='none' class='m-2' style='width:10%;height:10%;'>
    <div style="text-align: center">
        <a class="btn bg-blue-700 hover:bg-blue-500" style="color:white;" onclick="onDetailClick()">Detail</a>
    </div>`;
    if (feature.properties)
        layer.bindPopup(detailLink).on('popupopen', () => {
            modalType.value = typeWatershed;
            modalData.value = feature.properties;
        });
};
async function loadWatershed() {
    const response = await sendRequest({
        method: 'get',
        url: '/watersheds/geoJson',
    });
    const layerGroup = L.geoJSON(response.data, {
        onEachFeature: onEachWatershed,
        style: {
            "color": "#ddf7ff",
            "fillOpacity": 0,
            "weight": 1.5,
        }
    });
    layerControl.value.addOverlay(layerGroup, 'Daerah Aliran Sungai', 'PJSA');
    loadedData.value += 1;
}

const onEachWeir = function(feature, layer) {
    const detailLink = `
<table class='border-2 table table-striped' style="width:300px;">
                <tbody class='border-2'>
                    <tr>
                        <td class='border-2 font-bold'>Nama Bendung</td>
                        <td class='border-2'>${feature.properties.Nm_Dat_Das || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>Nama Sungai</td>
                        <td class='border-2'>${feature.properties.Nm_Sungai || ''}</td>
                    </tr>
                     <tr>
                        <td  class='border-2 font-bold'>Jenis Bendung</td>
                        <td class='border-2'>${feature.properties.Jns_Bdg || ''}</td>
                    </tr>
                </tbody>
    </table>
    <image src="${feature.properties.Foto}"alt='none' class='m-2' style='width:10%;height:10%;'>
    <div style="text-align: center">
        <a class="btn bg-blue-700 hover:bg-blue-500" style="color:white;" onclick="onDetailClick()">Detail</a>
    </div>`;
    if (feature.properties)
        layer.bindPopup(detailLink).on('popupopen', () => {
            modalType.value = typeWeir;
            modalData.value = feature.properties;
        });
};
async function loadWeirs() {
    const response = await sendRequest({
        method: 'get',
        url: '/weirs/geoJson',
    });
    const layerGroup = L.geoJSON(response.data, {
        onEachFeature: onEachWeir,
        pointToLayer: (feature, latlng) => {
            return L.marker(latlng, {
                icon: L.icon({
                    iconUrl: weirIcon,
                })
            });
        }
    });
    layerControl.value.addOverlay(layerGroup, 'Bendung', 'PJPA');
    loadedData.value += 1;
}

const onEachGroin = function(feature, layer) {
    const detailLink = `
    <table class='border-2 table table-striped' style="width:300px;">
                <tbody class='border-2'>
                    <tr>
                        <td class='border-2 font-bold'>Nama</td>
                        <td class='border-2'>${feature.properties.Nm_Dat_Das || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>Jenis Bangunan</td>
                        <td class='border-2'>${feature.properties.Jns_Bang || ''}</td>
                    </tr>
                    <tr>
                        <td class='border-2 font-bold'>Tahun Pelaksanaan</td>
                        <td class='border-2'>${feature.properties.Thn_Pelaksanaan || ''}</td>
                    </tr>
                    <tr>
                        <td class='border-2 font-bold'>Panjang</td>
                        <td class='border-2'>${feature.properties.Pjg || ''}</td>
                    </tr>
                    
                </tbody>
    </table>
    <image src="${feature.properties.Foto}"alt='none' class='m-2' style='width:10%;height:10%;'>
    <div style="text-align: center">
        <a class="btn bg-blue-700 hover:bg-blue-500" style="color:white;" onclick="onDetailClick()">Detail</a>
    </div>`;
    if (feature.properties)
        layer.bindPopup(detailLink).on('popupopen', () => {
            modalType.value = typeGroin;
            modalData.value = feature.properties;
        });
};
async function loadGroin() {
    const response = await sendRequest({
        method: 'get',
        url: '/groins/geoJson',
    });
    const layerGroup = L.geoJSON(response.data, {
        onEachFeature: onEachGroin,
        pointToLayer: (feature, latlng) => {
            return L.marker(latlng, {
                icon: L.icon({
                    iconUrl: groinIcon,
                })
            });
        }
    });
    layerControl.value.addOverlay(layerGroup, 'Pelindung pantai', 'PJSA');
    loadedData.value += 1;
}

const onEachBridge = function(feature, layer) {
    const detailLink = `
  <table class='border-2 table table-striped'>
                <tbody class='border-2'>
                    <tr>
                        <td class='border-2 font-bold'>Nama Jembatan</td>
                        <td class='border-2'>${feature.properties.Nm_Dat_Das || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>Nomor Jembatan</td>
                        <td class='border-2'>${feature.properties.Nmr_Ruas_Tol || ''}</td>
                    </tr>
                    <tr>
                        <td class='border-2 font-bold'>Panjang (m)</td>
                        <td class='border-2'>${feature.properties.Pjg_Jemb || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>Kondisi</td>
                        <td class='border-2'>${feature.properties.Kds_Umum_Jemb || ''}</td>
                    </tr>
                </tbody>
    </table>
    <image src="${feature.properties.Foto}"alt='none' class='m-2' style='width:10%;height:10%;'>
    <div style="text-align: center">
        <a class="btn bg-blue-700 hover:bg-blue-500" style="color:white;" onclick="onDetailClick()">Detail</a>
    </div>`;
    if (feature.properties)
        layer.bindPopup(detailLink).on('popupopen', () => {
            modalType.value = typeBridge;
            modalData.value = feature.properties;
        });
};
async function loadBridge() {
    const response = await sendRequest({
        method: 'get',
        url: '/bridges/geoJson',
    });
    const layerGroup = L.geoJSON(response.data, {
        onEachFeature: onEachBridge,
        pointToLayer: (feature, latlng) => {
            return L.marker(latlng, {
                icon: L.icon({
                    iconUrl: bridgeIcon,
                })
            });
        }
    });
    layerControl.value.addOverlay(layerGroup, 'Jembatan', 'Bina Marga');
    loadedData.value += 1;
}

const onEachIrrigation = function(feature, layer) {
    const detailLink = `
  <table class='border-2 table table-striped' style="width:300px;">
                <tbody class='border-2'>
                    <tr>
                        <td class='border-2 font-bold'>Nama Daerah Irigasi</td>
                        <td class='border-2'>${feature.properties.Nm_Dat_Das || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>Jenis Daerah Irigasi</td>
                        <td class='border-2'>${feature.properties.Jns_DI || ''}</td>
                    </tr>
                    <tr>
                        <td class='border-2 font-bold'>Bangunan Utama</td>
                        <td class='border-2'>${feature.properties.Bang_Utama || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>Luas (Ha)</td>
                        <td class='border-2'>${feature.properties.Luas_Fungsi || ''}</td>
                    </tr>
                    
                </tbody>
    </table>
    <image src="${feature.properties.Foto}"alt='none' class='m-2' style='width:10%;height:10%;'>
    <div style="text-align: center">
        <a class="btn bg-blue-700 hover:bg-blue-500" style="color:white;" onclick="onDetailClick()">Detail</a>
    </div>`;
    if (feature.properties)
        layer.bindPopup(detailLink).on('popupopen', () => {
            modalType.value = typeIrrigation;
            modalData.value = feature.properties;
        });
};
async function loadIrrigation() {
    const response = await sendRequest({
        method: 'get',
        url: '/irrigations/geoJson',
    });
    const layerGroup = L.geoJSON(response.data, {
        onEachFeature: onEachIrrigation,
        style: {
            "color": "#ffffff",
            "dashArray": "10 5",
            "fillOpacity": 0.75,
            "fillColor": "#7cbef1",
            "weight": 1,
        }
    });
    layerControl.value.addOverlay(layerGroup, 'Irigasi', 'PJPA');
    loadedData.value += 1;
}

const onEachRiverBasin = function(feature, layer) {
    const detailLink = `
<table class='border-2 table table-striped' style="width:300px;">
        
                <tbody class='border-2'>
                    <tr>
                        <td class='border-2 font-bold'>Nama WS</td>
                        <td class='border-2'>${feature.properties.Nm_Dat_Das || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>Kode WS</td>
                        <td class='border-2'>${feature.properties.Kd_WS_Permen || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>Jumlah DAS</td>
                        <td class='border-2'>${feature.properties.Jml_DAS || ''}</td>
                    </tr>
                    
                </tbody>
    </table>
    <image src="${feature.properties.Foto}"alt='none' class='m-2' style='width:10%;height:10%;'>
    <div style="text-align: center">
        <a class="btn bg-blue-700 hover:bg-blue-500" style="color:white;" onclick="onDetailClick()">Detail</a>
    </div>`;
    if (feature.properties)
        layer.bindPopup(detailLink).on('popupopen', () => {
            modalType.value = typeRiverBasin;
            modalData.value = feature.properties;
        });
};
async function loadRiverBasin() {
    const response = await sendRequest({
        method: 'get',
        url: '/riverBasins/geoJson',
    });
    const layerGroup = L.geoJSON(response.data, {
        onEachFeature: onEachRiverBasin,
        style: {
            "color": "#67d9ff",
            "dashArray": "10 5",
            "fillOpacity": 0,
            "weight": 2,
        }
    });
    layerControl.value.addOverlay(layerGroup, 'Wilayah Sungai', 'PJSA');
    loadedData.value += 1;
}

const onEachRoad = function(feature, layer) {
    const detailLink = `  
<table class='border-2 table table-striped' style="width:300px;">
                <tbody class='border-2'>
                    <tr>
                        <td class='border-2 font-bold'>Nama Ruas</td>
                        <td class='border-2'>${feature.properties.Nm_Dat_Das || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>Nomor Ruas</td>
                        <td class='border-2'>${feature.properties.Nmr_Ruas || ''}</td>
                    </tr>
                    <tr>
                        <td class='border-2 font-bold'>Panjang</td>
                        <td class='border-2'>${feature.properties.Pjg_Datar || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>Kondisi Mantap</td>
                        <td class='border-2'>${feature.properties.Kds_Mantap || ''}</td>
                    </tr>
                    <tr>
                        <td  class='border-2 font-bold'>Kondisi Tidak Mantap</td>
                        <td class='border-2'>${feature.properties.Kds_Tdk_Mantap || ''}</td>
                    </tr>
                    
                </tbody>
    </table>
    <image src="${feature.properties.Foto}"alt='none' class='m-2' style='width:10%;height:10%;'>
    <div style="text-align: center">
        <a class="btn bg-blue-700 hover:bg-blue-500" style="color:white;" onclick="onDetailClick()">Detail</a>
    </div>`;
    if (feature.properties)
        layer.bindPopup(detailLink).on('popupopen', () => {
            modalType.value = typeRoad;
            modalData.value = feature.properties;
        });
};
async function loadRoad() {
    const response = await sendRequest({
        method: 'get',
        url: '/roads/geoJson',
    });
    const layerGroup = L.geoJSON(response.data, {
        onEachFeature: onEachRoad,
        style: {
            "color": "#46e59a",
            "weight": 3,
        }
    });
    layerControl.value.addOverlay(layerGroup, 'Jalan', 'Bina Marga');
    loadedData.value += 1;
}
</script>
<style>
.map {
    height: 600px
}

.leaflet-control-layers-group-name {
    font-weight: bold;
    margin-top: .3em;
    margin-bottom: .2em;
    display: block;
}
</style>