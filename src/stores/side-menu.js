import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "adminhome",
        title: "Page 1",
      },
      {
        icon: "HomeIcon",
        pageName: "admin-post",
        title: "Post",
      }
    ],
  }),
});
