<template>
    <div>
        <nav class="px-6 py-4 bg-[#fff103] md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <img class="mx-auto h-11 w-10 mr-2" src="@/assets/images/logosultra.png" />
                <div class="mx-w-10 text-2xl font-bold capitalize text-black flex items-center pt-3">SISDJATAN</div>
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
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        ">
                <li class="border-ember-800 cursor-pointer">
                    <router-link :to="{name: 'site'}" class=" block px-4 py-2 text-sm text-black hover:text-black">
                        Beranda
                    </router-link>
                </li>
                <li class="border-ember-800 cursor-pointer">
                    <div class="relative">
                        <!-- Dropdown toggle button -->
                        <button @click="showProfile = !showProfile" class="flex items-center rounded-md focus:outline-none">
                            <span class="mr-4">Profil</span>
                            <svg class="w-5 h-5 text-indigo-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div v-show="showProfile" class="py-2 mt-2 bg-[#fff103] rounded-md shadow-xl lg:absolute lg:right-0 w-44 z-10">
                            <router-link :to="{name: 'site-visimisi'}" class="block px-4 py-2 text-sm text-black hover:text-black ">
                                Visi Misi
                            </router-link>
                            <router-link :to="{name: 'site-tasknfunction'}" class="block px-4 py-2 text-sm text-black hover:text-black ">
                                Tugas &amp; Fungsi
                            </router-link>
                            <router-link :to="{name: 'site-strukturorg'}" class="block px-4 py-2 text-sm text-black hover:text-black">
                                Struktur Organisasi
                            </router-link>
                            <router-link :to="{name:'site-profsekret'}" class="block px-4 py-2 text-sm text-black hover:text-black ">
                                Sekretariat
                            </router-link>
                            <router-link :to="{name: 'site-profpjpa'}" class=" block px-4 py-2 text-sm text-black hover:text-black ">
                                Bidang PJPA
                            </router-link>
                            <router-link :to="{name: 'site-profpjsa'}" class="block px-4 py-2 text-sm text-black hover:text-black">
                                Bidang PJSA
                            </router-link>
                            <router-link :to="{name: 'site-profbinamarga'}" class="block px-4 py-2 text-sm text-black hover:text-black">
                                Bina Marga
                            </router-link>
                            <router-link :to="{name: 'site-profuptdwilayah'}" class="block px-4 py-2 text-sm text-black hover:text-black">
                                UPTD Wilayah I s/d IV
                            </router-link>
                            <router-link :to="{name:'site-profuptdlkonstruksi'}" class=" block px-4 py-2 text-sm text-black hover:text-black">
                                UPTD Lab Konstruksi
                            </router-link>
                            <router-link :to="{name:'site-profuptdpkonstruksi'}" class="block px-4 py-2 text-sm text-black hover:text-black ">
                                UPTD Peralatan Konstruksi
                            </router-link>
                        </div>
                    </div>
                </li>
                <li class="border-ember-800 cursor-pointer">
                    <div class="relative">
                        <!-- Dropdown toggle button -->
                        <button @click="showPublication = !showPublication" class="flex items-center rounded-md focus:outline-none ">
                            <span class="mr-4">Publikasi</span>
                            <svg class="w-5 h-5 text-indigo-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div v-show="showPublication" class="py-2 mt-2 bg-[#fff103] rounded-md shadow-xl lg:absolute lg:right-0 w-44 z-10 ">
                            <router-link :to="{name: 'site-prodhukum'}" class="block px-4 py-2 text-sm text-black hover:text-black ">
                                Publikasi Hukum
                            </router-link>
                            <router-link :to="{name: 'site-renstra'}" class=" block px-4 py-2 text-sm text-black hover:text-black ">
                                Publikasi Strategis
                            </router-link>
                            <router-link :to="{name: 'site-jobperformance'}" class="block px-4 py-2 text-sm text-black hover:text-black">
                                Kinerja Pekerjaan
                            </router-link>
                            <router-link :to="{name: 'site-infpjpa'}" class="block px-4 py-2 text-sm text-black hover:text-black">
                                Informasi PJPA
                            </router-link>
                            <router-link :to="{name: 'site-infpjsa'}" class="block px-4 py-2 text-sm text-black hover:text-black">
                                Informasi PJSA
                            </router-link>
                        </div>
                    </div>
                </li>
                <li class="border-ember-800 cursor-pointer">
                    <router-link :to="{name: 'site-all'}" class="block px-4 py-2 text-sm text-black hover:text-black">
                        Galeri
                    </router-link>
                </li>
                <li class="border-ember-800 cursor-pointer">
                    <router-link :to="{name: 'site-mapgis'}" class="block px-4 py-2 text-sm text-black hover:text-black">
                        GIS
                    </router-link>
                </li>
                <li class="border-ember-800 cursor-pointer">
                    <div class="relative">
                        <!-- Dropdown toggle button -->
                        <button @click="showService = !showService" class="
                flex
                items-center
                rounded-md
                focus:outline-none
              ">
                            <span class="mr-4">Pelayanan</span>
                            <svg class="w-5 h-5 text-indigo-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div v-show="showService" class="
                py-2
                mt-2
                bg-[#fff103]
                rounded-md
                shadow-xl
                lg:absolute lg:right-0
                w-44
                z-10
              ">
                            <router-link :to="{name: 'site-reporting'}" class="
                  block
                  px-4
                  py-2
                  text-sm text-black
                  hover:text-black
                ">
                                Peng. Masyarakat
                            </router-link>
                            <router-link :to="{name: 'site-uptdlab'}" class="
                  block
                  px-4
                  py-2
                  text-sm text-black
                  hover:text-black
                ">
                                UPTD Lab
                            </router-link>
                        </div>
                    </div>
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