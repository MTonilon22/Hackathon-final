<template>
  <div
    class="w-[100%] flex flex-row mb-3 h-[100px] custom-sm:h-[150px] bg-white p-3 border-2 rounded-md shadow-xl hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] hover:scale-[1.02] hover:text-blue-600"
  >
    <button class="">
      <a target="_blank" class="flex">
        <div
          class="md:w-[100%] md:h-[100%] custom-sm:w-[100%] custom-sm:h-[100%] lg:w-[40%] lg:h-[100%] m-[-3px] custom-sm:mt-[1%]"
        >
          <img
            src="../assets/soft-eng.png"
            alt="YouTube Thumbnail"
            class="rounded-lg md:h-[70px] md:w-[100px] custom-sm:h-[80px] custom-sm:w-[105px] object-cover lg:h-[80px] lg:w-[300px] md:mt-1 mx-auto"
          />
        </div>
        <div class="lg:w-[60%] p-2">
          <div
            class="lg:text-[11px] md:text-[9px] font-semibold lg:mt-[-4%] text-justify tracking-tight lg:ml-1 custom-sm:text-xs"
          >
            <!-- {{ description }} -->
            <div class="font-semibold text-black flex">
              <div class="w-[30%]">Azues</div>
              <div class="w-[70%]">Software Developer:</div>
            </div>

            <div>Seeking passionate Software Developer to join team.</div>
          </div>
        </div>
      </a>
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  description: String,
  name: String,
  thumbnailUrl: String,
});
</script>
