<template>
   <div class="h-screen w-full">
    <div class="flex justify-center items-center cs:mt-[8%]">
      <img src="../assets/register.png" class="lg:w-[25%] ml-[3%] mb-[2%]
      mt-[3%] lg:h-[15%] md:w-[70%] md:h-[15%] sm:w-[75%] sm:h-[18%] cs:w-[80%]
      cs:h-[18%] select-none float-anim" alt=""/>
    </div>

    <div
      class="flex flex-col lg:gap-10 md:gap-10 sm:gap-10 cs:gap-8 items-center justify-center tracking-wider"
    >
      <h1
        class="font-semibold lg:text-2xl md:text-2xl sm:text-lg cs:text-xl text-center sm:w-[90%] lg:w-[90%] md:w-[90%] cs:w-[90%] text-ternary"
      >
        JobQuest:
      </h1>
      <p
        class="lg:w-[45%] md:w-[80%] sm:w-[80%] cs:text-justify cs:justify-start cs:flex cs:w-[95%] lg:text-md text-[#2a2d57] md:text-lg sm:text-md cs:text-sm font-normal text-center cs:tracking-wider sm:tracking-widest md:tracking-widest lg:tracking-wider"
      >
      Embarking on the journey of finding employment can be daunting, especially for those currently facing unemployment. "Job Quest" offers a comprehensive roadmap tailored to guide individuals through every stage of the job search process, empowering them to navigate the challenges and uncertainties with confidence.
      </p>
      <!-- Open the modal using ID.showModal() method -->

      <p
        class="lg:text-md text-[#2a2d57] font-normal lg:tracking-widest md:tracking-widest sm:tracking-wider cs:tracking-wide text-center md:text-lg cs:text-sm sm:text-md cs:w-[80%]"
      >
        This website is developed and managed by
        <span class="font-bold text-[#2a2d57]"> HebHavi </span>
      </p>
    </div>
    <div class="flex items-center justify-center gap-10 mt-10">
      <router-link to="/register">
        <button
          class="w-[100%]  transition duration-300 text-p font-500 tracking-wide bg-primary-600 focus:ring-primary-300 rounded-full text-sm px-5 py-2.5 text-center text-white bg-[#2a2d57]"
        >
          Register
        </button>
      </router-link>

      <router-link to="/login">
        <button
          class="w-[100%] transition duration-300 text-p text-secondary font-500 tracking-wide bg-primary-600 focus:ring-primary-300 rounded-full text-sm px-8 py-2.5 text-center text-white bg-[#2a2d57]"
        >
          Login
        </button>
      </router-link>
    </div>
  
  </div>
  </template>
  
  <script setup>
  import graphic from "../assets/register.png";
  
  </script>