<template>
    <div class="text-gray-700">
        <Navbar />
        <main id="content">
            <div class="flex flex-row items-center">
                <div class="rounded-md object-cover overflow-hidden">
                    <a href="#"><img class="border max-w-full sm:w-full" src="@/assets/images/prodbinamarga.png" alt="author"></a>
                </div>
            </div>
            <!-- component -->
            <iframe width="100%" height="900px" src="https://datastudio.google.com/embed/reporting/58a4b0a0-254e-4acd-a4ee-ed1eb2df8c31/page/UPq6C" frameborder="0" style="border:0" allowfullscreen></iframe>
        </main>
        <Footer />
    </div>
</template>
<script setup>
import Navbar from "../../components/navbar-menu/Main.vue";
import Footer from "../../components/footer-public/Main.vue";
</script>
<style scoped>
@import "./style.css";
</style>