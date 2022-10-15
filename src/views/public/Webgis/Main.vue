<template>
  <div class="row">
    <div class="col-md-9">
      <div class="map" id="map"></div>
    </div>
  </div>
</template>
<script>
import L from "leaflet"
import "leaflet/dist/leaflet.css";

export default {
  data: () => ({
    map: null,
    layers: [
      {
        name: 'Restaurants',
        features: [
          {
            id: 0,
            name: 'Bogart\'s Smokehouse',
            type: 'marker',
            coords: [-4.139270366285474,122.1727752685547],
          },
          {
            id: 1,
            name: 'Pappy\'s Smokehouse',
            type: 'marker',
            coords: [-4.151597649842575,122.14393615722658],
          },
          {
            id: 2,
            name: 'Broadway Oyster Bar',
            type: 'marker',
            coords: [-4.166664068251839,122.18994140625001],
          },
          {
            id: 3,
            name: 'Charlie Gitto\'s On the Hill',
            type: 'marker',
            coords: [-4.162897490666868,122.21569061279298],
          },
        ],
      }
    ],
  }),
  mounted() {
    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    this.map = L.map('map', {
      center: [39.73, -104.99],
      zoom: 10,
      layers: [osm]
    });
    var layerControl = L.control.layers({'OpenStreetMap': osm}).addTo(this.map);

    var parks = L.layerGroup();
    L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.').addTo(parks);
    L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.').addTo(parks);
    layerControl.addOverlay(parks, 'Parks');

    var cities = L.layerGroup();
    L.polygon([[39.61, -105.02], [39.74, -104.99], [39.73, -104.8], [39.77, -105.23]])
      .bindPopup('This is Littleton, CO.').addTo(cities);
    layerControl.addOverlay(cities, 'Cities');


    var streets = L.layerGroup();
    L.polyline([[39.75, -105.09], [39.68, -105.00]])
      .bindPopup('This is Hiddleton, CO.').addTo(streets);
    layerControl.addOverlay(streets, 'Streets');
  },
};
</script>
<style>
  .map { height: 600px }
</style>