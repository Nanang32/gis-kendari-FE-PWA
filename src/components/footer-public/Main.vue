<template>
    <footer class="bg-[#08276e] text-black">
        <!--Footer content-->
        <div id="footer-content" class="relative pt-8 xl:pt-16 pb-6 xl:pb-12">
            <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2 overflow-hidden">
                <div class="flex flex-wrap flex-row lg:justify-between -mx-3">
                    <div class="flex-shrink max-w-full w-full lg:w-2/5 px-3 lg:pr-16">
                        <div class="flex items-center mb-2">
                            <span class="text-3xl leading-normal mb-2 font-bold text-white mt-2">SISDJATAN</span>
                            <!-- <img src="@/assets/img-min/logo.png" alt="LOGO"> -->
                        </div>
                        <p class="text-white">DINAS SUMBER DAYA AIR DAN BINA MARGA PROVINSI SULAWESI TENGGARA <br> Jalan Haluoleo No. 05 Kompleks Perkantoran Bumi Praja Anduonohu, Kota Kendari </p>
                        <ul class="space-x-3 mt-6 mb-6 Lg:mb-0">
                            <!--facebook-->
                            <li class="inline-block">
                                <a target="_blank" class="hover:text-blue-300" rel="noopener noreferrer" href="https://facebook.com" title="Facebook">
                                    <!-- <i class="fab fa-facebook fa-2x"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50" style=" fill:#ffffff;">
                                        <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z"></path>
                                    </svg>
                                </a>
                            </li>
                            <!--youtube-->
                            <li class="inline-block">
                                <a target="_blank" class="hover:text-blue-300" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCzZnx9awVWBSro-Q6QKu5hQ" title="Youtube">
                                    <!-- <i class="fab fa-youtube fa-2x"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50" style=" fill:#ffffff;">
                                        <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"></path>
                                    </svg>
                                </a>
                            </li>
                            <!--instagram-->
                            <li class="inline-block">
                                <a target="_blank" class="hover:text-blue-300" rel="noopener noreferrer" href="#" title="Instagram">
                                    <!-- <i class="fab fa-instagram fa-2x"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48" style=" fill:#40C057;">
                                        <radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stop-color="#fd5"></stop>
                                            <stop offset=".328" stop-color="#ff543f"></stop>
                                            <stop offset=".348" stop-color="#fc5245"></stop>
                                            <stop offset=".504" stop-color="#e64771"></stop>
                                            <stop offset=".643" stop-color="#d53e91"></stop>
                                            <stop offset=".761" stop-color="#cc39a4"></stop>
                                            <stop offset=".841" stop-color="#c837ab"></stop>
                                        </radialGradient>
                                        <path fill="url(#undefined)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                                        <radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stop-color="#4168c9"></stop>
                                            <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
                                        </radialGradient>
                                        <path fill="url(#undefined)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20  c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                                        <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5  s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
                                        <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                                        <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12    C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                                    </svg>
                                </a>
                            </li>
                            <!--end instagram-->
                        </ul>
                    </div>
                    <div class="flex-shrink max-w-full w-full lg:w-3/5 px-3">
                        <div class="flex flex-wrap flex-row">
                            <div class="flex-shrink max-w-full w-1/3 md:w-2/4 mb-6 lg:mb-0">
                                <h4 class="text-base leading-normal mb-3 capitalize text-white">Contact Us</h4>
                                <ul class="text-white">
                                    <li class="py-1 hover:text-blue-300 capitalize">
                                        <MapIcon class="w-4 h-4 mr-1 inline-block" />Jalan Haluoleo No. 05 Kompleks Perkantoran Bumi Praja Anduonohu, Kota Kendari</li>
                                    <li class="py-1 hover:text-blue-300">
                                        <MailIcon class="w-4 h-4 mr-1 inline-block" /> sisdjatan.sdabmsultra@gmail.com</li>
                                </ul>
                            </div>
                            <div class="flex-shrink max-w-full w-1/3 md:w-2/4 mb-6 lg:mb-0 ml-10">
                                <h4 class="text-base leading-normal mb-3 capitalize text-white">Situs terkait</h4>
                                <ul class="text-white capitalize">
                                    <li class="py-1 hover:text-blue-300"><a href="https://www.sultraprov.go.id/" target="_blank">Pemerintah sulawesi tenggara</a></li>
                                    <li class="py-1 hover:text-blue-300"><a href="https://www.pu.go.id/" target="_blank">Kementrian PUPR</a></li>
                                    <li class="py-1 hover:text-blue-30"><a href="https://sda.pu.go.id/" target="_blank">Direktorat SDA</a></li>
                                    <li class="py-1 hover:text-blue-300"><a href="https://binamarga.pu.go.id/" target="_blank">Direktorat bina marga</a></li>
                                    <li class="py-1 hover:text-blue-300"><a href="https://lpse.sultraprov.go.id/eproc4" target="_blank">LPSE Prov.Sultra</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Start footer copyright-->
        <div class="footer-dark bg-black border-t border-gray-200 border-opacity-100">
            <div class="container py-4">
                <div class="row">
                    <div class="col-12 col-md text-center">
                        <p class="d-block my-3 text-white">Copyright © SISDJATAN (sistem informasi sumber daya air jalan jembatan)</p>
                    </div>
                </div>
            </div>
        </div>
        <!--End footer copyright-->
    </footer><!-- end footer -->
    <!-- =========={ SCROLL TO TOP }==========  -->
    <a href="#" class="back-top fixed p-4 rounded bg-gray-100 border border-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-800 right-4 bottom-4 hidden" aria-label="Scroll To Top">
        <svg width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
            <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z" clip-rule="evenodd"></path>
        </svg>
    </a>
</template>
<script>
export default {
    data() {
        return {
            showMenu: false,
        };
    },
};
</script>
<style scoped>
@import "./style.css";
</style>