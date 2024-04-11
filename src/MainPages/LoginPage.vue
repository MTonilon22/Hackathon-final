<template>
    <div class="h-screen">
      <!-- <div><NavBarLanding firstLabel="PointQuest" /></div> -->
  
      <div class="items-center justify-center flex cs:flex cs:flex-col">
        <div
          class="items-center justify-center mx-auto flex text-secondary font-semibold tracking-widest"
        >
          <!-- <img :src="image" class="lg:w-[50%] lg:h-[100%] float-anim mt-[3%]" /> -->
        </div>
        <div
          class="lg:w-[100%] flex-col mx-auto cs:w-[100%] items-center justify-center flex lg:mt-[12%] cs:mt-[30%]"
        >
          <div class="w-[100%] rounded-2xl sm:max-w-md xl:p-0">
            <div class="cs:px-5 lg:p-3 space-y-4 cs:w-[100%]">
              <h1
                class="w-[100%] font-semibold leading-tight tracking-wide cs:text-2xl lg:text-3xl text-secondary md:text-2xl mb-2"
              >
                Welcome to
                <span
                  class="text-ternary tracking-wide cs:text-2xl cs:w-[100%] lg:text-3xl"
                  >PointQuest!</span
                >
              </h1>
              <p1 class="text-secondary cs:text-sm tracking-wide"
                >To login, please enter your credentials.</p1
              >
              <div class="space-y-5 lg:w-[90%]" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-secondary"
                    >Username</label
                  >
                  <input
                    v-model="username"
                    type="username"
                    name="email"
                    id="email"
                    class="bg-primary border font-500 border-secondary text-secondary text-sm sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="MTonilon22"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-secondary"
                    >Password</label
                  >
                  <input
                    v-model="password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-primary border font-500 border-secondary text-secondary sm:text-sm text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-secondary rounded bg-primary focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="text-secondary"
                        >Remember me</label
                      >
                    </div>
                  </div>
                  <div class="">
                    <a
                      href="#"
                      class="text-sm text-ternary hover:underline items-center flex justify-center"
                      >Forgot password?</a
                    >
                  </div>
                </div>
                <button
                  @click="login"
                  type="submit"
                  class="w-[30%] btn transition duration-300 text-p text-secondary font-500 tracking-wide bg-primary-600 focus:ring-primary-300 rounded-full text-sm px-5 py-2.5 text-center bg-ternary"
                >
                  Login
                </button>
                <div class="flex flex-row lg:gap-16 cs:gap-5">
                  <p class="text-sm font-light text-secondary">
                    Don’t have an account yet?
                  </p>
                  <div
                    class="font-500 text-sm text-ternary hover:underline cursor-pointer"
                  >
                    <router-link to="/register"> Register </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative bottom-[-30%]">
        <Footer />
      </div>
    </div>
  </template>
  
  <script setup>
  // import NavBarLanding from "../components/NavBarLanding.vue";
  import Footer from "../components/Footer.vue";
  import image from "../assets/register.png";
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  const username = ref();
  const password = ref();
  const router = useRouter();
  
  const login = async () => {
    try {
      const response = await fetch("http://localhost:8080/getUsers");
      const data = await response.json();
      for (var i = 0; i < data.length; i++) {
        if (data[i].username == username.value) {
          if (data[i].password == password.value) {
            router.push("/home");
          } else {
          }
        } else {
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  </script>