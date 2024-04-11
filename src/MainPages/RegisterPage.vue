<template>
  <div class="flex flex-col items-center justify-center "> <p class="text-md font-bold tracking-wider">First Name</p>
  <div class="">  <input class="rounded-lg border-[#2a2d57] " v-model="first_name" type="text">
  
  <div> <p class="text-md font-bold tracking-wider">Middle Name</p>
  <input class="rounded-lg border-[#2a2d57] " v-model="middle_name" type="text"></div> 
  <div><p class="text-md font-bold tracking-wider">Last Name</p>
  <div><input class="rounded-lg border-[#2a2d57] " v-model="last_name" type="text"></div>
  <div><p class="text-md font-bold tracking-wider">Email</p></div>
  <input class="rounded-lg border-[#2a2d57] " v-model="email" type="text"></div></div>
  
  <p class="text-md font-bold tracking-wider">Birth Date</p>
  <input class="rounded-lg border-[#2a2d57] " v-model="birthdate" type="date">
  <p class="text-md font-bold tracking-wider">Gender</p>
  <input class="rounded-lg border-[#2a2d57] " v-model="gender" type="text">
  <p class="text-md font-bold tracking-wider">School Graduated</p>
  <input class="rounded-lg border-[#2a2d57] " v-model="school_grad" type="text">
  <p class="text-md font-bold tracking-wider">Experience</p>
  <input class="rounded-lg border-[#2a2d57] " v-model="experience" type="text">
  <p class="text-md font-bold tracking-wider">Username</p>
  <input class="rounded-lg border-[#2a2d57] " v-model="username" type="text">
  <p class="text-md font-bold tracking-wider">Password</p>
  <input class="rounded-lg border-[#2a2d57] " v-model="password" type="text">
  <p class="text-md font-bold tracking-wider">Skills</p>
  <input class="rounded-lg border-[#2a2d57] " v-model="skills" type="text">
  <p class="text-md font-bold tracking-wider">Objective</p>
  <input class="rounded-lg border-[#2a2d57] " v-model="objective" type="text">
  <p class="text-md font-bold tracking-wider">Position</p>
  <input class="rounded-lg border-[#2a2d57] " v-model="position" type="text">
  <p class="text-md font-bold tracking-wider">Achievements</p>
  <input class="rounded-lg border-[#2a2d57] " v-model="achievements" type="text">
  <p class="text-md font-bold tracking-wider">Picture</p>
  <input type="file" @change="handleFileImage">
  <div class="my-5"><button class="px-5 py-2 rounded-lg bg-[#2a2d57] text-white my-2" @click="register">SUBMIT</button></div>
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

