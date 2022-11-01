import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
    state: () => ({
        menu: [{
                icon: "HomeIcon",
                pageName: "admin-category",
                title: "Kategori",
            },
            {
                icon: "HomeIcon",
                pageName: "admin-post",
                title: "Artikel",
            },
            {
                icon: "HomeIcon",
                title: "Dinas Pu pusat",
                subMenu: [{
                        icon: "HomeIcon",
                        pageName: "admin-taskfunction",
                        title: "Tugas&fungsi dinas",
                    },
                    {
                        icon: "",
                        pageName: "admin-vissionmission",
                        title: "Visi&misi dinas",
                    },
                    {
                        icon: "",
                        pageName: "admin-structure",
                        title: "Struktur organisasi dinas",
                    },

                ]

            },
            {
                icon: "HomeIcon",
                title: "Profile Dinas",
                subMenu: [{
                        icon: "HomeIcon",
                        pageName: "admin-secretariat",
                        title: "Sekertariat",
                    },
                    {
                        icon: "",
                        pageName: "admin-pjpa",
                        title: "PJPA",
                    },
                    {
                        icon: "",
                        pageName: "admin-pjsa",
                        title: "PJSA",
                    },
                    {
                        icon: "",
                        pageName: "admin-binamarga",
                        title: "Bina marga",
                    },

                ]

            },
            {
                icon: "HomeIcon",
                title: "UPTD",
                subMenu: [{
                        icon: "HomeIcon",
                        pageName: "admin-uptdregion",
                        title: "Wilayah",
                    },
                    {
                        icon: "",
                        pageName: "admin-uptdlabcontruction",
                        title: "Lab. Konstruksi",
                    },
                    {
                        icon: "",
                        pageName: "admin-uptdcontructionequipment",
                        title: "Per. Konstruksi",
                    }

                ]

            },
            {
                icon: "HomeIcon",
                title: "Publikasi",
                subMenu: [{
                        icon: "HomeIcon",
                        pageName: "admin-law-document",
                        title: "Produk Hukum",
                    },
                    {
                        icon: "HomeIcon",
                        pageName: "admin-strategic-plan",
                        title: "Rencana Strategis",
                    },
                ]
            },
            {
                icon: "HomeIcon",
                title: "GIS Menejemen",
                subMenu: [{
                        icon: "HomeIcon",
                        pageName: "admin-riverbasin",
                        title: "Wilayah sungai",
                    },
                    {
                        icon: "HomeIcon",
                        pageName: "admin-watershed",
                        title: "Daerah aliran sungai",
                    },
                    {
                        icon: "HomeIcon",
                        pageName: "admin-river",
                        title: "Sungai",
                    },
                    {
                        icon: "HomeIcon",
                        pageName: "admin-weir",
                        title: "Bendung",
                    },
                    {
                        icon: "HomeIcon",
                        pageName: "admin-irrigation",
                        title: "Daerah irigasi",
                    },
                    {
                        icon: "HomeIcon",
                        pageName: "admin-road",
                        title: "Jalan",
                    },
                    {
                        icon: "HomeIcon",
                        pageName: "admin-groin",
                        title: "Pengaman pantai",
                    },
                    {
                        icon: "HomeIcon",
                        pageName: "admin-riverinfrastructure",
                        title: "Infrastruktur sungai",
                    },
                    {
                        icon: "HomeIcon",
                        pageName: "admin-bridge",
                        title: "Jembatan",
                    }

                ]

            },
            {
                icon: "HomeIcon",
                pageName: "admin-reports",
                title: "Laporan warga",
            },
            {
                icon: "HomeIcon",
                pageName: "admin-uptdlabs",
                title: "UPTD Labs",
            },
        ],
    }),
});