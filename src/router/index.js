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

// kinerja pekerjaan bidang pelaksanaan jaringan pemanfaatan air
import AdminJobperformWaterUtilizationNetworkIndex from "../views/admin/publication/job_performance/office_waterutilizationnetwork/index.vue";
import AdminJobperformWaterUtilizationNetworkCreate from "../views/admin/publication/job_performance/office_waterutilizationnetwork/create.vue";
import AdminJobperformWaterUtilizationNetworkeEdit from "../views/admin/publication/job_performance/office_waterutilizationnetwork/edit.vue";

// kinerja pekerjaan bidang pelaksanaan jaringan sumber air
import AdminJobperformImplementationWaterNetworkIndex from "../views/admin/publication/job_performance/office_implementationwaternetwork/index.vue";
import AdminJobperformImplementationWaterNetworkCreate from "../views/admin/publication/job_performance/office_implementationwaternetwork/create.vue";
import AdminJobperformImplementationWaterNetworkeEdit from "../views/admin/publication/job_performance/office_implementationwaternetwork/edit.vue";

// kinerja pekerjaan bina marga
import AdminJobperformBinaMargaIndex from "../views/admin/publication/job_performance/office_binamarga/index.vue";
import AdminJobperformBinaMargaCreate from "../views/admin/publication/job_performance/office_binamarga/create.vue";
import AdminJobperformBinaMargaEdit from "../views/admin/publication/job_performance/office_binamarga/edit.vue";


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
// profile
//tugas dan fungsi dinas
import AdminTaskNFunctionIndex from "../views/admin/profile/office_taskfunction/index.vue";
import AdminTaskNFunctionCreate from "../views/admin/profile/office_taskfunction/create.vue";
import AdminTaskNFunctionEdit from "../views/admin/profile/office_taskfunction/edit.vue";
//visi dan misi dinas
import AdminVissionmissionIndex from "../views/admin/profile/office_vissionmission/index.vue";
import AdminVissionmissionCreate from "../views/admin/profile/office_vissionmission/create.vue";
import AdminVissionmissionEdit from "../views/admin/profile/office_vissionmission/edit.vue";

// sekertariat
import AdminSecretariatIndex from "../views/admin/profile/office_secretariat/Main.vue"
// master data tugas&fungsi
import AdminsecretariattaskfunctionCreate from "../views/admin/profile/office_secretariat/taskfunction/create.vue";
import AdminsecretariattaskfunctionEdit from "../views/admin/profile/office_secretariat/taskfunction/edit.vue";
// master data program
import AdminsecretariatprogrammeCreate from "../views/admin/profile/office_secretariat/programme/create.vue";
import AdminsecretariatprogrammeEdit from "../views/admin/profile/office_secretariat/programme/edit.vue";
// master data struktur
import AdminsecretariatstructureCreate from "../views/admin/profile/office_secretariat/structure/create.vue";
import AdminsecretariatstructureEdit from "../views/admin/profile/office_secretariat/structure/edit.vue";

// Profile PJPA
import AdminpjpaIndex from "../views/admin/profile/office_subpjpa/Main.vue"
// master data tugas&fungsi
import AdminpjpataskfunctionCreate from "../views/admin/profile/office_subpjpa/taskfunction/create.vue";
import AdminpjpataskfunctionEdit from "../views/admin/profile/office_subpjpa/taskfunction/edit.vue";
// master data program
import AdminpjpaprogrammeCreate from "../views/admin/profile/office_subpjpa/programme/create.vue";
import AdminpjpaprogrammeEdit from "../views/admin/profile/office_subpjpa/programme/edit.vue";
// master data struktur
import AdminpjpastructureCreate from "../views/admin/profile/office_subpjpa/structure/create.vue";
import AdminpjpastructureEdit from "../views/admin/profile/office_subpjpa/structure/edit.vue";

