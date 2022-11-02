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
                            <li class="inline-block bg-white">
                                <a target="_blank" class="hover:text-blue-300" rel="noopener noreferrer" href="https://facebook.com" title="Facebook">
                                    <!-- <i class="fab fa-facebook fa-2x"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path>
                                    </svg>
                                </a>
                            </li>
                            
                            <!--youtube-->
                            <li class="inline-block bg-white">
                                <a target="_blank" class="hover:text-blue-300" rel="noopener noreferrer" href="https://youtube.com" title="Youtube">
                                    <!-- <i class="fab fa-youtube fa-2x"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z"></path>
                                    </svg>
                                </a>
                            </li>
                            <!--instagram-->
                            <li class="inline-block bg-white">
                                <a target="_blank" class="hover:text-blue-300" rel="noopener noreferrer" href="https://instagram.com" title="Instagram">
                                    <!-- <i class="fab fa-instagram fa-2x"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"></path>
                                        <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path>
                                        <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path>
                                    </svg>
                                </a>
                            </li>
                            <!--end instagram-->
                        </ul>
                    </div>
                    <div class="flex-shrink max-w-full w-full lg:w-3/5 px-3">
                        <div class="flex flex-wrap flex-row">
                            <div class="flex-shrink max-w-full w-1/3 md:w-2/4 mb-6 lg:mb-0">
                                <h4 class="text-base leading-normal mb-3 uppercase text-white">Contact Us</h4>
                                <ul class="text-white">
                                    <li class="py-1 hover:text-blue-300 capitalize">
                                        <MapIcon class="w-4 h-4 mr-1 inline-block" />Jalan Haluoleo No. 05 Kompleks Perkantoran Bumi Praja Anduonohu, Kota Kendari</li>
                                    <li class="py-1 hover:text-blue-300"><PhoneIcon class="w-4 h-4 mr-1 inline-block"/>0402 (000000)</li>
                                    <li class="py-1 hover:text-blue-300"><MailIcon class="w-4 h-4 mr-1 inline-block"/> sisdjatan.sdabmsultra@gmail.com</li>
                                </ul>
                            </div>
                            <div class="flex-shrink max-w-full w-1/3 md:w-2/4 mb-6 lg:mb-0 ml-10">
                                <h4 class="text-base leading-normal mb-3 uppercase text-white">Situs terkait</h4>
                                <ul class="text-white">
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
        <div class="footer-dark bg-[#ce7e00] border-t border-gray-200 border-opacity-100">
            <div class="container py-4 ">
                <div class="row">
                    <div class="col-12 col-md text-center">
                        <p class="d-block my-3 text-black">Copyright © SISDJATAN (sistem informasi sumber daya air jalan jembatan)</p>
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