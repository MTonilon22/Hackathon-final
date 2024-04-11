<template>

<div class="h-screen">
    <div class="items-center justify-center flex cs:flex cs:flex-col">
      <div
        class="items-center justify-center mx-auto flex text-[#2a2d57] font-semibold tracking-widest"
      ></div>
      <div
        class="lg:w-[100%] flex-col mx-auto cs:w-[100%] items-center justify-center flex lg:mt-[3%] cs:mt-[10%]"
      >
        <div class="w-[100%] rounded-2xl sm:max-w-md xl:p-0">
          <div class="cs:px-5 lg:p-3 space-y-5 cs:w-[100%]">
            <h1
              class="w-[100%] font-semibold leading-tight tracking-wide cs:text-2xl lg:text-3xl text-[#2a2d57] md:text-2xl my-3"
            >
              <span class="text-ternary tracking-wide">Registration</span>
              
            </h1>
            <p1 class="text-[#2a2d57] cs:text-sm tracking-wide"
              >To register, please enter credentials.</p1>
            <div class="space-y-5 lg:w-[100%]" action="#">
              <div
                class="lg:flex-row cs:flex-col items-center justify-center lg:flex gap-5 w-[100%] cs:space-y-5"
              >
                <div class="w-[100%]">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-[#2a2d57]"
                    >First Name</label
                  >
                  <input
                    v-model="first_name"
                    type="text"
                    
                   
                    class="bg-white border font-500 border-gray-300 text-[#2a2d57] sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-[100%] p-2.5 dark:placeholder-gray-400 dark:text-[#2a2d57] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Michael Tonilon"
                    required=""
                  />
                </div>
                <div class="w-[100%]">
                  <label
                    
                    class="block mb-2 text-sm font-medium text-[#2a2d57]"
                    >Middle Name</label
                  >
                  <input
                    v-model="middle_name"
                    type="text"
                 
                    
                    class="bg-white border font-500 border-gray-300 text-[#2a2d57] sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-[100%] p-2.5 dark:placeholder-gray-400 dark:text-[#2a2d57] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="99999"
                    required=""
                  />
                </div>
                <div class="w-[100%]">
                  <label
                    
                    class="block mb-2 text-sm font-medium text-[#2a2d57]"
                    >Last Name</label
                  >
                  <input
                    v-model="last_name"
                    type="text"
                 
                    
                    class="bg-white border font-500 border-gray-300 text-[#2a2d57] sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-[100%] p-2.5 dark:placeholder-gray-400 dark:text-[#2a2d57] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="99999"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-[#2a2d57]"
                >Email</label
              >
              <input
                v-model="email"
                type="text"
               
                class="bg-white border font-500 border-gray-300 text-[#2a2d57] sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-[#2a2d57] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="mtonilon@gmail.com"
                required=""
              />
            </div>

            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-[#2a2d57]"
                >Birth Date</label
              >
              <input
                v-model="birthdate"
                type="date"
              
                placeholder=""
                class="bg-white border font-500 border-gray-300 text-[#2a2d57] sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-[#2a2d57]"
                >Gender</label
              >
              <input
                v-model="gender"
                type="text"
                
                placeholder="Male"
                class="bg-white border font-500 border-gray-300 text-[#2a2d57] sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-[#2a2d57] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-[#2a2d57]"
                >School Graduated</label
              >
              <input
                v-model="school_grad"
                type="text"
                
                placeholder="University of Cebu"
                class="bg-white border font-500 border-gray-300 text-[#2a2d57] sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-[#2a2d57] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-[#2a2d57]"
                >Experience</label
              >
              <input
                v-model="experience"
                type="text"
                
                placeholder="University of Cebu"
                class="bg-white border font-500 border-gray-300 text-[#2a2d57] sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-[#2a2d57] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-[#2a2d57]"
                >Username</label
              >
              <input
                v-model="username"
                type="text"
                
                placeholder="Mtonilon22"
                class="bg-white border font-500 border-gray-300 text-[#2a2d57] sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-[#2a2d57] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-[#2a2d57]"
                >Password</label
              >
              <input
                v-model="password"
                type="password"
                
                placeholder="******"
                class="bg-white border font-500 border-gray-300 text-[#2a2d57] sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-[#2a2d57] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-[#2a2d57]"
                >Skills</label
              >
              <input
                v-model="skills"
                type="text"
                
                placeholder=""
                class="bg-white border font-500 border-gray-300 text-[#2a2d57] sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-[#2a2d57] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            
          
           
           
           
            
            
            <div class="">
              <label
                
                class="block mb-2 text-sm font-medium text-[#2a2d57]"
                >Objective</label
              >
              <input
                v-model="objective"
                type="text"
                
                placeholder=""
                class="bg-white border font-500 border-gray-300 text-[#2a2d57] sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-[#2a2d57] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-[#2a2d57]"
                >Position</label
              >
              <input
                v-model="position"
                type="text"
                
                placeholder=""
                class="bg-white border font-500 border-gray-300 text-[#2a2d57] sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-[#2a2d57] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-[#2a2d57]"
                >Achievement</label
              >
              <input
                v-model="achievement"
                type="text"
                
                placeholder=""
                class="bg-white border font-500 border-gray-300 text-[#2a2d57] sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-[#2a2d57] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <input  type="file" @change="handleFileImage">
    <button class="bg-[#2a2d57] px-5 py-2 my-5 rounded-lg text-white font-semibold text-sm" @click="register">SUBMIT</button>

            <div class="flex gap-3 cs:w-[100%] cs:mx-auto">
              
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    
  
 
  
  </template>
  <script setup>
  
  import axios from "axios"
  import {ref ,onMounted} from "vue";
  
  const first_name = ref();
  const middle_name = ref();
  const last_name = ref();
  const email = ref();
  const birthdate = ref();
  const gender = ref();
  const school_grad = ref();
  const experience = ref('herald');
  const username = ref();
  const password=ref();
  const skills = ref();
  const objective = ref();
  const position=ref();
  const achievements = ref();
  const picture = ref(null);
  const register = async ()=>{
    try{
      const formData = new FormData();
      formData.append('first_name',first_name.value);
      formData.append('middle_name',middle_name.value);
      formData.append('last_name',last_name.value);
      formData.append('email',email.value);
      formData.append('birthdate',birthdate.value);
      formData.append('gender',gender.value);
      formData.append('school_grad',school_grad.value);
      formData.append('experience',experience.value);
      formData.append('username',username.value);
      formData.append('password',password.value);
      formData.append('skills',skills.value);
      formData.append('objective',objective.value);
      formData.append('position',position.value);
      formData.append('achievements',achievements.value);
      formData.append('picture',picture.value);
  
  
      await axios.post("http://localhost:8080/addUser",formData,{
        headers: {
        "Content-Type" : "multipart/form-data",
          },
        });
        window.location.reload();
    }catch(error){
      console.log("ERror: ",error);
    }
  };
  
  
  const handleFileImage = (event) => {
    const file = (event.target.files || [])[0];
  
    picture.value = file;
  };
  
  </script>

