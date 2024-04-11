<template>
    <div class="h-screen">
      <div class="items-center justify-center flex cs:flex cs:flex-col">
        <div
          class="items-center justify-center mx-auto flex text-secondary font-semibold tracking-widest"
        ></div>
        <div
          class="lg:w-[100%] flex-col mx-auto cs:w-[100%] items-center justify-center flex lg:mt-[6%] cs:mt-[10%]"
        >
          <div class="w-[100%] rounded-2xl sm:max-w-md xl:p-0">
            <div class="cs:px-5 lg:p-3 space-y-5 cs:w-[100%]">
              <h1
                class="w-[100%] font-semibold leading-tight tracking-wide cs:text-2xl lg:text-3xl text-secondary md:text-2xl my-3"
              >
                <span class="text-ternary tracking-wide">PointQuest</span>
                Registration
              </h1>
              <p1 class="text-secondary cs:text-sm tracking-wide"
                >To register, please enter your credentials.</p1
              >
              <div class="space-y-5 lg:w-[100%]" action="#">
                <div
                  class="lg:flex-row cs:flex-col items-center justify-center lg:flex gap-5 w-[100%] cs:space-y-5"
                >
                  <div class="w-[100%]">
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-secondary"
                      >Name</label
                    >
                    <input
                      v-model="name"
                      type="username"
                      name="email"
                      id="email"
                      class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-[100%] p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Michael Tonilon"
                      required=""
                    />
                  </div>
                  <div class="w-[100%]">
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
                      class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-[100%] p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="MTonilon22"
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-secondary"
                  >Email</label
                >
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="mtonilon17@gmail.com"
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
                  class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-secondary"
                  >Confirm Password</label
                >
                <input
                  v-model="confirm"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <input
                class="text-secondary"
                type="file"
                @change="handleFileImage"
              />
  
              <div class="flex gap-3 cs:w-[100%] cs:mx-auto">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-primary"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-secondary"
                      >Terms and Conditions</label
                    >
                  </div>
                </div>
                <a href="#" class="text-sm text-ternary hover:underline"
                  >Forgot password?</a
                >
              </div>
              <div class="space-y-8 cs:w-[100%] gap-5" action="#">
                <button
                  @click="register"
                  type="submit"
                  class="w-[35%] mt-5 btn transition duration-300 text-p text-secondary font-500 tracking-wide bg-primary-600 focus:ring-primary-300 rounded-full text-sm px-5 py-2.5 text-center bg-ternary"
                >
                  Register
                </button>
  
                <p class="text-sm font-light text-secondary flex flex-row gap-6">
                  Already have an account?
                  <router-link to="/">
                    <div
                      class="font-medium text-ternary hover:underline dark:text-primary-500 cursor-pointer"
                    >
                      Sign in
                    </div>
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative bottom-[-0.6%]"><Footer /></div>
    </div>
  </template>
  <script setup>
//   import NavBarLanding from "../components/NavBarLanding.vue";
  import Footer from "../components/Footer.vue";
  import imageR from "../assets/register.png";
  import axios from "axios";
  import { ref, onMounted } from "vue";
  
  const name = ref();
  const username = ref();
  const password = ref();
  const confirm = ref();
  const email = ref();
  const image = ref(null);
  
  const register = async () => {
    try {
      console.log("done");
  
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("username", username.value);
      formData.append("password", password.value);
      formData.append("email", email.value);
      formData.append("role", "user");
      formData.append("image", image.value);
  
      await axios.post("http://localhost:8080/addUser", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log("ERror: ", error);
    }
  };
  
  const handleFileImage = (event) => {
    const file = (event.target.files || [])[0];
  
    image.value = file;
  };
  </script>