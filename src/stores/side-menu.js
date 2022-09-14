import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
    state: () => ({
        menu: [{
                icon: "HomeIcon",
                title: "Berita",
                subMenu: [{
                        icon: "HomeIcon",
                        pageName: "admin-category",
                        title: "Kategori",
                    },
                    {
                        icon: "",
                        pageName: "admin-post",
                        title: "Artikel",
                    },

                ]

            },
            // {
            //     icon: "HomeIcon",
            //     title: "Dinas Pu pusat",
            //     subMenu: [{
            //             icon: "HomeIcon",
            //             pageName: "admin-taskfunction",
            //             title: "Tugas&fungsi dinas",
            //         },
            //         {
            //             icon: "",
            //             pageName: "admin-vissionmission",
            //             title: "Visi&misi dinas",
            //         },
            //         {
            //             icon: "",
            //             pageName: "admin-structure",
            //             title: "Struktur organisasi dinas",
            //         },

            //     ]

            // },
            {
                icon: "HomeIcon",
                title: "Profile Dinas",
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

        ],
    }),
});