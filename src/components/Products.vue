<template>
  <div class="bg-white rounded-md shadow-xl border-2 p-4 w-[80%] mx-auto">
    <div class="md:flex">
      <div class="md:w-[30%] md:h-auto">
        <img class="w-full h-auto rounded-md object-cover" :src="image" alt="Job Image" />
      </div>
      <div class="md:w-[70%] md:ml-4 mt-4 md:mt-0">
        <div class="flex items-center mb-2">
          <div v-if="skillLevel === 'herald'" class="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
          <div v-else-if="skillLevel === 'legend'" class="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
          <div v-else class="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
          <h3 class="text-lg font-bold">{{ skillLevel }}</h3>
        </div>
        <h2 class="text-xl font-bold mb-2">{{ jobtitle }}</h2>
        <p class="text-gray-600 mb-2">{{ jobcompany }}</p>
        <p class="text-green-500 mb-2" v-if="jobtype === 'wah'">Work At Home</p>
        <p class="text-blue-500 mb-2" v-else-if="jobtype === 'hybrid'">Hybrid</p>
        <p class="text-purple-500 mb-2" v-else>Onsite</p>
        <p class="text-gray-800 font-bold text-lg mb-2">₱{{ salary }}</p>
        <p class="text-gray-700 mb-4">{{ jobdescription }}</p>
        <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md">
          Apply Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import softeng from "../assets/soft-eng.png";

defineProps({
  image: String,
  skillLevel: String,
  jobtitle: String,
  jobcompany: String,
  jobtype: String,
  salary: String,
  jobdescription: String,
});
</script>
