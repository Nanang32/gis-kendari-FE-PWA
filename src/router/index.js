import { createRouter, createWebHistory } from "vue-router";
import TopMenu from "../layouts/top-menu/Main.vue";
import SideMenu from "../layouts/side-menu/Main.vue";
import HomeIndex from "../views/public/Home/Main.vue";
//profile
import ProfileIndex from "../views/public/Profile/Main.vue";
import VisimisiIndex from "../views/public/Profile/visimisi.vue";
import TugasfungsiIndex from "../views/public/Profile/tugasfungsi.vue";
import StrukorgIndex from "../views/public/Profile/strukturorg.vue";
import ProfilbidIndex from "../views/public/Profile/profbid.vue";
import ProfileuptdIndex from "../views/public/Profile/profuptd.vue";
import ProfilesekretIndex from "../views/public/Profile/profsekret.vue";
import ProfilepjpaIndex from "../views/public/Profile/profpjpa.vue"
import ProfilepjsaIndex from "../views/public/Profile/profpjsa.vue"
import ProfilebmargaIndex from "../views/public/Profile/profbmarga.vue"
import ProfileuwilayahIndex from "../views/public/Profile/profuwilayah.vue"
import ProfileulabIndex from "../views/public/Profile/profulab.vue"
import ProfileupkonstruksiIndex from "../views/public/Profile/profupkonstruksi.vue"

//publikasi
import PublicationIndex from "../views/public/Publication/Main.vue";
import ProductoflawIndex from "../views/public/Publication/prodhukum.vue";
import StrategicplanIndex from "../views/public/Publication/renstra.vue";
import JobperformanceIndex from "../views/public/Publication/kinpekerjaan.vue";
//gallery
import GalleryIndex from "../views/public/Gallery/Main.vue";
import GallerynewsIndex from "../views/public/Gallery/news.vue";
import GalleryagendaIndex from "../views/public/Gallery/agenda.vue";
import GalleryphotoIndex from "../views/public/Gallery/photoalbum.vue";
import GalleryvideoIndex from "../views/public/Gallery/videoalbum.vue";
import WebgisIndex from "../views/public/Webgis/Main.vue";
import ServicesIndex from "../views/public/Services/Main.vue";
import ServicesreportIndex from "../views/public/Services/report.vue";
//admin
import AdminNewsIndex from "../views/admin/blog.vue";
//posting
import AdminPostIndex from "../views/admin/post/index.vue";
import AdminPostCreate from "../views/admin/post/create.vue";
import AdminPostEdit from "../views/admin/post/edit.vue";
//categories
import AdminCategoyIndex from "../views/admin/category/index.vue";
import AdminCategoyCreate from "../views/admin/category/create.vue";
import AdminCategoyEdit from "../views/admin/category/edit.vue";
// login
import Login from "../views/login/Main.vue";

const routes = [{
        path: "/admin",
        component: SideMenu,
        children: [{
                path: "home",
                name: "adminhome",
                component: AdminNewsIndex,
            },
            {
                path: "post",
                name: "admin-post",
                component: AdminPostIndex,
            },
            {
                path: "post/create",
                name: "admin-post-create",
                component: AdminPostCreate,
            },
            {
                path: "category",
                name: "admin-category",
                component: AdminCategoyIndex,
            },
            {
                path: "category/create",
                name: "admin-category-create",
                component: AdminCategoyCreate,
            },
            // {
            //     path: "category/edit/:id",
            //     name: "admin-category-edit",
            //     component: AdminCategoryEdit,
            // },
        ],
    },
    {
        path: "/public",
        component: TopMenu,
        children: [{
                path: "/home",
                name: "home",
                component: HomeIndex,
            },
            {
                path: "/profile",
                name: "profile",
                component: ProfileIndex,
            },
            {
                path: "visimisi",
                name: "visimisi",
                component: VisimisiIndex,
            },
            {
                path: "profpjpa",
                name: "profpjpa",
                component: ProfilepjpaIndex,
            },
            {
                path: "profpjsa",
                name: "profpjsa",
                component: ProfilepjsaIndex,
            },
            {
                path: "profbmarga",
                name: "profbmarga",
                component: ProfilebmargaIndex,
            },
            {
                path: "profuwilayah",
                name: "profuwilayah",
                component: ProfileuwilayahIndex,
            },
            {
                path: "profulab",
                name: "profulab",
                component: ProfileulabIndex,
            },
            {
                path: "profupkonstruksi",
                name: "profupkonstruksi",
                component: ProfileupkonstruksiIndex,
            },
            {
                path: "strukturorg",
                name: "strukturorg",
                component: StrukorgIndex,
            },
            {
                path: "tugasfungsi",
                name: "tugasfungsi",
                component: TugasfungsiIndex,
            },
            {
                path: "profbid",
                name: "profbid",
                component: ProfilbidIndex,
            },
            {
                path: "profuptd",
                name: "profuptd",
                component: ProfileuptdIndex,
            },
            {
                path: "profsekret",
                name: "profsekret",
                component: ProfilesekretIndex,
            },

            {
                path: "publikasi",
                name: "publikasi",
                component: PublicationIndex,
            },
            {
                path: "prodhukum",
                name: "prodhukum",
                component: ProductoflawIndex,
            },
            {
                path: "renstra",
                name: "renstra",
                component: StrategicplanIndex,
            },
            {
                path: "kinpekerjaan",
                name: "kinpekerjaan",
                component: JobperformanceIndex,
            },
            {
                path: "gallery",
                name: "gallery",
                component: GalleryIndex,
            },
            {
                path: "news",
                name: "news",
                component: GallerynewsIndex,
            },
            {
                path: "agenda",
                name: "agenda",
                component: GalleryagendaIndex,
            },
            {
                path: "galleryphoto",
                name: "galleryphoto",
                component: GalleryphotoIndex,
            },
            {
                path: "galleryvideo",
                name: "galleryvideo",
                component: GalleryvideoIndex,
            },
            {
                path: "webgis",
                name: "webgis",
                component: WebgisIndex,
            },
            {
                path: "pelayanan",
                name: "pelayanan",
                component: ServicesIndex,
            },
            {
                path: "report",
                name: "report",
                component: ServicesreportIndex,
            }
        ],
    },
    {
    path: "/login",
    component: Login
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