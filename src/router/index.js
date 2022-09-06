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
import ProfiledinasIndex from "../views/public/Profile/profdinas.vue"
import ProfilesdaIndex from "../views/public/Profile/profsda.vue"
import ProfilebmargaIndex from "../views/public/Profile/profbmarga.vue"
import ProfilecpkaryaIndex from "../views/public/Profile/profcpkarya.vue"
import ProfileperumahanIndex from "../views/public/Profile/profperumahan.vue"
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
import AdminPostIndex from "../views/admin/post/index.vue";
import AdminPostCreate from "../views/admin/post/create.vue";


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
                path: "post-create",
                name: "admin-post-create",
                component: AdminPostCreate,
            },
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
                path: "profdinas",
                name: "profdinas",
                component: ProfiledinasIndex,
            },
            {
                path: "profsda",
                name: "profsda",
                component: ProfilesdaIndex,
            },
            {
                path: "profbmarga",
                name: "profbmarga",
                component: ProfilebmargaIndex,
            },
            {
                path: "profcpkarya",
                name: "profcpkarya",
                component: ProfilecpkaryaIndex,
            },
            {
                path: "profperumahan",
                name: "profperumahan",
                component: ProfileperumahanIndex,
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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { left: 0, top: 0 };
    },
});

export default router;