<template>
  <div class="map h-80" id="map"></div>
</template>

<script setup>

import L from "leaflet"
import 'leaflet-draw'
import 'leaflet-draw/dist/leaflet.draw.css'
import "leaflet/dist/leaflet.css";
import { ref, onMounted } from "vue";

defineProps({
  isShowModal: {
    type: Boolean,
    default: false
  },
})

const map = ref(null);
const tileLayer = ref(null);
const emit = defineEmits(['submit'])

onMounted(() => {
  initMap();
});

function initMap() {
  map.value = L.map('map').setView([-4.144910, 122.174606], 12);
  tileLayer.value = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 18,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
    }
  );
  tileLayer.value.addTo(map.value);

  // Initialise the FeatureGroup to store editable layers
  const editableLayers = new L.FeatureGroup();
  map.value.addLayer(editableLayers);
  const drawPluginOptions = {
    position: 'topright',
    draw: {
      polygon: {
        allowIntersection: false, // Restricts shapes to simple polygons
        drawError: {
          color: '#e1e100', // Color the shape will turn when intersects
          message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
        },
        shapeOptions: {
          color: '#97009c'
        }
      },
      // disable toolbar item by setting it to false
      polyline: true,
      circle: false, // Turns off this drawing tool
      rectangle: false,
      marker: true,
      },
    edit: {
      featureGroup: editableLayers, //REQUIRED!!
      remove: false
    }
  };

  // Initialise the draw control and pass it the FeatureGroup of editable layers
  var drawControl = new L.Control.Draw(drawPluginOptions);
  map.value.addControl(drawControl);

  map.value.on('draw:created', function(e) {
    var type = e.layerType,
      layer = e.layer;

    editableLayers.addLayer(layer);
    emit('submit', JSON.stringify(editableLayers.toGeoJSON()));
  });
}
</script>