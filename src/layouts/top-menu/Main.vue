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
    <footer class="mt-4 p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800" style="background-color: rgb(var(--color-slate-100) / var(--tw-bg-opacity));">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
          </li>
          <li>
              <a href="#" class="hover:underline">Contact</a>
          </li>
      </ul>
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
