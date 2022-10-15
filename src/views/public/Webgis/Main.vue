<template>
  <div class="row">
    <div class="col-md-9">
      <div class="map" id="map"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import sendRequest from '@libs/http.js'
import L from "leaflet"
import "leaflet/dist/leaflet.css";

const layerControl = ref(null);

onMounted(() => {
  initMap();

  loadWatershed();
  loadRiver();
  loadWeirs();
});

function initMap() {
  var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const map = L.map('map', {
      center: [-4.144910, 122.174606],
      zoom: 10,
      layers: [osm]
    });
    layerControl.value = L.control.layers({'OpenStreetMap': osm}).addTo(map);
}

function loadRiver() {
  var streets = L.layerGroup();
  L.polyline([[-4.103314694963716, 122.2053909301758],
                      [-4.121121516348591, 122.16556549072267],
                      [-4.130024777622786, 122.1566390991211],
                      [-4.139270366285474, 122.13020324707033],
                      [-4.1762516388516255, 122.14599609375001],
                      [-4.190290370087163, 122.16316223144533],
                      [-4.176936460843612, 122.21466064453126],
                      [-4.12899748333924, 122.22015380859375]])
    .bindPopup('This is Hiddleton, CO.').addTo(streets);
  layerControl.value.addOverlay(streets, 'Streets');
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

function loadPolygonLayer(data, label){
  var layerGroup = L.layerGroup();
  data.forEach(row => {
    L.polygon(JSON.parse(row.coords))
      .bindPopup(row.popup)
      .addTo(layerGroup);
  });
  layerControl.value.addOverlay(layerGroup, label);
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
    loadMarkerLayer(weirs, 'Bendungan');
  }
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
</script>
<style>
  .map { height: 600px }
</style>