<template>
  <div
    class="hover:cursor-default cs:h-[480px] lg:h-[540px] cs:w-[480px] sm:mx-[8%] md:mr-[6%] lg:mr-[10%] scroll-snap-start text-[#454544] bg-white p-6 text-center cursor-pointer rounded-md shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
  >
    <div class="relative w-48 h-48 mx-auto mt-2 mb-2">
      <img
        :src="img"
        alt="img"
        class="w-48 h-48 border-4 border-[#2a2d57] rounded-full object-cover relative z-10"
      />
    </div>
    <h2
      class="font-bold lg:text-2xl md:text-xl sm:text-lg cs:text-xl mt-4 mb-2"
    >
      {{ name }}
    </h2>
    <span class="text-xl font-medium hover:text-[#2a2d57]">{{ title }}</span>
    <p
      class="mt-4 lg:text-justify cs:text-center sm:text-center text-[12px] font-poppins 2xl:text-xl line-clamp-3"
    >
      {{ desc }}
    </p>

    <div class="flex justify-center items-center mt-5 text-white">
      <button
        class="bg-[#2a2d57] lg:h-12 lg:w-48 cs:w-32 cs:h-8 sm:w-32 sm:h-8 rounded-md text-white text-center font-semibold text-lg lg:text-xl xl:w-64 hover:bg-white hover:text-[#2a2d57] hover:border-[#2a2d57] border-[#2a2d57] border-2 transition duration-300"
      >
        View Profile
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ProductType {
  name: string;
  title: string;
  img: string;
  desc: string;
}

defineProps<ProductType>();
</script>
