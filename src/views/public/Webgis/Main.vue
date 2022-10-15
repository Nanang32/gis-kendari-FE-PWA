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
</template>
<script>
import L from "leaflet"
import "leaflet/dist/leaflet.css";

export default {
    data: () => ({
        map: null,
        tileLayer: null,
        layers: [{
                id: 0,
                name: 'Sungai',
                active: false,
                features: [{
                        id: 0,
                        name: 'Sungait\'s kendari',
                        type: 'marker',
                        coords: [-3.843701834229144, 122.42752075195314],
                    },
                    {
                        id: 1,
                        name: 'Pappy\'s Smokehouse',
                        type: 'marker',
                        coords: [-3.983371674599709, 122.54345806116577],
                    },
                    {
                        id: 2,
                        name: 'Broadway Oyster Bar',
                        type: 'marker',
                        coords: [-3.979946733810512, 122.59014995236546],
                    },
                    {
                        id: 3,
                        name: 'Charlie Gitto\'s On the Hill',
                        type: 'marker',
                        coords: [-3.972411813951688, 122.52938182925995],
                    },
                    {
                        id: 4,
                        name: 'Sugarfire',
                        type: 'marker',
                        coords: [-3.983200427898737, 122.56749065222444],
                    },
                    {
                        id: 5,
                        name: 'The Shaved Duck',
                        type: 'marker',
                        coords: [-3.9835429212650464, 122.59864718991835],
                    },
                    {
                        id: 6,
                        name: 'Mango Restaurant',
                        type: 'marker',
                        coords: [-3.9936464113801136, 122.51693638031885],
                    },
                    {
                        id: 7,
                        name: 'Zia\'s Restaurant',
                        type: 'marker',
                        coords: [-3.996471941457056, 122.5132456609777],
                    },
                    {
                        id: 8,
                        name: 'Anthonio\'s Taverna',
                        type: 'marker',
                        coords: [-4.00503409433632, 122.51350315302474],
                    },
                ],
            },
            {
                id: 1,
                name: 'Daerah aliran sungai',
                active: false,
                features: [{
                    id: 0,
                    name: 'Aliran sungai A',
                    type: 'polygon',
                    coords: [
                        [-4.057426060386102, 122.42889404296876],
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
                        [-4.093041348071993, 122.39181518554689]
                    ],
                }, {
                    id: 1,
                    name: 'Daerah aliran sungai B',
                    type: 'polygon',
                    coords: [
                        [-4.103314694963716, 122.2053909301758],
                        [-4.121121516348591, 122.16556549072267],
                        [-4.130024777622786, 122.1566390991211],
                        [-4.139270366285474, 122.13020324707033],
                        [-4.1762516388516255, 122.14599609375001],
                        [-4.190290370087163, 122.16316223144533],
                        [-4.176936460843612, 122.21466064453126],
                        [-4.12899748333924, 122.22015380859375]
                    ],
                }, ],
            }
        ],
    }),
    mounted() {
        this.initMap();
        this.initLayers();
    },
    methods: {
        layerChanged(layerId, active) {
            const layer = this.layers.find(layer => layer.id === layerId);

            layer.features.forEach((feature) => {
                if (active) {
                    feature.leafletObject.addTo(this.map);
                } else {
                    feature.leafletObject.removeFrom(this.map);
                }
            });
        },
        initLayers() {
            this.layers.forEach((layer) => {
                const markerFeatures = layer.features.filter(feature => feature.type === 'marker');
                const polygonFeatures = layer.features.filter(feature => feature.type === 'polygon');

                markerFeatures.forEach((feature) => {
                    feature.leafletObject = L.marker(feature.coords)
                        .bindPopup(feature.name);
                });

                polygonFeatures.forEach((feature) => {
                    feature.leafletObject = L.polygon(feature.coords)
                        .bindPopup(feature.name);
                });
            });
        },
        initMap() {
            this.map = L.map('map').setView([-4.144910, 122.174606], 12);
            this.tileLayer = L.tileLayer(
                'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
                }
            );

            this.tileLayer.addTo(this.map);
            // this.map.on('click', function(e) {
            //   alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
            // });
        },
    },
};
</script>
<style>
.map {
    height: 600px
}
</style>