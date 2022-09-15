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

        ],
    }),
});