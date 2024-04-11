<template>
  <div class="flex text-[#2a2d57] mb-2 mt-4">
    <div
      class="flex w-[16%] text-lg pl-3 ml-3 font-poppins font-bold custom-sm:hidden sm:hidden md:hidden lg:block items-center justify-center my-auto"
    >
      Search Filter
    </div>
    <div class="flex w-[84%] text-lg pl-5 font-poppins font-bold ml-[9%] my-1">
      Job Listing<NewspaperIcon class="h-[26px] w-[26px] ml-1" />
    </div>
  </div>
  <div class="flex">
    <!-- Accordion -->

    <div
      class="md:hidden sm:hidden custom-sm:hidden xl:block lg:block lg:h-[700px] lg:w-[16%] flex-col overflow-auto ml-6"
    >
      <Accordion
        title="Company Names"
        :content="[
          { type: 'checkbox', data: 'Accenture' },
          { type: 'checkbox', data: 'Azure' },
          { type: 'checkbox', data: 'Talleco' },
        ]"
      />
      <Accordion
        title="Salary Range"
        :content="[
          { type: 'text', data: '₱ _ _ _ _ _ _ _ _ _ _ _ _ ' },
          { type: 'range', data: 'Cebu City' },
        ]"
      />
      <Accordion
        title="Job Role"
        :content="[
          { type: 'checkbox', data: 'Web Developer' },
          { type: 'checkbox', data: 'Full Stack Developer' },
          { type: 'checkbox', data: 'Mobile Developer' },
        ]"
      />
      <Accordion
        title="Location"
        :content="[{ type: 'dialog', data: 'Cebu' }]"
      />

      <Accordion
        title="Ratings"
        :content="[
          { type: 'radio', data: '5 Stars' },
          { type: 'radio', data: '4 Stars' },
          { type: 'radio', data: '3 Stars' },
          { type: 'radio', data: '2 Stars' },
          { type: 'radio', data: '1 Stars' },
        ]"
      />
      <Accordion
        title="Job Type"
        :content="[
          { type: 'radio', data: 'On Site' },
          { type: 'radio', data: 'Work At Home' },
          { type: 'radio', data: 'Hybrid' },
        ]"
      />
      <button
        @click="filter"
        style="
          background-color: #2a2d57;
          color: white;
          padding: 10px 15px;
          border: none;
          cursor: pointer;
          border-radius: 10%;
          font-family: Poppins;
          font-weight: 400;
          margin-top: 10px;
        "
      >
        Filter
      </button>
    </div>

    <!-- Latest Sale -->
    <div
      class="flex flex-wrap mt-2 h-full md:mx-auto md:w-[100%] lg:w-[84%] custom-sm:gap-3 custom-sm:mx-auto gap-y-9 md:gap-y-9 md:gap-5 justify-evenly"
    >
      <Products
      v-for="(job,index) in jobs"
      :id="job.id"
      :image="job.image"
      :jobtitle="job.job_title"
      :jobcompany="job.employer_id"
      :jobtype="job.job_type"
      :salary="job.salary"
      :jobdescription="job.job_description"

       />


      <div
        class="flex justify-center items-center custom-sm:my-5 custom-sm:w-[20%]"
      >
        <Pagination
          :postCount="postCount"
          :currentPage="currentPage"
          :totalPage="totalPage"
          :pages="pages"
          :next="next"
          :previous="previous"
          :changePage="changePage"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { register } from "swiper/element/bundle";
import Accordion from "../components/Accordion.vue";
import Products from "../components/Products.vue";
import Loading from "../components/Loading.vue";
import Pagination from "../components/Pagination.vue";
import { NewspaperIcon } from "@heroicons/vue/24/outline";
import AgentCard from "../components/AgentCard.vue";
import { ref, onMounted } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

onMounted(() => {
  getJobs();

});

const jobs = ref([]);

const getJobs = async () => {
  const response = await fetch('http://localhost:8080/getJobs');
  const data = await response.json();
console.log(data[0]);
  for(var i = 0 ; i < data.length ;i ++){
    jobs.value.push({
      id: data[i].job_id,
      job_title: data[i].job_title,
      job_company : data[i].employer_id,
      job_description : data[i].job_description,
      job_type : data[i].job_type,
      salary : data[i].salary,

      image: await convertBlob(data[i].image.data),
    });
  }

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
