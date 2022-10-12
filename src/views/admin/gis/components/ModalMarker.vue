<template>
  <Modal
    :show="isShowModal"
    @hidden="submitLatlng"
  >
    <ModalBody class="p-0 w-screen h-screen">
      <div class="map h-screen" id="map"></div>
    </ModalBody>
    <ModalFooter>
      <button type="button" class="btn btn-primary w-24" @click="submitLatlng">
        Simpan
      </button>
    </ModalFooter>
  </Modal>
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
const latlngs = ref([]);
const emit = defineEmits(['submit'])

onMounted(() => {
  initMap();
});

function initMap() {
  map.value = L.map('map').setView([38.63, -90.23], 12);
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

    if (type === 'marker') {
      latlngs.value = [layer.getLatLng()];
    } else {
      latlngs.value = layer.getLatLngs();
    }

    editableLayers.addLayer(layer);
  });

}
function submitLatlng() {
  emit('submit', latlngs.value);
}
</script>