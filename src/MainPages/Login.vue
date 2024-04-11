<template>
    <div>
      <div><NavBarLanding firstLabel="PointQuest" /></div>
  
      <div class="w-[100%] items-center justify-center flex h-[700px]">
        <div class="w-[40%] ml-[5%] text-primary font-semibold tracking-widest">
          <img :src="image" class="w-[100%] h-[100%] float-anim" />
        </div>
        <div class="w-[40%] ml-[10%]">
          <div
            class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
          >
            <div
              class="w-full rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-[#2a2d57]"
            >
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1
                  class="text-lg font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-10"
                >
                  <span class="text-white tracking-wide">Login Account</span>
                </h1>
                <div class="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-white"
                      >Username</label
                    >
                    <input
                    v-model="username"
                      type="username"
                      name="email"
                      id="email"
                      class="bg-gray-50 border font-500 border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="MTonilon22"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-white"
                      >Password</label
                    >
                    <input
                    v-model="password"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border font-500 border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="remember" class="text-white"
                          >Remember me</label
                        >
                      </div>
                      
                    </div>
                    <a href="#" class="text-sm text-white hover:underline"
                      >Forgot password?</a
                    >
                  </div>
                    <button 
                      @click="login"
                      type="submit"
                      class="w-[30%] transition duration-300 mt-8 text-p text-[#2a2d57] font-bold tracking-wide bg-white focus:ring-primary-300 rounded-full text-sm px-5 py-2.5 text-center bg-ternary"
                    >
                      Sign in
                    </button>
  
                  <p class="text-sm font-light text-white">
                    Don’t have an account yet?
                    <router-link to="/register">
                      <a
                        class="font-medium text-white hover:underline dark:text-primary-500 cursor-pointer"
                        >Register</a
                      >
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import image from "../assets/register.png";
  import {ref} from "vue";
  import {useRouter} from "vue-router"
  
  const username = ref();
  const password = ref();
  const router = useRouter();
  
  const login = async () =>{
    try{
      const response = await fetch ('http://localhost:8080/getUsers');
      const data = await response.json();
      for(var i = 0 ; i < data.length;i++){
        if(data[i].username==username.value){
          if(data[i].password == password.value){
            router.push('/home');
          }
          else{
            
          }
        }
        else{
          
        }
      }
  
  
    }
    catch(error){
      console.log(error);
    }
  }
  
  </script>
  