// Profile PJSA
import AdminpjsaIndex from "../views/admin/profile/office_subpjsa/Main.vue"
// master data tugas&fungsi
import AdminpjsataskfunctionCreate from "../views/admin/profile/office_subpjsa/taskfunction/create.vue";
import AdminpjsataskfunctionEdit from "../views/admin/profile/office_subpjsa/taskfunction/edit.vue";
// master data program
import AdminpjsaprogrammeCreate from "../views/admin/profile/office_subpjsa/programme/create.vue";
import AdminpjsaprogrammeEdit from "../views/admin/profile/office_subpjsa/programme/edit.vue";
// master data struktur
import AdminpjsastructureCreate from "../views/admin/profile/office_subpjsa/structure/create.vue";
import AdminpjsastructureEdit from "../views/admin/profile/office_subpjsa/structure/edit.vue";

// Profile Binamarga
import AdminbinamargaIndex from "../views/admin/profile/office_subbinamarga/Main.vue"
// master data tugas&fungsi
import AdminbinamargataskfunctionCreate from "../views/admin/profile/office_subbinamarga/taskfunction/create.vue";
import AdminbinamargataskfunctionEdit from "../views/admin/profile/office_subbinamarga/taskfunction/edit.vue";
// master data program
import AdminbinamargaprogrammeCreate from "../views/admin/profile/office_subbinamarga/programme/create.vue";
import AdminpbinamargaprogrammeEdit from "../views/admin/profile/office_subbinamarga/programme/edit.vue";
// master data struktur
import AdminbinamargastructureCreate from "../views/admin/profile/office_subbinamarga/structure/create.vue";
import AdminbinamargastructureEdit from "../views/admin/profile/office_subbinamarga/structure/edit.vue";

// Profile uptd wilayah
import AdminuptdregionIndex from "../views/admin/profile/office_subuptdregion/Main.vue"
// master data tugas&fungsi
import AdminuptdregiontaskfunctionCreate from "../views/admin/profile/office_subuptdregion/taskfunction/create.vue";
import AdminuptdregiontaskfunctionEdit from "../views/admin/profile/office_subuptdregion/taskfunction/edit.vue";
// master data program
import AdminuptdregionprogrammeCreate from "../views/admin/profile/office_subuptdregion/programme/create.vue";
import AdminpuptdregionprogrammeEdit from "../views/admin/profile/office_subuptdregion/programme/edit.vue";
// master data struktur
import AdminuptdregionstructureCreate from "../views/admin/profile/office_subuptdregion/structure/create.vue";
import AdminuptdregionstructureEdit from "../views/admin/profile/office_subuptdregion/structure/edit.vue";

// Profile uptd lab konstruksi
import AdminuptdlabcontructionIndex from "../views/admin/profile/office_subuptdlabcontruction/Main.vue"
// master data tugas&fungsi
import AdminuptdlabcontructiontaskfunctionCreate from "../views/admin/profile/office_subuptdlabcontruction/taskfunction/create.vue";
import AdminuptdlabcontructiontaskfunctionEdit from "../views/admin/profile/office_subuptdlabcontruction/taskfunction/edit.vue";
// master data program
import AdminuptdlabcontructionprogrammeCreate from "../views/admin/profile/office_subuptdlabcontruction/programme/create.vue";
import AdminuptdlabcontructionprogrammeEdit from "../views/admin/profile/office_subuptdlabcontruction/programme/edit.vue";
// master data struktur
import AdminuptdlabcontructionstructureCreate from "../views/admin/profile/office_subuptdlabcontruction/structure/create.vue";
import AdminuptdlabcontructionstructureEdit from "../views/admin/profile/office_subuptdlabcontruction/structure/edit.vue";

