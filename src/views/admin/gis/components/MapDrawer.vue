<template>
  <div class="map h-80" id="map"></div>
</template>

<script setup>

import L, { featureGroup } from "leaflet"
import 'leaflet-draw'
import 'leaflet-draw/dist/leaflet.draw.css'
import "leaflet/dist/leaflet.css";
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  geo_json: {
    type: Object,
    default: null
  },
})

const map = ref(null);
const editableLayers = ref(null);
const tileLayer = ref(null);
const emit = defineEmits(['submit'])

onMounted(() => {
  initMap();
});

watch(() => props.geo_json, (geoJSON) => {
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
  map.value.on('draw:edited', function(e) {
    // var type = e.layerType,
    //   layer = e.layer;

    // editableLayers.addLayer(layer);
    emit('submit', JSON.stringify(editableLayers.toGeoJSON()));
  });

  L.geoJSON(props.geo_json, {
    onEachFeature: function (feature, layer) {
      editableLayers.addLayer(layer);
    }
  })
  // .addTo(map.value)
}
</script>