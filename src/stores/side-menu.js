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

        ],
    }),
});