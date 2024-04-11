<template>
  <div class="p-3">
    <div class="flex text-[#2a2d57] mb-2 md:">
      <div
        class="flex w-[16%] text-lg pl-3 font-poppins font-bold md:text-md lg:text-lg custom-sm:hidden sm:hidden md:hidden lg:block"
      >
        Search Filter
      </div>
      <div
        class="flex w-[56%] custom-sm:ml-[2%] text-lg lg:ml-[2%] lg:pl-5 font-poppins font-bold"
      >
        Blog <NewspaperIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div
        class="custom-sm:hidden flex w-[30%] text-lg font-poppins font-bold md:ml-9 lg:ml-[10%]"
      >
        All <mdicon class="ml-2" name="post-outline" :width="26" :height="26" />
      </div>
    </div>
    <div class="flex custom-sm:flex custom-sm:flex-col">
      <div
        class="md:hidden sm:hidden custom-sm:hidden xl:block lg:block lg:h-[700px] custom-sm:h-[700px] lg:w-[16%] flex-col overflow-auto ml-6"
      >
        <div class="h-[700px] flex-col overflow-auto">
          <BlogOwner
            :profile_picture="agent_profile"
            :name="agent_name"
            :property_number="agent_numberOfProperty"
          />
        </div>
      </div>

      <BlogDetails
        :image="image"
        :job_title="job_title"

        :job_description="job_description"
        :location="location"
        :salary="salary"
        :skills="skills"

        :step1="step1"
        :step2="step2"
        :step3="step3"
        :step4="step4"
        :step5="step5"


  
      />

      <div
        class="lg:w-[25%] md:w-[100%] lg:mr-6 custom-sm:flex custom-sm:flex-col"
      >
        <div
          class="custom-sm:block md:hidden lg:hidden flex w-[30%] text-lg flex-row font-poppins font-bold md:ml-9 lg:ml-[10%] text-orange-500"
        >
          <span class="flex-row w-[200px] flex my-3 ml-2"
            ><h3 class="flex">
              Related Blogs
              <mdicon
                class="flex absolute ml-[35%] flex-row text-semibold"
                name="post-outline"
                :width="26"
                :height="26"
              />
            </h3>
          </span>
        </div>

        <div
          class="custom-sm:flex custom-sm:flex-col custom-sm:h-[300px] custom-sm:w-[95%] custom-sm:mx-auto lg:w-full lg:h-[480px] overflow-auto bg-white border-2 custom-sm:hover:border-orange-500 rounded-md shadow-xl lg:p-5 md:p-2 md:ml-2 lg:ml-5 mb-5"
        >
          <Blog
            v-for="(blog, index) in allBlogs"
            @click="currentBlog(blog.id)"
            :thumbnailUrl="blog.thumbnail"
            :description="blog.name"
            :name="blog.broker"
          />
        </div>
        <div></div>
        <div>
          <div clas="lg:w-[28%] md:w-[100%]"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BlogOwner from "../components/BlogOwner.vue";
import Accordion from "../components/Accordion.vue";
import {
  NewspaperIcon,
  ChatBubbleLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/24/outline";
import Blog from "../components/Blog.vue";
import BlogDetails from "../components/ProductDetails.vue";
import { ref, onMounted, computed } from "vue";

import { useRoute } from "vue-router";


onMounted(() => {
  getCurrentJob();
});

const route = useRoute();

const id = route.params.id;

const image = ref(null);
const job_title = ref(null)
const job_description=ref()
const job_location=ref()
const salary=ref()

const step1=ref()
const step2=ref()
const step3=ref()
const step4=ref()
const step5=ref()

const getCurrentJob = async ()=> {
  const response = await fetch(`http://localhost:8080/getJobById/${id}`);
  const data = await response.json();

  image.value = await convertBlob(data[0].image.data);
  job_title.value = data[0].job_title;
  job_description.value = data[0].job_description;
  job_location.value = data[0].location;
  salary.value = data[0].salary;
  step1.value = data[0].step1;
  step2.value = data[0].step2;
  step3.value = data[0].step3;
  step4.value = data[0].step4;
  step5.value = data[0].step5;

}



const convertBlob = (image) => {
      return new Promise((resolve, reject) => {
        if (image) {
          const blob = new Blob([new Uint8Array(image)], { type: "image/jpeg" });
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            const dataURL = reader.result;
            resolve(dataURL);
          };
        }
      });
    };

</script>

<style>
/* Comment Send Button with Orange Scheme */
.comment-button {
  background-color: #ff6600; /* Orange background color */
  color: #fff; /* Text color (white) */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

/* Hover state for the button */
.comment-button:hover {
  background-color: #e65200; /* Darker orange on hover */
}
</style>
