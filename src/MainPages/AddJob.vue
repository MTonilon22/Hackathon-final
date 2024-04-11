<template>
  <div class="h-screen">
    <div class="items-center justify-center flex cs:flex cs:flex-col">
      <div
        class="items-center justify-center mx-auto flex text-secondary font-semibold tracking-widest"
      ></div>
      <div
        class="lg:w-[100%] flex-col mx-auto cs:w-[100%] items-center justify-center flex lg:mt-[3%] cs:mt-[10%]"
      >
        <div class="w-[100%] rounded-2xl sm:max-w-md xl:p-0">
          <div class="cs:px-5 lg:p-3 space-y-5 cs:w-[100%]">
            <h1
              class="w-[100%] font-semibold leading-tight tracking-wide cs:text-2xl lg:text-3xl text-secondary md:text-2xl my-3"
            >
              <span class="text-ternary tracking-wide">PointQuest</span>
              Registration
            </h1>
            <p1 class="text-secondary cs:text-sm tracking-wide"
              >To register, please enter your credentials.</p1>
            <div class="space-y-5 lg:w-[100%]" action="#">
              <div
                class="lg:flex-row cs:flex-col items-center justify-center lg:flex gap-5 w-[100%] cs:space-y-5"
              >
                <div class="w-[100%]">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-secondary"
                    >Employer Name</label
                  >
                  <input
                    v-model="employer_id"
                    type="text"
                    
                   
                    class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-[100%] p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Michael Tonilon"
                    required=""
                  />
                </div>
                <div class="w-[100%]">
                  <label
                    
                    class="block mb-2 text-sm font-medium text-secondary"
                    >Salary</label
                  >
                  <input
                    v-model="salary"
                    type="text"
                 
                    
                    class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-[100%] p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="99999"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-secondary"
                >Position</label
              >
              <input
                v-model="position"
                type="text"
               
                class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Web Developer"
                required=""
              />
            </div>

            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-secondary"
                >Job Type</label
              >
              <input
                v-model="job_type"
                type="text"
              
                placeholder="On-Site"
                class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-secondary"
                >Experience</label
              >
              <input
                v-model="experience"
                type="text"
                
                placeholder="5 years"
                class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-secondary"
                >Job Title</label
              >
              <input
                v-model="job_title"
                type="text"
                
                placeholder=""
                class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-secondary"
                >Job Description</label
              >
              <input
                v-model="job_description"
                type="text"
                
                placeholder=""
                class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-secondary"
                >Skills</label
              >
              <input
                v-model="skills"
                type="text"
                
                placeholder=""
                class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div class="flex flex-row flex-wrap items-center justify-center gap-5">
              <div>
              <label
                
                class="block mb-2 text-sm font-medium text-secondary"
                >Step 1</label
              >
              <input
                v-model="step1"
                type="text"
                
                placeholder=""
                class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-secondary"
                >Step 2</label
              >
              <input
                v-model="step2"
                type="text"
                
                placeholder=""
                class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-secondary"
                >Step 3</label
              >
              <input
                v-model="step3"
                type="text"
                
                placeholder=""
                class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-secondary"
                >Step 4</label
              >
              <input
                v-model="step4"
                type="text"
                
                placeholder=""
                class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-secondary"
                >Step 5</label
              >
              <input
                v-model="step5"
                type="text"
                
                placeholder=""
                class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            
            </div>
            <div>
              <label
                
                class="block mb-2 text-sm font-medium text-secondary"
                >Location</label
              >
              <input
                v-model="location"
                type="text"
                
                placeholder=""
                class="bg-primary border font-500 border-gray-300 text-secondary sm:text-sm rounded-md focus:ring-ternary focus:border-ternary block w-full p-2.5 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <input  type="file" @change="handleFileImage">
    <button class="bg-secondary px-5 py-2 rounded-lg text-white font-semibold text-sm" @click="addJob">SUBMIT</button>

            <div class="flex gap-3 cs:w-[100%] cs:mx-auto">
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
  </div>
    <!-- <p>Employer Name</p>
    <input v-model="employer_id" type="text">
    <p>salary</p>
    <input v-model="salary" type="text">
    <p>position</p>
    <input v-model="position" type="text">

    <p>job_type</p>
    <input v-model="job_type" type="text">
    <p>experience</p>
    <input v-model="experience" type="text">
    <p>job_title</p>
    <input v-model="job_title" type="text">
    <p>job_description</p>
    <input v-model="job_description" type="text">
    <p>Skills</p>
    <input v-model="skills" type="text">
    <p>step1</p>
    <input v-model="step1" type="text">
    <p>step2</p>
    <input v-model="step2" type="text">
    <p>step3</p>
    <input v-model="step3" type="text">
    <p>step4</p>
    <input v-model="step4" type="text">
    <p>step5</p>
    <input v-model="step5" type="text">
    <p>location</p>
    <input v-model="location" type="text">
    <p>image</p>
     -->
</template>

<script setup>
import {ref} from "vue"
import axios from "axios"

const employer_id = ref(1)
const salary = ref()
const position = ref()
const job_type = ref('wah')
const experience = ref('legend')
const job_title=ref()
const job_description = ref()
const skills = ref()
const step1=ref()
const step2=ref();
const step3=ref();
const step4 = ref()
const step5=ref()
const location = ref();
const image = ref(null);
const addJob = async () =>{
    try{
    const formData = new FormData();
    formData.append('employer_id','Accenture');
    formData.append('salary',salary.value);
    formData.append('position',position.value);
    formData.append('job_type',job_type.value);
    formData.append('experience',experience.value);
    formData.append('job_title',job_title.value);
    formData.append('job_description',job_description.value);
    formData.append('skills',skills.value);
    formData.append('step1',step1.value);
    formData.append('step2',step2.value);
    formData.append('step3',step3.value);
    formData.append('step4',step4.value);
    formData.append('step5',step5.value);
    formData.append('location',location.value);
    formData.append('image',image.value);


    await axios.post("http://localhost:8080/addJob",formData,{
      headers: {
      "Content-Type" : "multipart/form-data",
        },
      });
      window.location.reload();
  }catch(error){
    console.log("ERror: ",error);
  }
}
const handleFileImage = (event) => {
  const file = (event.target.files || [])[0];

  image.value = file;
};

</script>