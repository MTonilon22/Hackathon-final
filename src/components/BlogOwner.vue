<template>
  <div
    class="lg:ml-[2%] cs:mx-auto sm:mx-auto cs:w-[100%] sm:h-[335px] border-2 lg:p-5 shadow-xl md:w-[100%] lg:w-[100%] md:h-[380px] lg:h-full rounded-md shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)"
  >
    <div
      class="my-[5%] cs:w-[40%] cs:h-[40%] cs:mx-auto relative lg:w-48 md:w-40 mx-auto -z-30"
    >
      <img
        :src="profile_picture"
        alt="img"
        class="lg:w-48 lg:h-48 md:w-35 cs:w-51 md:h-30 border-4 border-white rounded-full object-cover relative z-10"
      />
      <div
        class="absolute inset-0 border-4 border-purple-700 rounded-full z-0"
      ></div>
    </div>
    <div class="lg:mt-7 md:mt-3 text-center text-[#454544] space-y-2">
      <div class="text-center font-bold font-poppins lg:text-2xl md:text-lg ">
        {{ name }} Michael Tonilon
      </div>
      <div class="font-medium font-poppins">
        {{ jobtype }} Full Stack Developer
      </div>
      <div class="font-medium font-poppins w-[80%] mx-auto ">
        {{ jobdescription }} I am full stack developer with 5 years of experience
      </div>
      <div class="flex justify-center items-center mt-5 text-white">
        <button
          @click="redirect"
          class="cs:px-[4%] bg-[#2a2d57] h-9 lg:w-[225px] md:w-[200px] rounded-md text-white text-center font-semibold text-[20px] hover:bg-white hover:text-[#2a2d57] hover:border-[#2a2d57] border-[#2a2d57] border-2 transition duration-300"
        >
          Contact
        </button>
      </div>
      <div class="my-5 mx-auto ">
        <div class="flex justify-center items-center gap-5 my-5">
          <a :href="facebook">
            <mdicon
              name="facebook"
              :width="30"
              :height="30"
              class="hover:text-orange-500 mr-5"
            />
          </a>
          <a :href="instagram">
            <mdicon
              name="instagram"
              :width="30"
              :height="30"
              class="hover:text-orange-500 mr-5"
            />
          </a>
          <a :href="twitter">
            <mdicon
              name="twitter"
              :width="30"
              :height="30"
              class="hover:text-orange-500 mr-5"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import profile_picture from "../assets/marivil.png"
const router = useRouter();

const props = defineProps({
  id: String,
  
  name: String,
  jobtype: String,
  facebook: String,
  twitter: String,
  instagram: String,
});


const redirect = () => {
  router.push(`/agentProfile/${props.id}`);
};
</script>
