<template>
  <!-- Navigation Bar E67E23 -->
  <div class="flex flex-row bg-[#2a2d57]">
    <div class="cs:hidden sm:hidden md:hidden lg:block sticky">
      <div class="flex lg:h-14 sticky top-11 bg-[#2a2d57]">
        <div
          class="flex w-[100%] justify-end items-center pr-3 ml-5 bg-[#2a2d57]"
        >
          <UserIcon
            @click="toggleModal"
            class="w-10 h-10 cursor-pointer text-white hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
    <LoginModal :modalActive="modalActive" @close-modal="toggleModal">
    </LoginModal>
    <div class="flex w-[80%] justify-center items-center gap-1">
      <input
        class="border-2 border-[#2a2d57] rounded-full w-[550px] h-11 focus:outline-none hover:shadow-2xl pl-3"
        type="text"
        name=""
        id="search_bar"
        placeholder="Search..."
        :value="data.textInputValue"
        @keyup.enter="search"
        @input="(e: Event) => updateTextInputValue(e as InputEvent)"
        @blur="typedValue()"
      />

      <MagnifyingGlassIcon
        class="h-11 w-11 text-white cursor-pointer hover:scale-[1.02]"
        @click="search"
      />
    </div>
    <div
      class="bg-[#2a2d57] cs:sticky cs:top-0 sticky top-0 h-14 text-[#fefefe] text-[18px] font-semibold p-2 pt-3 z-10 pr-10"
    >
      <div></div>
      <ul
        class="flex justify-end gap-6 hover: cursor-pointer cs:hidden font-poppins font-bold"
      >
        <li class="">
          <router-link
            class="hover-underline cs:hidden sm:hidden md:hidden lg:block sm:text-base md:text-md lg:text-lg"
            to="/home"
            >Home</router-link
          >
        </li>
        <li class="">
          <router-link
            class="hover-underline cs:hidden sm:hidden md:hidden lg:block sm:text-base md:text-md lg:text-lg"
            to="/properties"
            >Schedule</router-link
          >
        </li>
        <li class="">
          <router-link
            class="hover-underline cs:hidden sm:hidden md:hidden lg:block sm:text-base md:text-md lg:text-lg"
            to="/PropertyNews"
            >Status</router-link
          >
        </li>
        <li class="">
          <router-link
            class="hover-underline cs:hidden sm:hidden md:hidden lg:block sm:text-base md:text-md lg:text-lg"
            to="/about"
            >Community</router-link
          >
        </li>
      </ul>
      <button
        @click="toggleSidebar"
        class="hover:underline cs:md sm:text-md lg:hidden ml-2"
      >
        <mdicon
          name="ReorderHorizontal"
          :width="35"
          :height="35"
          class="hover:text-white text-[#111929]"
        />
      </button>
    </div>
  </div>
  <!-- Sidebar component -->
  <SideBar :isVisible="isSidebarVisible" :toggleSidebar="toggleSidebar" />

  <!-- Search and Logo Bar -->
</template>

<script lang="ts" setup>
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/vue/24/outline";
import SideBar from "./SideBar.vue";
const isSidebarVisible = ref(false);
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
import { ref ,onMounted} from "vue";
import router from "../router";
import { useRoute } from "vue-router";
import LoginModal from "./LoginModal.vue";

const route = useRoute();

const modalActive = ref(false);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
onMounted(()=>{
  initializeDataFetching()
});

const initializeDataFetching = async () => {
      await getValue();
      setInterval(getValue, 1000); 
  };
const numVal = ref();
const getValue = async ()=>{
  const response = await fetch('http://192.168.76.225:8080/getVideo/1');
  const data = await response.json();
  
  numVal.value = data[0].value;
  console.log(numVal.value)
  if(numVal.value>0){
    const audio = new Audio(`src/assets/alert.mp3`); 
      console.log("test");
      audio.play();
      toggleModal();
  }
}








const data = ref({
  textInputValue: "",
});
const updateTextInputValue = (event: InputEvent) => {
  const inputElement = event.target as HTMLInputElement;
  data.value.textInputValue = inputElement.value;
};

const typedValue = () => {
  var textValue = data.value.textInputValue;
  localStorage.setItem("search", `${textValue}`);
};

const search = () => {
  var textValue = data.value.textInputValue;
  var currentPath = route.fullPath;

  if (currentPath == "/search") {
    localStorage.setItem("search", `${textValue}`);
    location.reload();
  } else {
    router.push("/search");
  }
};
</script>
