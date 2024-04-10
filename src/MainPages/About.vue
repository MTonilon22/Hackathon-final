<template>
  <div class="h-screen flex flex-row w-[100%]">
    <div class="w-[30%]">adad</div>
    <div class="w-[70]">dadad</div>
  </div>
</template>

<script setup>
import about from "../assets/about.png";
import ValCard from "../components/ValCard.vue";
import AgentCard from "../components/AgentCard.vue";
import Gallery from "../components/Gallery.vue";
import { ref, onMounted } from "vue";

onMounted(() => {
  getAgents();
});

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
