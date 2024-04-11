<template>
  <div class="h-screen flex flex-row w-[100%]">
    <div class="w-[40%] ml-[1%] ">
      <div class="text-lg font-bold tracking-wider my-5 ml-[2%]   ">
        Related Hot Topics
      </div>
      <div class="gap-5 border-2 rounded-lg "><HotTopics/>
      <HotTopics/>
      <HotTopics/>
      <HotTopics/>
      <HotTopics/></div>
      
    </div>
      
    <div class="w-[70%] mr-[1%]">
      <div class="text-lg font-bold tracking-wider my-5 ml-[2%]">
        Community Forum
      </div>
      <div class="border-2 ml-[3%] h-full rounded-lg space-y-4 ">
        <div class="w-[95%] h-[25%]  items-center justify-center flex mx-auto mt-[2%]"><ForumCards/></div>
      
      </div>
    </div>
  </div>
</template>

<script setup>
import HotTopics from "../components/HotTopics.vue"
import ForumCards from "../components/ForumCards.vue"

import { ref, onMounted } from "vue";



//START OF AGENT FETCH

</script>
