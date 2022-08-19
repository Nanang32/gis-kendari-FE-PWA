import { defineStore } from "pinia";

export const useTopMenuStore = defineStore("topMenu", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "top-menu-home",
        title: "Beranda",
      },
      {
        icon: "HomeIcon",
        pageName: "top-menu-profile",
        title: "Profile",
        subMenu: [
          {
            icon: "",
            pageName: "profile-visimisi",
            title: "Visi & Misi",
          },
          {
            icon: "",
            pageName: "profile-tugasfungsi",
            title: "Tugas & Fungsi",
          },
          {
            icon: "",
            pageName: "profile-strukturorg",
            title: "Struktur Organisasi",
          },
          {
            icon: "",
            pageName: "profile-profdinas",
            title: "Profile Dinas",
          },
          {
            icon: "",
            pageName: "profile-sekret",
            title: "Profile Sekertariat",
          },
          {
            icon: "",
            pageName: "profile-profbid",
            title: "Profile Tiap Bidang",
          },
          {
            icon: "",
            pageName: "profile-profuptd",
            title: "Profile UPTD",
          },
        ],
      },
      {
        icon: "HomeIcon",
        pageName: "top-menu-publikasi",
        title: "Publikasi",
      },
      {
        icon: "HomeIcon",
        pageName: "top-menu-gallery",
        title: "Gallery",
      },
      {
        icon: "HomeIcon",
        pageName: "top-menu-webgis",
        title: "WebGis",
      },
      
      {
        icon: "HomeIcon",
        pageName: "top-menu-pelayanan",
        title: "pelayanan",
      },
    ],
  }),
});