<template>
    <div class="text-gray-700 pt-9 sm:pt-10">
        <Navbar />
        <main id="content">
            <!-- block news -->
            <div class="bg-gray-50 py-6">
                <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div class="flex flex-row flex-wrap">
                        <!-- Left -->
                        <div class="flex-shrink max-w-full w-full lg:w-2/5  overflow-hidden">
                            <div class="w-full py-3">
                                <h2 class="text-gray-800 text-3xl font-bold">
                                    <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span> Pengaduan masyarakat
                                </h2>
                            </div>
                            <div class="flex flex-row flex-wrap -mx-3">
                                <div class="flex-shrink max-w-full w-full px-3 pb-5">
                                    <div class="px-8 py-6 border border-gray-100 bg-white">
                                        <form class="flex flex-wrap flex-row -mx-4">
                                            <div class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label for="inputfirst4" class="inline-block mb-2">Nama</label>
                                                <input type="text" class="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputfirst4" required>
                                            </div>
                                            <div class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label for="inputlast4" class="inline-block mb-2">Judul laporan</label>
                                                <input type="text" class="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputlast4" required>
                                            </div>
                                            <div class="flex-shrink max-w-full px-4 w-full md:w-2/2 mb-6">
                                                <label for="inputurgent" class="inline-block mb-2">Jenis infrastruktur</label>
                                                <select id="inputurgent" class="inline-block w-full leading-5 relative py-3 pl-3 pr-8 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 select-caret appearance-none dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" required>
                                                    <option>Jalan</option>
                                                    <option>Jembatan</option>
                                                    <option>Sungai</option>
                                                    <option>Irigasi</option>
                                                    <option>Bendung</option>
                                                    <option>Pengaman pantai</option>
                                                </select>
                                            </div>
                                            <div class="flex-shrink max-w-full px-4 w-full mb-6">
                                                <label for="exampleTextarea1" class="inline-block mb-2">Keterangan</label>
                                                <textarea class="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="exampleTextarea1" rows="3"></textarea>
                                            </div>
                                            <div class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                                                <label for="inputfirst4" class="inline-block mb-2">Foto</label>
                                                <input type="file" class="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputfirst4" required>
                                            </div>
                                            <div class="flex-shrink max-w-full px-4 w-full md:w-2/2 mb-6">
                                                <label for="inputfirst4" class="inline-block mb-2">Lokasi (Peta)</label>
                                                <input type="text" class="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputfirst4" required>
                                            </div>
                                            <div class="flex-shrink max-w-full px-4 w-full">
                                                <button class="flex items-center py-3 px-5 leading-5 text-gray-100 bg-black hover:text-white hover:bg-gray-900 hover:ring-0 focus:outline-none focus:ring-0" type="submit">
                                                    Kirim laporan
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- right -->
                        <div class="flex-shrink max-w-full w-full lg:w-7/12 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
                            <div class="w-full bg-white">
                                <div class="mb-6">
                                    <div class="p-4 bg-gray-100">
                                        <h2 class="text-lg font-bold">Tabel pengaduan</h2>
                                    </div>
                                    <div class="block w-full overflow-x-auto ">
                                        <table class="items-center w-full bg-transparent border-collapse">
                                            <thead>
                                                <tr>
                                                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">No</th>
                                                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Judul</th>
                                                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">JD</th>
                                                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Lokasi</th>
                                                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Status </th>
                                                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                                        1</th>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Jembatan retak</td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        Jembatan</td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <a href="">-1312312312,213213123</a>
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div class="flex items-center">
                                                            <span class="mr-2 bg-blue-400 text-white">Diterima</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                                        2</th>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Jembatan retak</td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        Jembatan</td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <a href="">-1312312312,213213123</a>
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div class="flex items-center">
                                                            <span class="mr-2 bg-yellow-400 text-white">Diproses</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                                        3</th>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Jembatan retak</td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        Jembatan</td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <a href="">-1312312312,213213123</a>
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div class="flex items-center">
                                                            <span class="mr-2 bg-green-400 text-white">Selesai</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>
<script setup>
import "./theme.js";
import "./scripts.js";
import Navbar from "../../components/navbar-menu/Main.vue";
import Footer from "../../components/footer-public/Main.vue";
import hcSticky from "hc-sticky";
import glightbox from "glightbox";
import splide from "@splidejs/splide";
// import splideExtensionVideo from "@splidejs/splide-extension-video";
</script>
<style>
@import "./style.css";
</style>