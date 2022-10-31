<template>
    <Navbar />
    <div class="map" id="map"></div>
    <div class="form-check" v-for="layer in layers" :key="layer.id">
        <label class="form-check-label">
            <input class="form-check-input" type="checkbox" v-model="layer.active" @change="layerChanged(layer.id, layer.active)" />
            {{ layer.name }}
        </label>
    </div>
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
import RoadDetail from './components/river.vue'
import WatershedDetail from './components/watershed.vue'
import WeirDetail from './components/weir.vue'
import { ref, onMounted } from "vue";
import sendRequest from '@libs/http.js'
import L from "leaflet"
import "leaflet/dist/leaflet.css";
import 'leaflet-groupedlayercontrol';

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
    <div>
      Nama: ${feature.properties['Nama Data Infrastruktur'] || ''}
    </div>
    <div>
      Jenis Bangunan: ${feature.properties['Jenis Bangunan'] || ''}
    </div>
    <div>
      Tahun Pelaksanaan: ${feature.properties['Tahun Pelaksanaan'] || ''}
    </div>
    <div>
      <image src="${feature.properties.Foto}" width="400px" height="400px"
    </div>
    <div style="text-align: center">
      <button style="color:blue;" onclick="onDetailClick()">Detail</button>
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
}

const onEachRiver = function(feature, layer) {
    const detailLink = `
    <div>
      Nama Sungai: ${feature.properties['Nama Data Dasar'] || ''}
    </div>
    <div>
      Orde: ${feature.properties.Orde || ''}
    </div>
    <div>
      Panjang Sungai: ${feature.properties['Panjang Sungai (km)'] || ''}
    </div>
    <div>
      <image src="${feature.properties.Foto}" width="400px" height="400px"
    </div>
    <div style="text-align: center">
      <button style="color:blue;" onclick="onDetailClick()">Detail</button>
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
            "weight": 0.8,
        }
    });
    layerControl.value.addOverlay(layerGroup, 'Sungai', 'PJSA');
}

const onEachWatershed = function(feature, layer) {
    const detailLink = `
    <div>
      Nama DAS: ${feature.properties.nama_data_dasar || ''}
    </div>
    <div>
      LUAS (KM2): ${feature.properties.luas || ''}
    </div>
    <div>
      <image src="${feature.properties.Foto}" width="400px" height="400px"
    </div>
    <div style="text-align: center">
      <button style="color:blue;" onclick="onDetailClick()">Detail</button>
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
            "color": "#17901d",
            "fillOpacity": 0.25,
            "fillColor": "#21cc29",
            "weight": 0.8,
        }
    });
    layerControl.value.addOverlay(layerGroup, 'Daerah Aliran Sungai', 'PJSA');
}

const onEachWeir = function(feature, layer) {
    const detailLink = `
    <div>
      Nama Bendung: ${feature.properties.Nm_Dat_Das || ''}
    </div>
    <div>
      Nama Sungai: ${feature.properties.Nm_Sungai || ''}
    </div>
    <div>
      Jenis Bendung: ${feature.properties.Jns_Bdg || ''}
    </div>
    <div>
      <image src="${feature.properties.Foto}" width="400px" height="400px"
    </div>
    <div style="text-align: center">
      <button style="color:blue;" onclick="onDetailClick()">Detail</button>
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
}

const onEachGroin = function(feature, layer) {
    const detailLink = `
    <div>
      Nama: ${feature.properties.Nm_Dat_Das || ''}
    </div>
    <div>
      Jenis Bangunan: ${feature.properties.Jns_Bang || ''}
    </div>
    <div>
      Tahun Pelaksanaan: ${feature.properties.Thn_Pelaksanaan || ''}
    </div>
    <div>
      <image src="${feature.properties.Foto}" width="400px" height="400px"
    </div>
    <div style="text-align: center">
      <button style="color:blue;" onclick="onDetailClick()">Detail</button>
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
}

const onEachBridge = function(feature, layer) {
    const detailLink = `
    <div>
      Nama Jembatan: ${feature.properties.Nm_Dat_Das || ''}
    </div>
    <div>
      Nomor Jembatan: ${feature.properties.Nmr_Ruas_Tol || ''}
    </div>
    <div>
      <image src="${feature.properties.Foto}" width="400px" height="400px"
    </div>
    <div style="text-align: center">
      <button style="color:blue;" onclick="onDetailClick()">Detail</button>
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
}

const onEachIrrigation = function(feature, layer) {
    const detailLink = `
    <div>
      Nama Daerah Irigasi: ${feature.properties.Nm_Dat_Das || ''}
    </div>
    <div>
      Jenis Daerah Irigasi: ${feature.properties.Jns_DI || ''}
    </div>
    <div>
      Bangunan Utama: ${feature.properties.Bang_Utama || ''}
    </div>
    <div>
      Luas: ${feature.properties.Luas_Fungsi || ''}
    </div>
    <div>
      <image src="${feature.properties.Foto}" width="400px" height="400px"
    </div>
    <div style="text-align: center">
      <button style="color:blue;" onclick="onDetailClick()">Detail</button>
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
            "fillOpacity": 0.5,
            "fillColor": "#1aaa30",
            "weight": 0.65,
        }
    });
    layerControl.value.addOverlay(layerGroup, 'Irigasi', 'PJPA');
}

const onEachRiverBasin = function(feature, layer) {
    const detailLink = `
    <div>
      Nama Ruas: ${feature.properties.Nm_Dat_Das || ''}
    </div>
    <div>
      Kode WS: ${feature.properties.Kd_WS_Permen || ''}
    </div>
    <div>
      <image src="${feature.properties.Foto}" width="400px" height="400px"
    </div>
    <div style="text-align: center">
      <button style="color:blue;" onclick="onDetailClick()">Detail</button>
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
            "color": "#36b30f",
            "dashArray": "10 5",
            "fillOpacity": 0,
            "weight": 1,
        }
    });
    layerControl.value.addOverlay(layerGroup, 'Wilayah Sungai', 'PJSA');
}

const onEachRoad = function(feature, layer) {
    const detailLink = `
    <div>
      Nama Ruas: ${feature.properties.Nm_Dat_Das || ''}
    </div>
    <div>
      Nomor Ruas: ${feature.properties.Nmr_Ruas || ''}
    </div>
    <div>
      <image src="${feature.properties.Foto}" width="400px" height="400px"
    </div>
    <div style="text-align: center">
      <button style="color:blue;" onclick="onDetailClick()">Detail</button>
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
            "color": "#1a69c9",
            "weight": 1,
        }
    });
    layerControl.value.addOverlay(layerGroup, 'Jalan', 'Bina Marga');
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