// Profile uptd peralatan konstruksi
import AdminuptdcontructionequipmentIndex from "../views/admin/profile/office_subuptdconstructionequipment/Main.vue"
// master data tugas&fungsi
import AdminuptdconstructionequipmenttaskfunctionCreate from "../views/admin/profile/office_subuptdconstructionequipment/taskfunction/create.vue";
import AdminuptdconstructionequipmenttaskfunctionEdit from "../views/admin/profile/office_subuptdconstructionequipment/taskfunction/edit.vue";
// master data program
import AdminuptdconstructionequipmentprogrammeCreate from "../views/admin/profile/office_subuptdconstructionequipment/programme/create.vue";
import AdminuptdconstructionequipmentprogrammeEdit from "../views/admin/profile/office_subuptdconstructionequipment/programme/edit.vue";
// master data struktur
import AdminuptdconstructionequipmentstructureCreate from "../views/admin/profile/office_subuptdconstructionequipment/structure/create.vue";
import AdminuptdconstructionequipmentstructureEdit from "../views/admin/profile/office_subuptdconstructionequipment/structure/edit.vue";

import AdminLawDocumentIndex from "@views/admin/publication/law_document/Index.vue";
import AdminLawDocumentCreate from "@views/admin/publication/law_document/create.vue";
import AdminLawDocumentEdit from "@views/admin/publication/law_document/edit.vue";

//struktur organisasi dinas
import AdminStructureIndex from "../views/admin/profile/office_structure/index.vue";
import AdminStructureCreate from "../views/admin/profile/office_structure/create.vue";
import AdminStructureEdit from "../views/admin/profile/office_structure/edit.vue";
//news
import AdminPostIndex from "../views/admin/news/post/index.vue";
import AdminPostCreate from "../views/admin/news/post/create.vue";
import AdminPostEdit from "../views/admin/news/post/edit.vue";
//categories
import AdminCategoryIndex from "../views/admin/news/category/index.vue";
import AdminCategoryCreate from "../views/admin/news/category/create.vue";
import AdminCategoryEdit from "../views/admin/news/category/edit.vue";
//GIS MASTER DATA
//river area
import AdminRiverBasinIndex from "../views/admin/gis/riverBasin/index.vue";
import AdminRiverBasinCreate from "../views/admin/gis/riverBasin/create.vue";
import AdminRiverBasinEdit from "../views/admin/gis/riverBasin/edit.vue";
//watershed
import AdminWatershedIndex from "../views/admin/gis/watershed/index.vue";
import AdminWatershedCreate from "../views/admin/gis/watershed/create.vue";
import AdminWatershedEdit from "../views/admin/gis/watershed/edit.vue";
//river
import AdminRiverIndex from "../views/admin/gis/river/index.vue";
import AdminRiverCreate from "../views/admin/gis/river/create.vue";
import AdminRiverEdit from "../views/admin/gis/river/edit.vue";
//bendung
import AdminWeirIndex from "../views/admin/gis/weir/index.vue";
import AdminWeirCreate from "../views/admin/gis/weir/create.vue";
import AdminWeirEdit from "../views/admin/gis/weir/edit.vue";
//daerah irigasi
import AdminIrrigationIndex from "../views/admin/gis/irrigation/index.vue";
import AdminIrrigationCreate from "../views/admin/gis/irrigation/create.vue";
import AdminIrrigationEdit from "../views/admin/gis/irrigation/edit.vue";
//jalan
import AdminRoadIndex from "../views/admin/gis/road/index.vue";
import AdminRoadCreate from "../views/admin/gis/road/create.vue";
import AdminRoadEdit from "../views/admin/gis/road/edit.vue";
//pengaman pantai
import AdminGroinIndex from "../views/admin/gis/beach_guard/index.vue";
import AdminGroinCreate from "../views/admin/gis/beach_guard/create.vue";
import AdminGroinEdit from "../views/admin/gis/beach_guard/edit.vue";
//infrastruktur sungai
import AdminRiverInfrastructureIndex from "../views/admin/gis/river_infrastructure/index.vue";
import AdminRiverInfrastructureCreate from "../views/admin/gis/river_infrastructure/create.vue";
import AdminRiverInfrastructureEdit from "../views/admin/gis/river_infrastructure/edit.vue";
//jembatan
import AdminBridgeIndex from "../views/admin/gis/bridge/index.vue";
import AdminBridgeCreate from "../views/admin/gis/bridge/create.vue";
import AdminBridgeEdit from "../views/admin/gis/bridge/edit.vue";
// login
import Login from "../views/login/Main.vue";
// report
import AdminServiceIndex from "../views/admin/service/table-report.vue";

