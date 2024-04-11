<template>
  <div class="card card-side bg-base-100 rounded-md shadow-xl w-[80%] border-2">
    <figure class="w-[70%] h-[100%] p-5">
      <img class="w-[100%] h-[100%] rounded-md" :src="image" alt="Movie" />
    </figure>
    <div class="ml-[2%] mt-[3%]">
      <h2 class="card-title">{{ jobtitle }}</h2>
      <div class="flex flex-row w-[100%] my-[2%]">
        <p class="w-[20%] text-center font-semibold">
          {{ jobcompany }}
        </p>
        <p class="w-[20%] text-center font-semibold">
        <div v-if="jobtype=='wah'">
          Work At Home
        </div>
        <div v-if="jobtype=='hybrid'">
          Hybrid
        </div>
        <div v-if="jobtype=='onsite'">
          Onsite
        </div>
        </p>
        <p class="w-[5%] text-center font-semibold"> P{{ salary }}</p>
      </div>
      <p class="w-[90%] text-sm">
        {{ jobdescription }}
      </p>
      <button class="bg-orange-500 rounded-md text-white px-8 py-1 mt-[3%]">
        Apply
      </button>
    </div>
  </div>
</template>
<script setup>
import softeng from "../assets/soft-eng.png";

defineProps({
  image: String,
  jobtitle: String,
  jobcompany: String,
  jobtype: String,
  salary: String,
  jobdescription: String,
});
</script>
