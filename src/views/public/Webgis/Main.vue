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
  // loadWeirs();
  loadBeachGuard();
  loadBridge();
  loadIrrigation();
  loadRiverBasin();
  loadRoad();
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

function onEachFeature(feature, layer) {
  const detailLink = `<div>${feature.properties.Nm_Dat_Das}</div> <button style="color:blue;" onclick="onDetailClick()">Detail</button>`;
    if (feature.properties)
        layer.bindPopup(detailLink).on('popupopen', () => {content.value = feature.properties.Nm_Dat_Das;});
}

async function loadRiver() {
  const response = await sendRequest({
      method: 'get',
      url: '/rivers/coords',
  });
  if ((response !== null) && (response.status === true)) {
    let rivers = [];
    response.data.river.forEach(river => {
      rivers.push({
        popup: river.nama_data_dasar,
        coords: river.coords
      });
    });
    loadPolylineLayer(rivers, 'Sungai');
  }
}

async function loadWatershed() {
  const response = await sendRequest({
      method: 'get',
      url: '/watersheds/coords',
  });
  if ((response !== null) && (response.status === true)) {
    let watersheds = [];
    response.data.watershed.forEach(watershed => {
      watersheds.push({
        popup: watershed.nama_data_dasar,
        coords: watershed.coords
      });
    });
    loadPolygonLayer(watersheds, 'Daerah Aliran Sungai');
  }
}

async function loadWeirs(){
  const response = await sendRequest({
      method: 'get',
      url: '/weirs/coords',
  });
  if ((response !== null) && (response.status === true)) {
    let weirs = [];
    response.data.weirs.forEach(weir => {
      weirs.push({
        popup: weir.nama_data_dasar,
        coords: weir.coords
      });
    });
    loadMarkerLayer(weirs, 'Bendung');
  }
}
function loadBeachGuard(){
  loadMarkerLayer([], 'Pelindung pantai');
}
async function loadBridge(){
  const response = await sendRequest({
      method: 'get',
      url: '/bridges/geoJson',
  });
  const layerGroup = L.geoJSON(response.data, {onEachFeature: onEachFeature});
  layerControl.value.addOverlay(layerGroup, 'Jembatan');
}
function loadIrrigation(){
  loadMarkerLayer([], 'Irigasi');
}
function loadRiverBasin(){
  loadMarkerLayer([], 'Wilayah Sungai');
}
function loadRoad(){
  loadMarkerLayer([], 'Jalan');
}

function loadMarkerLayer(data, label){
  var layerGroup = L.layerGroup();
  data.forEach(row => {
    L.marker(JSON.parse(row.coords))
      .bindPopup(row.popup)
      .addTo(layerGroup);
  });
  layerControl.value.addOverlay(layerGroup, label);
}

function loadPolylineLayer(data, label){
  var layerGroup = L.layerGroup();
  data.forEach(row => {
    L.polyline(JSON.parse(row.coords))
      .bindPopup(row.popup)
      .addTo(layerGroup);
  });
  layerControl.value.addOverlay(layerGroup, label);
}

function loadPolygonLayer(data, label){
  var layerGroup = L.layerGroup();
  data.forEach(row => {
    L.polygon(JSON.parse(row.coords))
      .bindPopup(row.popup)
      .addTo(layerGroup);
  });
  layerControl.value.addOverlay(layerGroup, label);
}
</script>
<style>
.map {
    height: 600px
}
</style>