import Public from "../views/site/Main.vue";
import PublicAll from "../views/site/Allnews.vue";
import Publicpage from "../views/site/Page.vue";
import Reporting from "../views/site/Reporting.vue";
import UptdLab from "../views/site/Uptdlab.vue";
import Visimisi from "../views/site/Visimisi.vue";
import TasknFunction from "../views/site/TasknFunction.vue";
import StrukturOrg from "../views/site/StrukturOrg.vue";
import ProdHukum from "../views/site/Prodhukum.vue";
import Renstra from "../views/site/Renstra.vue";
import JobPerformance from "../views/site/JobPerformance.vue";
import InfPJPA from "../views/site/InfPJPA.vue";
import InfPJSA from "../views/site/InfPJSA.vue";
import Profsekret from "../views/site/Profsekret.vue"
import ProfPJPA from "../views/site/ProfPJPA.vue";
import ProfPJSA from "../views/site/ProfPJSA.vue";
import ProfBinaMarga from "../views/site/Profbinamarga.vue";
import ProfUPTDWilayah from "../views/site/ProfuptdWilayah.vue";
import ProfUPTDLkonstruksi from "../views/site/Profuptdlkonstruksi.vue";
import ProfUPTDPkonstruksi from "../views/site/Profuptdpkonstruksi.vue";
import MapGIS from "../views/site/Webgis/Main.vue";




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
                component: AdminCategoryIndex,
            },
            {
                path: "category/create",
                name: "admin-category-create",
                component: AdminCategoryCreate,
            },
            {
                path: "category/edit/:id",
                name: "admin-category-edit",
                component: AdminCategoryEdit,
            },
            {
                path: "taskfunction",
                name: "admin-taskfunction",
                component: AdminTaskNFunctionIndex,
            },
            {
                path: "taskfunction/create",
                name: "admin-taskfunction-create",
                component: AdminTaskNFunctionCreate,
            },
            {
                path: "taskfunction/edit/:id",
                name: "admin-taskfunction-edit",
                component: AdminTaskNFunctionEdit,
            },
            {
                path: "vissionmission",
                name: "admin-vissionmission",
                component: AdminVissionmissionIndex,
            },
            {
                path: "vissionmission/create",
                name: "admin-vissionmission-create",
                component: AdminVissionmissionCreate,
            },
            {
                path: "vissionmission/edit/:id",
                name: "admin-vissionmission-edit",
                component: AdminVissionmissionEdit,
            },
            {
                path: "structure",
                name: "admin-structure",
                component: AdminStructureIndex,
            },
            {
                path: "structure/create",
                name: "admin-structure-create",
                component: AdminStructureCreate,
            },
            {
                path: "structure/edit/:id",
                name: "admin-structure-edit",
                component: AdminStructureEdit,
            },
            //index sekertariat
            {
                path: "secretariat",
                name: "admin-secretariat",
                component: AdminSecretariatIndex,
            },
            //sekertariat , tugas fungsi
            {
                path: "secretariat/taskfunction/create",
                name: "admin-secretariat-taskfunction",
                component: AdminsecretariattaskfunctionCreate,
            },
            {
                path: "secretariat/taskfunction/:id",
                name: "admin-secretariat-taskfunction-edit",
                component: AdminsecretariattaskfunctionEdit,
            },
            // sekertariat ,  program
            {
                path: "secretariat/programme/create",
                name: "admin-secretariat-programme",
                component: AdminsecretariatprogrammeCreate,
            },
            {
                path: "secretariat/programme/:id",
                name: "admin-secretariat-programme-edit",
                component: AdminsecretariatprogrammeEdit,
            },
            // sekertariat ,  structure
            {
                path: "secretariat/structure/create",
                name: "admin-secretariat-structure",
                component: AdminsecretariatstructureCreate,
            },
            {
                path: "secretariat/structure/:id",
                name: "admin-secretariat-structure-edit",
                component: AdminsecretariatstructureEdit,
            },
            //index pjpa
            {
                path: "pjpa",
                name: "admin-pjpa",
                component: AdminpjpaIndex,
            },
            //pjpa , tugas fungsi
            {
                path: "pjpa/taskfunction/create",
                name: "admin-pjpa-taskfunction",
                component: AdminpjpataskfunctionCreate,
            },
            {
                path: "pjpa/taskfunction/:id",
                name: "admin-pjpa-taskfunction-edit",
                component: AdminpjpataskfunctionEdit,
            },
            // pjpa ,  program
            {
                path: "pjpa/programme/create",
                name: "admin-pjpa-programme",
                component: AdminpjpaprogrammeCreate,
            },
            {
                path: "pjpa/programme/:id",
                name: "admin-pjpa-programme-edit",
                component: AdminpjpaprogrammeEdit,
            },
            // pjpa ,  structure
            {
                path: "pjpa/structure/create",
                name: "admin-pjpa-structure",
                component: AdminpjpastructureCreate,
            },
            {
                path: "pjpa/structure/:id",
                name: "admin-pjpa-structure-edit",
                component: AdminpjpastructureEdit,
            },
            //index pjsa
            {
                path: "pjsa",
                name: "admin-pjsa",
                component: AdminpjsaIndex,
            },
            //pjsa , tugas fungsi
            {
                path: "pjsa/taskfunction/create",
                name: "admin-pjsa-taskfunction",
                component: AdminpjsataskfunctionCreate,
            },
            {
                path: "pjpa/taskfunction/:id",
                name: "admin-pjsa-taskfunction-edit",
                component: AdminpjsataskfunctionEdit,
            },
            // pjsa ,  program
            {
                path: "pjsa/programme/create",
                name: "admin-pjsa-programme",
                component: AdminpjsaprogrammeCreate,
            },
            {
                path: "pjsa/programme/:id",
                name: "admin-pjsa-programme-edit",
                component: AdminpjsaprogrammeEdit,
            },
            // pjsa ,  structure
            {
                path: "pjsa/structure/create",
                name: "admin-pjsa-structure",
                component: AdminpjsastructureCreate,
            },
            {
                path: "pjsa/structure/:id",
                name: "admin-pjsa-structure-edit",
                component: AdminpjsastructureEdit,
            },
            //index binamarga
            {
                path: "binamarga",
                name: "admin-binamarga",
                component: AdminbinamargaIndex,
            },
            //binamarga , tugas fungsi
            {
                path: "binamarga/taskfunction/create",
                name: "admin-binamarga-taskfunction",
                component: AdminbinamargataskfunctionCreate,
            },
            {
                path: "binamarga/taskfunction/:id",
                name: "admin-binamarga-taskfunction-edit",
                component: AdminbinamargataskfunctionEdit,
            },
            // binamarga ,  program
            {
                path: "binamarga/programme/create",
                name: "admin-binamarga-programme",
                component: AdminbinamargaprogrammeCreate,
            },
            {
                path: "binamarga/programme/:id",
                name: "admin-binamarga-programme-edit",
                component: AdminpbinamargaprogrammeEdit,
            },
            // binamarga ,  structure
            {
                path: "binamarga/structure/create",
                name: "admin-binamarga-structure",
                component: AdminbinamargastructureCreate,
            },
            {
                path: "binamarga/structure/:id",
                name: "admin-binamarga-structure-edit",
                component: AdminbinamargastructureEdit,
            },
            //index uptd wilayah
            {
                path: "uptdregion",
                name: "admin-uptdregion",
                component: AdminuptdregionIndex,
            },
            //uptd wilayah , tugas fungsi
            {
                path: "uptdregion/taskfunction/create",
                name: "admin-uptdregion-taskfunction",
                component: AdminuptdregiontaskfunctionCreate,
            },
            {
                path: "uptdregion/taskfunction/:id",
                name: "admin-uptdregion-taskfunction-edit",
                component: AdminuptdregiontaskfunctionEdit,
            },
            // uptd wilayah ,  program
            {
                path: "uptdregion/programme/create",
                name: "admin-uptdregion-programme",
                component: AdminuptdregionprogrammeCreate,
            },
            {
                path: "uptdregion/programme/:id",
                name: "admin-uptdregion-programme-edit",
                component: AdminpuptdregionprogrammeEdit,
            },
            // uptd wilayah ,  structure
            {
                path: "uptdregion/structure/create",
                name: "admin-uptdregion-structure",
                component: AdminuptdregionstructureCreate,
            },
            {
                path: "uptdregion/structure/:id",
                name: "admin-uptdregion-structure-edit",
                component: AdminuptdregionstructureEdit,
            },
            //index uptd lab konstruksi
            {
                path: "uptdlabcontruction",
                name: "admin-uptdlabcontruction",
                component: AdminuptdlabcontructionIndex,
            },
            //uptd lab konstruksi , tugas fungsi
            {
                path: "uptdlabcontruction/taskfunction/create",
                name: "admin-uptdlabcontruction-taskfunction",
                component: AdminuptdlabcontructiontaskfunctionCreate,
            },
            {
                path: "uptdlabcontruction/taskfunction/:id",
                name: "admin-uptdlabcontruction-taskfunction-edit",
                component: AdminuptdlabcontructiontaskfunctionEdit,
            },
            // uptd lab konstruksi ,  program
            {
                path: "uptdlabcontruction/programme/create",
                name: "admin-uptdlabcontruction-programme",
                component: AdminuptdlabcontructionprogrammeCreate,
            },
            {
                path: "uptdlabcontruction/programme/:id",
                name: "admin-uptdlabcontruction-programme-edit",
                component: AdminuptdlabcontructionprogrammeEdit,
            },
            // uptd lab konstruksi ,  structure
            {
                path: "uptdlabcontruction/structure/create",
                name: "admin-uptdlabcontruction-structure",
                component: AdminuptdlabcontructionstructureCreate,
            },
            {
                path: "uptdlabcontruction/structure/:id",
                name: "admin-uptdlabcontruction-structure-edit",
                component: AdminuptdlabcontructionstructureEdit,
            },
            //index uptd peralatan konstruksi
            {
                path: "uptdcontructionequipment",
                name: "admin-uptdcontructionequipment",
                component: AdminuptdcontructionequipmentIndex,
            },
            //uptd peralatan konstruksi , tugas fungsi
            {
                path: "uptdcontructionequipment/taskfunction/create",
                name: "admin-uptdcontructionequipment-taskfunction",
                component: AdminuptdconstructionequipmenttaskfunctionCreate,
            },
            {
                path: "uptdcontructionequipment/taskfunction/:id",
                name: "admin-uptdcontructionequipment-taskfunction-edit",
                component: AdminuptdconstructionequipmenttaskfunctionEdit,
            },
            // uptd peralatan konstruksi ,  program
            {
                path: "uptdcontructionequipment/programme/create",
                name: "admin-uptdcontructionequipment-programme",
                component: AdminuptdconstructionequipmentprogrammeCreate,
            },
            {
                path: "uptdcontructionequipment/programme/:id",
                name: "admin-uptdcontructionequipment-programme-edit",
                component: AdminuptdconstructionequipmentprogrammeEdit,
            },
            // uptd peralatan konstruksi ,  structure
            {
                path: "uptdcontructionequipment/structure/create",
                name: "admin-uptdcontructionequipment-structure",
                component: AdminuptdconstructionequipmentstructureCreate,
            },
            {
                path: "uptdcontructionequipment/structure/:id",
                name: "admin-uptdcontructionequipment-structure-edit",
                component: AdminuptdconstructionequipmentstructureEdit,
            },
            // produk hukum
            {
                path: "law-document",
                name: "admin-law-document",
                component: AdminLawDocumentIndex,
            },
            {
                path: "law-document/create",
                name: "admin-law-document-create",
                component: AdminLawDocumentCreate,
            },
            {
                path: "law-document/:id",
                name: "admin-law-document-edit",
                component: AdminLawDocumentEdit,
            },
            // laporan warga
            {
                path: "services",
                name: "admin-services",
                component: AdminServiceIndex,
            },
            // wilayah sungai
            
            {
                path: "riverbasin",
                name: "admin-riverbasin",
                component: AdminRiverBasinIndex,
            },
            {
                path: "riverbasin/create",
                name: "admin-riverbasin-create",
                component: AdminRiverBasinCreate,
            },
            {
                path: "riverbasin/:id",
                name: "admin-riverbasin-edit",
                component: AdminRiverBasinEdit,
            },
            // daerah aliran sungai
            
            {
                path: "watershed",
                name: "admin-watershed",
                component: AdminWatershedIndex,
            },
            {
                path: "watershed/create",
                name: "admin-watershed-create",
                component: AdminWatershedCreate,
            },
            {
                path: "watershed/:id",
                name: "admin-watershed-edit",
                component: AdminWatershedEdit,
            },
            // sungai
            
            {
                path: "river",
                name: "admin-river",
                component: AdminRiverIndex,
            },
            {
                path: "river/create",
                name: "admin-river-create",
                component: AdminRiverCreate,
            },
            {
                path: "river/:id",
                name: "admin-river-edit",
                component: AdminRiverEdit,
            },
            // bendung
            
            {
                path: "weir",
                name: "admin-weir",
                component: AdminWeirIndex,
            },
            {
                path: "weir/create",
                name: "admin-weir-create",
                component: AdminWeirCreate,
            },
            {
                path: "weir/:id",
                name: "admin-weir-edit",
                component: AdminWeirEdit,
            },
            // daerah irigasi
            
            {
                path: "irrigation",
                name: "admin-irrigation",
                component: AdminIrrigationIndex,
            },
            {
                path: "irrigation/create",
                name: "admin-irrigation-create",
                component: AdminIrrigationCreate,
            },
            {
                path: "irrigation/:id",
                name: "admin-irrigation-edit",
                component: AdminIrrigationEdit,
            },
             // jalan
            
            {
                path: "road",
                name: "admin-road",
                component: AdminRoadIndex,
            },
            {
                path: "road/create",
                name: "admin-road-create",
                component: AdminRoadCreate,
            },
            {
                path: "road/:id",
                name: "admin-road-edit",
                component: AdminRoadEdit,
            },
             // pengaman pantai
            
            {
                path: "groin",
                name: "admin-groin",
                component: AdminGroinIndex,
            },
            {
                path: "groin/create",
                name: "admin-groin-create",
                component: AdminGroinCreate,
            },
            {
                path: "groin/:id",
                name: "admin-groin-edit",
                component: AdminGroinEdit,
            },
             // infrastruktur sungai
            
            {
                path: "riverinfrastructure",
                name: "admin-riverinfrastructure",
                component: AdminRiverInfrastructureIndex,
            },
            {
                path: "riverinfrastructure/create",
                name: "admin-riverinfrastructure-create",
                component: AdminRiverInfrastructureCreate,
            },
            {
                path: "riverinfrastructure/:id",
                name: "admin-riverinfrastructure-edit",
                component: AdminRiverInfrastructureEdit,
            },
              // jembatan
            
            {
                path: "bridge",
                name: "admin-bridge",
                component: AdminBridgeIndex,
            },
            {
                path: "bridge/create",
                name: "admin-bridge-create",
                component: AdminBridgeCreate,
            },
            {
                path: "bridge/:id",
                name: "admin-bridge-edit",
                component: AdminBridgeEdit,
            },
            // kinerja pekerjaan bidang pelaksanaan jaringan pemanfaatan air
            {
                path: "jobperformwaterutilnetwork",
                name: "admin-jobperformwaterutilnetwork",
                component: AdminJobperformWaterUtilizationNetworkIndex,
            },
            {
                path: "jobperformwaterutilnetwork/create",
                name: "admin-jobperformwaterutilnetwork-create",
                component: AdminJobperformWaterUtilizationNetworkCreate,
            },
            {
                path: "jobperformwaterutilnetwork/edit/:id",
                name: "admin-jobperformwaterutilnetwork-edit",
                component: AdminJobperformWaterUtilizationNetworkeEdit,
            },
            // kinerja pekerjaan bidang pelaksanaan jaringan sumber air
            {
                path: "jobperformimpwaternetwork",
                name: "admin-jobperformimpwaternetwork",
                component: AdminJobperformImplementationWaterNetworkIndex,
            },
            {
                path: "jobperformimpwaternetwork/create",
                name: "admin-jobperformimpwaternetwork-create",
                component: AdminJobperformImplementationWaterNetworkCreate,
            },
            {
                path: "jobperformimpwaternetwork/edit/:id",
                name: "admin-jobperformimpwaternetwork-edit",
                component: AdminJobperformImplementationWaterNetworkeEdit,
            },
            // kinerja pekerjaan bina marga
            {
                path: "jobperformbinamarga",
                name: "admin-jobperformbinamarga",
                component: AdminJobperformBinaMargaIndex,
            },
            {
                path: "jobperformbinamarga/create",
                name: "admin-jobperformbinamarga-create",
                component: AdminJobperformBinaMargaCreate,
            },
            {
                path: "jobperformbinamarga/edit/:id",
                name: "admin-jobperformbinamarga-edit",
                component: AdminJobperformBinaMargaEdit,
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
    {
        path: "/site",
        name: "site",
        component: Public,        
    },
    {
        path: "/site/all",
        name: "site-all",
        component: PublicAll,        
    },
    {
        path: "/site/page",
        name: "site-page",
        component: Publicpage,        
    },
    {
        path: "/site/reporting",
        name: "site-reporting",
        component: Reporting,        
    },
    {
        path: "/site/uptdlab",
        name: "site-uptdlab",
        component: UptdLab,        
    },
    {
        path: "/site/visimisi",
        name: "site-visimisi",
        component: Visimisi,        
    },
    {
        path: "/site/tasknfunction",
        name: "site-tasknfunction",
        component: TasknFunction,        
    },
    {
        path: "/site/strukturorg",
        name: "site-strukturorg",
        component: StrukturOrg,        
    },
    {
        path: "/site/prodhukum",
        name: "site-prodhukum",
        component: ProdHukum,        
    },
    {
        path: "/site/renstra",
        name: "site-renstra",
        component: Renstra,        
    },
    {
        path: "/site/jobperformance",
        name: "site-jobperformance",
        component: JobPerformance,        
    },
    {
        path: "/site/infpjpa",
        name: "site-infpjpa",
        component: InfPJPA,        
    },
    {
        path: "/site/infpjsa",
        name: "site-infpjsa",
        component: InfPJSA,        
    },
    {
        path: "/site/profsekret",
        name: "site-profsekret",
        component: Profsekret,        
    },
    {
        path: "/site/profpjpa",
        name: "site-profpjpa",
        component: ProfPJPA,        
    },
    {
        path: "/site/profpjsa",
        name: "site-profpjsa",
        component: ProfPJSA,        
    },
    {
        path: "/site/profbinamarga",
        name: "site-profbinamarga",
        component: ProfBinaMarga,        
    },
    {
        path: "/site/profuptdwilayah",
        name: "site-profuptdwilayah",
        component: ProfUPTDWilayah,        
    },
    {
        path: "/site/profuptdlkonstruksi",
        name: "site-profuptdlkonstruksi",
        component: ProfUPTDLkonstruksi,        
    },
    {
        path: "/site/profuptdpkonstruksi",
        name: "site-profuptdpkonstruksi",
        component: ProfUPTDPkonstruksi,        
    },
    {
        path: "/site/mapgis",
        name: "site-mapgis",
        component: MapGIS,        
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