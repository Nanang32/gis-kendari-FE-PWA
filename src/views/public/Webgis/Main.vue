<template>
  <div class="row">
      <div class="col-md-9">
          <div class="map" id="map"></div>
      </div>
      <div class="col-md-3">
          <div class="form-check" v-for="layer in layers" :key="layer.id">
              <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" v-model="layer.active" @change="layerChanged(layer.id, layer.active)" />
                  {{ layer.name }}
              </label>
          </div>
      </div>
  </div>
  <Modal
    :show="showModal"
    @hidden="showModal=false"
    size="modal-xl"
  >
    <ModalBody class="p-4">
      <div v-html="content"></div>
    </ModalBody>
    <ModalFooter>
      <button type="button" class="btn btn-primary w-24" @click="showModal=false">
        Tutup
      </button>
    </ModalFooter>
  </Modal>
</template>
<script setup>
import bridgeIcon from '@assets/images/icon/bridge.png'
import groinIcon from '@assets/images/icon/groin.png'
import riverInfrastructureIcon from '@assets/images/icon/river-infrastructure.png'
import weirIcon from '@assets/images/icon/weir.png'
import { ref, onMounted } from "vue";
import sendRequest from '@libs/http.js'
import L from "leaflet"
import "leaflet/dist/leaflet.css";

const layerControl = ref(null);
const showModal = ref(false);
const content = ref('');

onMounted(() => {
  initMap();

  loadWatershed();
  loadRiver();
  loadWeirs();
  loadGroin();
  loadBridge();
  loadIrrigation();
  loadRiverBasin();
  loadRoad();
  loadRiverInfrastructure();
  window.onDetailClick = onDetailClick;
});

function initMap() {
  var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    map.value = L.map('map', {
      center: [-4.144910, 122.174606],
      zoom: 10,
      layers: [osm]
    });
    layerControl.value = L.control.layers({'OpenStreetMap': osm}).addTo(map.value);
}
function onDetailClick (e){
  showModal.value = true;
}

// function onEachFeature(feature, layer) {
//   const detailLink = `<div>${feature.properties.Nm_Dat_Das}</div> <button style="color:blue;" onclick="onDetailClick()">Detail</button>`;
//     if (feature.properties)
//         layer.bindPopup(detailLink).on('popupopen', () => {content.value = feature.properties.Nm_Dat_Das;});
// }
const onEachRiverInfrastructure = function (feature, layer) {
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
        layer.bindPopup(detailLink).on('popupopen', () => {content.value = feature.properties['Nama Data Infrastruktur'];});
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
  layerControl.value.addOverlay(layerGroup, 'Infrastruktur Sungai');
}

const onEachRiver = function (feature, layer) {
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
        layer.bindPopup(detailLink).on('popupopen', () => {content.value = feature.properties['Nama Data Dasar'];});
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
  layerControl.value.addOverlay(layerGroup, 'Sungai');
}

const onEachWatershed = function (feature, layer) {
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
        layer.bindPopup(detailLink).on('popupopen', () => {content.value = feature.properties.nama_data_dasar;});
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
  layerControl.value.addOverlay(layerGroup, 'Daerah Aliran Sungai');
}

const onEachWeir = function (feature, layer) {
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
        layer.bindPopup(detailLink).on('popupopen', () => {content.value = feature.properties.Nm_Dat_Das;});
};
async function loadWeirs(){
  const response = await sendRequest({
      method: 'get',
      url: '/weirs/geoJson',
  });
  const layerGroup = L.geoJSON(response.data, {
    onEachFeature: onEachWeir, pointToLayer: (feature, latlng) => {
      return L.marker(latlng, {
        icon: L.icon({
          iconUrl: weirIcon,
        })
      });
    }
  });
  layerControl.value.addOverlay(layerGroup, 'Bendung');
}

const onEachGroin = function (feature, layer) {
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
        layer.bindPopup(detailLink).on('popupopen', () => {content.value = feature.properties.Nm_Dat_Das;});
};
async function loadGroin(){
  const response = await sendRequest({
      method: 'get',
      url: '/groins/geoJson',
  });
  const layerGroup = L.geoJSON(response.data, {
    onEachFeature: onEachGroin, pointToLayer: (feature, latlng) => {
      return L.marker(latlng, {
        icon: L.icon({
          iconUrl: groinIcon,
        })
      });
    }
  });
  layerControl.value.addOverlay(layerGroup, 'Pelindung pantai');
}

const onEachBridge = function (feature, layer) {
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
        layer.bindPopup(detailLink).on('popupopen', () => {content.value = feature.properties.Nm_Dat_Das;});
};
async function loadBridge(){
  const response = await sendRequest({
      method: 'get',
      url: '/bridges/geoJson',
  });
  const layerGroup = L.geoJSON(response.data, {
    onEachFeature: onEachBridge, pointToLayer: (feature, latlng) => {
      return L.marker(latlng, {
        icon: L.icon({
          iconUrl: bridgeIcon,
        })
      });
    }
  });
  layerControl.value.addOverlay(layerGroup, 'Jembatan');
}

const onEachIrrigation = function (feature, layer) {
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
        layer.bindPopup(detailLink).on('popupopen', () => {content.value = feature.properties.Nm_Dat_Das;});
};
async function loadIrrigation(){
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
  layerControl.value.addOverlay(layerGroup, 'Irigasi');
}

const onEachRiverBasin = function (feature, layer) {
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
        layer.bindPopup(detailLink).on('popupopen', () => {content.value = feature.properties.Nm_Dat_Das;});
};
async function loadRiverBasin(){
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
  layerControl.value.addOverlay(layerGroup, 'Wilayah Sungai');
}

const onEachRoad = function (feature, layer) {
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
        layer.bindPopup(detailLink).on('popupopen', () => {content.value = feature.properties.Nm_Dat_Das;});
};
async function loadRoad(){
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
  layerControl.value.addOverlay(layerGroup, 'Jalan');
}
</script>
<style>
.map {
    height: 600px
}
</style>