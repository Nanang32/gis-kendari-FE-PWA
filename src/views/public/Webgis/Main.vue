<template>
  <div class="row">
    <div class="col-md-9">
      <div class="map" id="map"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import L from "leaflet"
import "leaflet/dist/leaflet.css";

// const map = ref(null);
const layerControl = ref(null);

onMounted(() => {
  initMap();

  loadStreet();
  loadCities();
  loadParks();
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

function loadStreet() {
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

function loadCities() {
  var cities = L.layerGroup();
  L.polygon([[-4.057426060386102, 122.42889404296876],
              [-4.035508178820226, 122.47146606445314],
              [-4.035508178820226, 122.48931884765626],
              [-4.010849855147802, 122.50717163085939],
              [-3.980710893919806, 122.51541137695314],
              [-3.960160969103948, 122.51815795898438],
              [-3.960160969103948, 122.48107910156251],
              [-3.967011000868007, 122.43301391601562],
              [-3.9752309640095858, 122.40692138671876],
              [-3.9752309640095858, 122.37396240234376],
              [-3.956050922825435, 122.32315063476564],
              [-3.96290098861849, 122.27508544921876],
              [-3.9478307691214565, 122.21740722656251],
              [-3.925909961799956, 122.15423583984376],
              [-3.9930406027902787, 122.13363647460939],
              [-4.109478639690112, 122.13500976562501],
              [-4.1382430839837125, 122.14324951171876],
              [-4.099890260666376, 122.22564697265626],
              [-4.091671558519782, 122.30255126953126],
              [-4.084822575634911, 122.35336303710939],
              [-4.093041348071993, 122.39181518554689]])
    .bindPopup('This is Littleton, CO.').addTo(cities);
    layerControl.value.addOverlay(cities, 'Cities');
}

function loadParks(){
  var parks = L.layerGroup();
    L.marker([-3.996471941457056, 122.5132456609777]).bindPopup('This is Crown Hill Park.').addTo(parks);
    L.marker([-4.00503409433632, 122.51350315302474]).bindPopup('This is Ruby Hill Park.').addTo(parks);
    layerControl.value.addOverlay(parks, 'Parks');
}
</script>
<style>
  .map { height: 600px }
</style>