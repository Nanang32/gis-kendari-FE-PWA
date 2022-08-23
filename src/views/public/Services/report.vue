<template>
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Form pengaduan masyarakat</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-6">
            <!-- BEGIN: Input -->
            <!-- END: Input -->
            <!-- BEGIN: Input Sizing -->
            <!-- END: Input Sizing -->
            <!-- BEGIN: Input Groups -->
            <!-- END: Input Groups -->
            <!-- BEGIN: Input State -->
            <!-- END: Input State -->
            <!-- BEGIN: Select Options -->
            <!-- END: Select Options -->
        </div>
        <div class="intro-y col-span-12 lg:col-span-6">
            <!-- BEGIN: Vertical Form -->
            <!-- END: Vertical Form -->
            <!-- BEGIN: Horizontal Form -->
            <PreviewComponent class="intro-y box mt-5" v-slot="{ toggle }">
                <div class="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                    <h2 class="font-medium text-base mr-auto">Form pengaduan</h2>
                    <div class="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    </div>
                </div>
                <div class="p-5">
                    <div class="form-inline">
                        <label for="horizontal-form-1" class="form-label sm:w-20">Email</label>
                        <input id="horizontal-form-1" type="text" class="form-control" placeholder="example@gmail.com" />
                    </div>
                    <div class="form-inline mt-5">
                        <label for="horizontal-form-2" class="form-label sm:w-20">Password</label>
                        <input id="horizontal-form-2" type="password" class="form-control" placeholder="secret" />
                    </div>
                    <div class="sm:ml-20 sm:pl-5 mt-5">
                        <button class="btn btn-primary">Kirim</button>
                    </div>
                </div>
            </PreviewComponent>
            <form>
                <label for="latitude">Latitude:</label>
                <input id="latitude" type="text" />
                <label for="longitude">Longitude:</label>
                <input id="longitude" type="text" />
            </form>
            <div id="map"></div>
        </div>
    </div>
</template>
<style>
html,
body,
#map {
    margin: 0px;
    width: 100%;
    height: 100%;
    padding: 0px;
}
</style>
<script data-require="leaflet@0.7.3" data-semver="0.7.3" src="//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>
<script>
var tileLayer = new L.TileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

var map = new L.Map('map', {
    'center': [-4.144910, 122.174606],
    'zoom': 8,
    'layers': [tileLayer]
});

var marker = L.marker([-4.144910, 122.174606], {
    draggable: true
}).addTo(map);

marker.on('dragend', function(e) {
    document.getElementById('latitude').value = marker.getLatLng().lat;
    document.getElementById('longitude').value = marker.getLatLng().lng;
});
</script>