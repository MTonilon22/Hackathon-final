<template>
  <div class="w-[50%] pt-5">
    <div class="flex">
      <div class="relative ml-3 mb-3 w-[50%]">
        <input
          type="text"
          id="floating_filled"
          class="w-full h-10 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border-gray-400 border box-border appearance-none dark:focus:border-[#2a2d57] focus:outline-none focus:ring-0 focus:border-[#2a2d57] peer"
          placeholder=" "
        />
        <label
          for="floating_filled"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#2a2d57] peer-focus:dark:text-[#2a2d57] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >{{ name }}</label
        >
      </div>
      <div class="relative ml-3 mb-3 w-[50%]">
        <input
          type="text"
          id="floating_filled"
          class="w-full h-10 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border border-gray-400 box-border appearance-none dark:focus:border-[#2a2d57] focus:outline-none focus:ring-0 focus:border-[#2a2d57] peer"
          placeholder=" "
        />
        <label
          for="floating_filled"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#2a2d57] peer-focus:dark:text-[#2a2d57] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >{{ email }}</label
        >
      </div>
    </div>

    <div class="relative ml-3 mb-3">
      <input
        type="text"
        id="floating_filled"
        class="w-full h-10 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border border-gray-400 box-border appearance-none dark:focus:border-[#2a2d57] focus:outline-none focus:ring-0 focus:border-[#2a2d57] peer"
        placeholder=" "
      />
      <label
        for="floating_filled"
        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#2a2d57] peer-focus:dark:text-[#2a2d57] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >{{ phone }}</label
      >
    </div>
    <div class="relative ml-3 mb-3">
      <input
        type="text"
        id="floating_filled"
        class="w-full h-64 block rounded-md px-2.5 pb-2.5 pt-5 text-sm text-[#000000] bg-gray-50 border border-gray-400 box-border appearance-none dark:focus:border-[#2a2d57] focus:outline-none focus:ring-0 focus:border-[#2a2d57] peer"
        placeholder=" "
      />
      <label
        for="floating_filled"
        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#2a2d57] peer-focus:dark:text-[#2a2d57] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >{{ message }}</label
      >
    </div>

    <div class="ml-3">
      <button
        class="bg-[#2a2d57] h-9 w-full rounded-md text-white text-center font-semibold text-[20px] hover:bg-white hover:text-[#2a2d57] hover:border-[#2a2d57] border-[#2a2d57] border-2 transition duration-300"
      >
        Send
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  message: string;
}
defineProps<ContactInfo>();
</script>
