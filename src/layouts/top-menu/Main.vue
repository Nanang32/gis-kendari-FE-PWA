<template>
  <div class="py-5 md:py-0 ml-10 mr-10 mt-0 mb-3">
    <DarkModeSwitcher />
    <MobileMenu />
    <TinySlider />
    <!-- BEGIN: Top Menu -->
    <nav class="top-nav" style="padding-top: 2rem;">
      <ul>
        <li v-for="(menu, menuKey) in formattedMenu" :key="menuKey">
          <a
            :href="
              menu.subMenu
                ? 'javascript:;'
                : router.resolve({ name: menu.pageName }).path
            "
            class="top-menu"
            :class="{
              'top-menu--active': menu.active,
            }"
            @click="linkTo(menu, router, $event)"
          >
            <div class="top-menu__icon">
              <component :is="menu.icon" />
            </div>
            <div class="top-menu__title">
              {{ menu.title }}
              <ChevronDownIcon v-if="menu.subMenu" class="top-menu__sub-icon" />
            </div>
          </a>
          <!-- BEGIN: Second Child -->
          <ul v-if="menu.subMenu">
            <li v-for="(subMenu, subMenuKey) in menu.subMenu" :key="subMenuKey">
              <a
                :href="
                  subMenu.subMenu
                    ? 'javascript:;'
                    : router.resolve({ name: subMenu.pageName }).path
                "
                class="top-menu"
                @click="linkTo(subMenu, router, $event)"
              >
                <div class="top-menu__icon">
                  <ActivityIcon />
                </div>
                <div class="top-menu__title">
                  {{ subMenu.title }}
                  <ChevronDownIcon
                    v-if="subMenu.subMenu"
                    class="top-menu__sub-icon"
                  />
                </div>
              </a>
              <!-- BEGIN: Third Child -->
              <ul v-if="subMenu.subMenu">
                <li
                  v-for="(lastSubMenu, lastSubMenuKey) in subMenu.subMenu"
                  :key="lastSubMenuKey"
                >
                  <a
                    :href="
                      lastSubMenu.subMenu
                        ? 'javascript:;'
                        : router.resolve({ name: lastSubMenu.pageName }).path
                    "
                    class="top-menu"
                    @click="linkTo(lastSubMenu, router, $event)"
                  >
                    <div class="top-menu__icon">
                      <component :is="'zap-icon'" />
                    </div>
                    <div class="top-menu__title">
                      {{ lastSubMenu.title }}
                      <ChevronDownIcon
                        v-if="subMenu.subMenu"
                        class="top-menu__sub-icon"
                      />
                    </div>
                  </a>
                  <!-- BEGIN: Third Child -->
                  <ul v-if="subMenu.subMenu">
                    <li
                      v-for="(lastSubMenu, lastSubMenuKey) in subMenu.subMenu"
                      :key="lastSubMenuKey"
                    >
                      <a
                        :href="
                          lastSubMenu.subMenu
                            ? 'javascript:;'
                            : router.resolve({ name: lastSubMenu.pageName }).path
                        "
                        class="top-menu"
                        @click="linkTo(lastSubMenu, router, $event)"
                      >
                        <div class="top-menu__icon">
                          <component :is="'zap-icon'" />
                        </div>
                        <div class="top-menu__title">
                          {{ lastSubMenu.title }}
                          <ChevronDownIcon
                            v-if="subMenu.subMenu"
                            class="top-menu__sub-icon"
                          />
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <!-- END: Third Child -->
            </li>
          </ul>
          <!-- END: Second Child -->
        </li>
      </ul>
    </nav>
    <!-- END: Top Menu -->
    <!-- BEGIN: Content -->
    <div class="content content--top-nav">
      <router-view />
    </div>
    <!-- END: Content -->
   
<footer class="bg-white bg-amber-400">
    <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-lg font-semibold  uppercase text-amber-900">Alamat</h2>
            <ul class="text-amber-900">
                <li class="mb-4">
                    <a class=" hover:underline font-semibold">DINAS SUMBER DAYA AIR DAN BINA MARGA PROVINSI SULAWESI TENGGARA <br> Jalan Haluoleo No. 05 Kompleks Perkantoran Bumi Praja Anduonohu, Kota Kendari </a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-lg font-semibold uppercase text-amber-900">Social media</h2>
            <ul class="text-amber-900">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Youtuber</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Twitter</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Facebook</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
       
        <div>
            <h2 class="mb-6 text-lg font-semibold  uppercase text-amber-900">Situs terkait</h2>
            <ul class="text-amber-900">
                <li class="mb-4">
                    <a href="https://www.sultraprov.go.id/" class="hover:underline" target="_blank">Pemerintah sulawesi tenggara</a>
                </li>
                <li class="mb-4">
                    <a href="https://www.pu.go.id/" class="hover:underline" target="_blank">Kementrian PUPR</a>
                </li>
                <li class="mb-4">
                    <a href="https://sda.pu.go.id/" class="hover:underline" target="_blank">Direktorat SDA</a>
                </li>
                <li class="mb-4">
                    <a href="https://binamarga.pu.go.id/" class="hover:underline" target="_blank">Direktorat bina marga</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="py-6 px-4 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2022 <a href="https://flowbite.com/">SISDJATAN (sistem informasi sumber daya air jalan jembatan)</a>
        </span>
    </div>
</footer>

  </div>
</template>

<script setup>
import { computed, onMounted, provide, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTopMenuStore } from "@/stores/top-menu";
import { helper as $h } from "@/utils/helper";
import TopBar from "@/components/top-bar/Main.vue";
import MobileMenu from "@/components/mobile-menu/Main.vue";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
import MainColorSwitcher from "@/components/main-color-switcher/Main.vue";
import TinySlider from '@/components/tiny-slider/Main.vue'
import {
  searchDropdown,
  showSearchDropdown,
  hideSearchDropdown,
} from "./index";
import { nestedMenu, linkTo } from "@/layouts/side-menu";
import dom from "@left4code/tw-starter/dist/js/dom";

const route = useRoute();
const router = useRouter();
const formattedMenu = ref([]);
const topMenuStore = useTopMenuStore();
const topMenu = computed(() => nestedMenu(topMenuStore.menu, route));

provide("forceActiveMenu", (pageName) => {
  route.forceActiveMenu = pageName;
  formattedMenu.value = $h.toRaw(topMenu.value);
});

watch(
  computed(() => route.path),
  () => {
    delete route.forceActiveMenu;
    formattedMenu.value = $h.toRaw(topMenu.value);
  }
);

onMounted(() => {
  dom("body").removeClass("error-page").removeClass("login").addClass("main");
  formattedMenu.value = $h.toRaw(topMenu.value);
});
</script>
