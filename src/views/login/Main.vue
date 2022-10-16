<template>
  <div>
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Login Info -->
        <div class="hidden xl:flex flex-col min-h-screen">

          <div class="my-auto">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="-intro-x w-10/12 pr-16 -mt-16"
              src="@/assets/images/logologin.png"
            />
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
          <div
            class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
          >
            <h2
              class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
            >
              Masuk disini...
            </h2>
            <div class="intro-x mt-2 text-slate-400 xl:hidden text-center">
              anda sedang menggunakan mode smartphone, direkomendasikan untuk di akses di layar lebih besar untuk kenyamanan pengguna.
            </div>
            <div class="intro-x mt-8">
              <input
                type="text"
                v-model="email"
                class="intro-x login__input form-control py-3 px-4 block"
                placeholder="Email"
              />
              <input
                type="password"
                v-model="password"
                class="intro-x login__input form-control py-3 px-4 block mt-4"
                placeholder="Password"
              />
            </div>
            <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
              <button
                class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
                @click="onLogin"
              >
                Masuk
              </button>
            </div>
          </div>
        </div>
        <!-- END: Login Form -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
import dom from "@left4code/tw-starter/dist/js/dom";
import axios from 'axios'
import { useAuthStore } from '@stores/auth';
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router";


const email = ref(null);
const password = ref(null);
const authStore = useAuthStore();
const router = useRouter();

async function onLogin() {
  if((email.value === '') || (password.value === ''))
    return;

  const response = await axios({
    method: 'post',
    url: '/auth/login',
    data: {
      email: email.value,
      password: password.value
    }
  });
  if((response.status === 200) && (response.data.status === "Success")) {
    authStore.token = response.data.data.token;
    authStore.user = response.data.data.user;
    router.replace({name: 'admin-category'});
  }
}

onMounted(() => {
  dom("body").removeClass("main").removeClass("error-page").addClass("login");
});
</script>
