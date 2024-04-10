<template>
  <div class="card card-side bg-base-100 rounded-md shadow-xl w-[80%] border-2">
    <figure class="w-[70%] h-[100%]">
      <img class="w-[100%] h-[100%]" :src="softeng" alt="Movie" />
    </figure>
    <div class="ml-[2%] mt-[3%]">
      <h2 class="card-title">{{ jobtitle }}Software Engineer</h2>
      <div class="flex flex-row w-[100%] my-[2%]">
        <p class="w-[20%] text-center font-semibold">
          {{ jobcompany }} Accenture ~
        </p>
        <p class="w-[20%] text-center font-semibold">{{ onsite }} Hybrid ~</p>
        <p class="w-[5%] text-center font-semibold">{{ salary }}100000</p>
      </div>
      <p class="w-[90%] text-sm">
        {{ jobdescription }} Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Labore hic impedit perspiciatis quo. Quia, laudantium nobis ea
        incidunt quisquam facilis.
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
  jobtitle: String,
  jobcompany: String,
  onsite: String,
  salary: String,
  jobdescription: String,
});
</script>
