<template>
    <div class="sticky top-0 z-50">
        <nav class="px-6 py-4 bg-[#08276e] md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <img class="mx-auto h-14 w-72 mr-2" src="@/assets/images/logosultra.png" />
                <router-link to="/" class="
            text-xl
            font-bold
            text-gray-100
            md:text-2xl
            hover:text-indigo-400
          ">
                </router-link>
                <!-- Mobile menu button -->
                <div @click="toggleNav" class="flex md:hidden">
                    <button type="button" class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            ">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <ul :class="showMenu ? 'flex' : 'hidden'" class="
          flex-col
          mt-8
          space-y-4
          text-black text-sm items-center font-bold
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 pr-14
        ">
                <li class="border-ember-800 cursor-pointer">
                    <router-link :to="{name: 'site'}" class=" block px-4 py-2 text-sm text-white hover:text-blue-300 uppercase">
                        Beranda
                    </router-link>
                </li>
                <li class="flex relative group uppercase">
                    <a href="#" class="mr-1 text-white">Profil</a>
                    <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    <!-- Submenu starts -->
                    <ul class="absolute bg-[#08276e] e p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name: 'site-visimisi'}" class="block px-4 py-2 text-xs text-white hover:text-blue-300 ">
                                Visi Misi
                            </router-link>
                        </li>
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name: 'site-tasknfunction'}" class="block px-4 py-2 text-xs text-white hover:text-blue-300 ">
                                Tugas &amp; Fungsi
                            </router-link>
                        </li>
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name: 'site-strukturorg'}" class="block px-4 py-2 text-xs text-white hover:text-blue-300">
                                Struktur Organisasi
                            </router-link>
                        </li>
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name:'site-profsekret'}" class="block px-4 py-2 text-xs text-white hover:text-blue-300 ">
                                Sekretariat
                            </router-link>
                        </li>
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name: 'site-profpjpa'}" class=" block px-4 py-2 text-xs text-white hover:text-blue-300 ">
                                Bidang PJPA
                            </router-link>
                        </li>
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name: 'site-profpjsa'}" class="block px-4 py-2 text-xs text-white hover:text-blue-300">
                                Bidang PJSA
                            </router-link>
                        </li>
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name: 'site-profbinamarga'}" class="block px-4 py-2 text-xs text-white hover:text-blue-300">
                                Bidang Bina Marga
                            </router-link>
                        </li>
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name: 'site-profuptdwilayah'}" class="block px-4 py-2 text-xs text-white hover:text-blue-300">
                                UPTD Wilayah I s/d IV
                            </router-link>
                        </li>
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name:'site-profuptdlkonstruksi'}" class=" block px-4 py-2 text-xs text-white hover:text-blue-300">
                                UPTD Lab Konstruksi
                            </router-link>
                        </li>
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name:'site-profuptdpkonstruksi'}" class="block px-4 py-2 text-xs text-white hover:text-blue-300 ">
                                UPTD Peralatan
                            </router-link>
                        </li>
                    </ul>
                    <!-- Submenu ends -->
                </li>
                <li class="flex relative group uppercase">
                    <a href="#" class="mr-1 text-white">publikasi</a>
                    <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    <!-- Submenu starts -->
                    <ul class="absolute bg-[#08276e] e p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name: 'site-prodhukum'}" class="block px-4 py-2 text-xs text-white hover:text-blue-300 ">
                                produk Hukum
                            </router-link>
                        </li>
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name: 'site-renstra'}" class=" block px-4 py-2 text-xs text-white hover:text-blue-300 ">
                                rencana strategis
                            </router-link>
                        </li>
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name: 'site-jobperformance'}" class="block px-4 py-2 text-xs text-white hover:text-blue-300">
                                Kinerja Pekerjaan
                            </router-link>
                        </li>
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name: 'site-infpjpa'}" class="block px-4 py-2 text-xs text-white hover:text-blue-300">
                                Informasi PJPA
                            </router-link>
                        </li>
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name: 'site-infpjsa'}" class="block px-4 py-2 text-xs text-white hover:text-blue-300">
                                Informasi PJSA
                            </router-link>
                        </li>
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name: 'site-infbinamarga'}" class="block px-4 py-2 text-xs text-white hover:text-blue-300">
                                Informasi Bina Marga
                            </router-link>
                        </li>
                    </ul>
                    <!-- Submenu ends -->
                </li>
                <li class="border-ember-800 cursor-pointer">
                    <router-link :to="{name: 'site-all'}" class="block px-4 py-2 text-sm text-white hover:text-blue-300 uppercase">
                        Galeri
                    </router-link>
                </li>
                <li class="border-ember-800 cursor-pointer">
                    <router-link :to="{name: 'site-mapgis'}" class="block px-4 py-2 text-sm text-white hover:text-blue-300 uppercase">
                        webGIS
                    </router-link>
                </li>
                <li class="flex relative group uppercase">
                    <a href="#" class="mr-1 text-white">pelayanan</a>
                    <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    <!-- Submenu starts -->
                    <ul class="absolute bg-[#08276e] e  w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name: 'site-reporting'}" class="block px-4 py-2 text-xs text-white hover:text-blue-300">
                                Peng. Masyarakat
                            </router-link>
                        </li>
                        <li class="text-sm hover:bg-slate-100 leading-8">
                            <router-link :to="{name: 'site-uptdlab'}" class="block px-4 py-2 text-xs text-white hover:text-blue-300">
                                UPTD Lab
                            </router-link>
                        </li>
                    </ul>
                    <!-- Submenu ends -->
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
let showMenu = ref(false);
let showProfile = ref(false);
let showPublication = ref(false);
let showService = ref(false);
const router = useRouter();

const toggleNav = () => (showMenu.value = !showMenu.value);
</script>