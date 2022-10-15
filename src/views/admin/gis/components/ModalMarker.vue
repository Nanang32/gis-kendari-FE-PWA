<template>
  <Modal
    :show="isShowModal"
    @hidden="submitLatlng"
  >
    <ModalBody class="p-0 w-96 h-96">
      <div class="map h-80" id="map"></div>
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

    if (type === 'marker') {
      latlngs.value = [layer.getLatLng().lat, layer.getLatLng().lng];
    } else if(type === 'polyline') {
      latlngs.value.push(layer.getLatLngs().map(point => [point.lat, point.lng]));
    } else if(type === 'polygon') {
      latlngs.value = layer.getLatLngs()[0].map(point => [point.lat, point.lng]);
    }

    editableLayers.addLayer(layer);
  });

}
function submitLatlng() {
  emit('submit', JSON.stringify(latlngs.value));
}
</script>