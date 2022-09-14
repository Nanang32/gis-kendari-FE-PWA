import { defineStore } from "pinia";

export const useTopMenuStore = defineStore("topMenu", {
    state: () => ({
        menu: [{
                icon: "HomeIcon",
                pageName: "home",
                title: "Beranda",
            },
            {
                icon: "HomeIcon",
                // pageName: "top-menu-profile",
                title: "Profile",
                subMenu: [{
                        icon: "",
                        pageName: "visimisi",
                        title: "Visi & Misi",
                    },
                    {
                        icon: "",
                        pageName: "tugasfungsi",
                        title: "Tugas & Fungsi",
                    },
                    {
                        icon: "",
                        pageName: "strukturorg",
                        title: "Struktur Organisasi",
                    },
                    {
                        icon: "HomeIcon",
                        pageName: "profile-dinas",
                        title: "Profile dinas",
                        subMenu: [{
                                icon: "",
                                pageName: "profsekret",
                                title: "Sekertariat",
                            },
                            {
                                icon: "",
                                pageName: "profpjpa",
                                title: "Bidang PJPA",
                            },
                            {
                                icon: "",
                                pageName: "profpjsa",
                                title: "Bidang PJSA",
                            },
                            {
                                icon: "",
                                pageName: "profbmarga",
                                title: "Bidang binamarga",
                            },
                            {
                                icon: "HomeIcon",
                                pageName: "UPTD",
                                title: "UPTD",
                                subMenu: [{
                                        icon: "",
                                        pageName: "profuwilayah",
                                        title: "Wilayah I s/d IV",
                                    },
                                    {
                                        icon: "",
                                        pageName: "profulab",
                                        title: "Laboratorium konstruksi",
                                    },
                                    {
                                        icon: "",
                                        pageName: "profupkonstruksi",
                                        title: "Peralatan konstruksi",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                icon: "HomeIcon",
                pageName: "publikasi",
                title: "Publikasi",
                subMenu: [{
                        icon: "",
                        pageName: "prodhukum",
                        title: "Produk Hukum",
                    },
                    {
                        icon: "",
                        pageName: "renstra",
                        title: "Rencana Strategis",
                    },
                    {
                        icon: "",
                        pageName: "kinpekerjaan",
                        title: "Kinerja Pekerjaan",
                    },
                ],
            },
            {
                icon: "HomeIcon",
                pageName: "gallery",
                title: "Gallery",
                subMenu: [{
                        icon: "",
                        pageName: "news",
                        title: "Berita",
                    },
                    {
                        icon: "",
                        pageName: "agenda",
                        title: "Agenda",
                    },
                    {
                        icon: "",
                        pageName: "galleryphoto",
                        title: "Gallery Photo",
                    },
                    {
                        icon: "",
                        pageName: "galleryvideo",
                        title: "Gallery Video",
                    },
                ],
            },
            {
                icon: "HomeIcon",
                pageName: "webgis",
                title: "WebGis",
            },

            {
                icon: "HomeIcon",
                pageName: "pelayanan",
                title: "pelayanan",
                subMenu: [{
                    icon: "",
                    pageName: "report",
                    title: "Pengaduan Masyarakat"
                }]
            },
        ],
    }),
});