import { createRouter, createWebHistory } from "vue-router";
import TopMenu from "../layouts/top-menu/Main.vue";
import Home from "../views/public/Home/Main.vue";
//profile
import Profile from "../views/public/Profile/Main.vue";
import Visimisi from "../views/public/Profile/visimisi.vue";
import Tugasfungsi from "../views/public/Profile/tugasfungsi.vue";
import Strukorg from "../views/public/Profile/strukturorg.vue";
import Profilbid from "../views/public/Profile/profbid.vue";
import Profileuptd from "../views/public/Profile/profuptd.vue";
import Profilesekret from "../views/public/Profile/profsekret.vue";

import Publication from "../views/public/Publication/Main.vue";
import Gallery from "../views/public/Gallery/Main.vue";
import Webgis from "../views/public/Webgis/Main.vue";
import Services from "../views/public/Services/Main.vue";


const routes = [
  {
    path: "/",
    component: TopMenu,
    children: [
      {
        path: "/",
        name: "top-menu-home",
        component: Home,
      },
      {
        path: "/profile",
        name: "top-menu-profile",
        component: Profile,
      },
      {
        path: "visimis",
        name: "top-menu-visimisi",
        component: Visimisi,
      },
      {
        path: "tugasfungsi",
        name: "top-menu-tugas-fungsi",
        component: Tugasfungsi,
      },
      {
        path: "profbid",
        name: "top-menu-profbid",
        component: Profilbid,
      },
      {
        path: "profuptd",
        name: "top-menu-profileuptd",
        component: Profileuptd,
      },
      {
        path: "profsekret",
        name: "top-menu-profilesekret",
        component: Profilesekret,
      },
      
      {
        path: "publikasi",
        name: "top-menu-publikasi",
        component: Publication,
      },
      {
        path: "gallery",
        name: "top-menu-gallery",
        component: Gallery,
      },
      {
        path: "webgis-2",
        name: "top-menu-webgis",
        component: Webgis,
      },
      {
        path: "pelayanan",
        name: "top-menu-pelayanan",
        component: Services,
      },

    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
