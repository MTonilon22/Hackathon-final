<template>
  <div class="flex text-[#E67E23] mb-2 mt-4">
    <div
      class="flex w-[16%] text-lg pl-3 ml-3 font-poppins font-bold custom-sm:hidden sm:hidden md:hidden lg:block items-center justify-center my-auto"
    >
      Search Filter
    </div>
    <div class="flex w-[84%] text-lg pl-5 font-poppins font-bold ml-[9%] my-1">
      Latest<NewspaperIcon class="h-[26px] w-[26px] ml-1" />
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
          background-color: #e67e23;
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
      <Products />
      <Products />
      <Products />

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
  register();
  get6Properties();
  getAgents();
});

const properties = ref([]);

// START OF PROPERTIES FETCH
const get6Properties = async () => {
  const response = await fetch("http://localhost:8080/getAllPropertyID");
  const data = await response.json();

  for (var i = 0; i < data.length; i++) {
    try {
      var id = data[i].property_id;
      const propertyGenData = await general_data(id);
      const propertyData = await property_data(id);
      const propertyAddress = await property_address(id);
      const propertyLandmark = await property_landmark(id);
      const propertyImage = await property_image(id);
      const imageData = propertyImage[0].main_image.data;

      properties.value.push({
        property_id: id,
        property_name: propertyGenData[0].name,
        imageUrl: await convertBlob(imageData),

        property_price: propertyData[0].property_price,
        property_category: propertyData[0].category,
        property_type: propertyData[0].property_type,
        property_area: propertyAddress[0].property_area,
        property_bedroom: propertyAddress[0].bedroom,
        property_bathroom: propertyAddress[0].bathroom,
        property_local_area: propertyAddress[0].local_area,
        property_city: propertyAddress[0].city,

        property_price: propertyData[0].property_price,
        property_category: propertyData[0].category,
        property_type: propertyData[0].property_type.toUpperCase(),
        property_area: propertyAddress[0].property_area,
        property_bedroom: propertyAddress[0].bedroom,
        property_bathroom: propertyAddress[0].bathroom,
        property_local_area: propertyAddress[0].local_area,
        property_city: propertyAddress[0].city,

        property_airport: propertyLandmark[0].airport ? 1 : 0,
        property_busstand: propertyLandmark[0].bus_stand ? 1 : 0,
        property_hospital: propertyLandmark[0].hospital ? 1 : 0,
        property_patroltank: propertyLandmark[0].patroltank ? 1 : 0,
        property_railway: propertyLandmark[0].railway ? 1 : 0,
        property_shopping: propertyLandmark[0].shopping ? 1 : 0,
        property_universities: propertyLandmark[0].universities ? 1 : 0,
      });

      if (i + 1 == 6) {
        break;
      }
    } catch (error) {
      console.error("Error processing property:", error);
    }
  }
};

const general_data = async (i) => {
  try {
    const response = await fetch(`http://localhost:8080/getGeneralData/${i}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
const property_image = async (i) => {
  try {
    const response = await fetch(`http://localhost:8080/getPropertyImage/${i}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
const property_data = async (i) => {
  try {
    const response = await fetch(`http://localhost:8080/getPropertyData/${i}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
const property_address = async (i) => {
  try {
    const response = await fetch(
      `http://localhost:8080/getPropertyAddress/${i}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

const property_landmark = async (i) => {
  try {
    const response = await fetch(
      `http://localhost:8080/getPropertyLandMark/${i}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
//START OF AGENT FETCH
const agents = ref([]); //array of agents
const getAgents = async () => {
  const response = await fetch("http://localhost:8080/getAgents");
  const data = await response.json();

  for (var i = 0; i < data.length; i++) {
    var image = await getAgentImageByID(data[i].agent_id);
    agents.value.push({
      id: data[i].agent_id,
      image: await convertBlob(image),
      name: data[i].agent_name,
      position: data[i].position,
      description: data[i].description,
    });
  }
};
const getAgentImageByID = async (id) => {
  const response = await fetch(`http://localhost:8080/getAgentByID/${id}`);
  const data = await response.json();

  return data[0].profile_picture.data;
};

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
