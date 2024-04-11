<template>
  <div
    class="custom-sm:w-[95%] sm:w-[100%] md:w-[60%] lg:w-[55%] lg:ml-[1%] bg-white custom-sm:m-2 p-5 border-2 rounded-md shadow-xl"
  >
    <div class="">
      <div class="flex flex-col justify-center md:items-center mt-3">
        <div
          class="custom-sm:mb-5 custom-sm:mx-auto custom-sm:w-[300px] sm:mb-5 sm:w-[330px] md:w-[100%] lg:w-[100%] mx-auto lg:ml-[-9%]"
        >
          <div class="iframe-container">
            <div><img :src="image" alt="" /></div>
          </div>
        </div>

        <div class="flex-col w-[90%]">
          <div class="font-sans lg:ml-[-3%] md:ml-[-5%]">
            <strong class="font-bold font-poppins lg:text-2xl lg:text-center"
              >{{ job_title }} </strong
            ><br /><br />

            <strong class="font-bold font-poppins">Position Overview: </strong>
         {{ job_description }}<br /><br />
         <strong class="font-bold font-poppins">Status: </strong>
         PENDING<br /><br />

            <strong class="font-bold font-poppins">Location: </strong>
            {{ location }}<br /><br />

            <strong class="font-bold font-poppins">Salary</strong>
            ₱{{ salary }} / month<br /><br />
            <div class="whitespace-break-spaces font-poppins">
              <strong>Skills Required</strong> {{ skills }}<br /><br />
            </div>

            <div class="flex justify-center">
              <ul class="steps steps-vertical lg:steps-horizontal">
                <li @click="currenTab = 0" class="step step-warning">
                  Submit Requirement
                </li>
                <li @click="currenTab = 1" class="step">Primary Interview</li>
                <li @click="currenTab = 2" class="step">Online Assessments</li>
                <li @click="currenTab = 3" class="step">
                  Technical Interviews
                </li>
                <li @click="currenTab = 4" class="step">Confirmation</li>
              </ul>
            </div>

            <div
              v-if="currenTab === 0"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              {{ step1 }}
              <label for="textInput" class="block mb-2 text-sm font-medium text-gray-700">Enter Answer:</label>
              <input
                type="text"
                id="textInput"
                name="textInput"
                placeholder="Type here..."
                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              />
              <button @click="currenTab = 1">Done</button>
            </div>

            <div
              v-if="currenTab === 1"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              {{ step2 }}
              <label for="textInput" class="block mb-2 text-sm font-medium text-gray-700">Enter Answer:</label>
              <input
                type="text"
                id="textInput"
                name="textInput"
                placeholder="Type here..."
                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              />
              <button @click="currenTab = 2">Done</button>

            </div>

            <div
              v-if="currenTab === 2"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              {{step3}}
              <label for="textInput" class="block mb-2 text-sm font-medium text-gray-700">Enter Answer:</label>
              <input
                type="text"
                id="textInput"
                name="textInput"
                placeholder="Type here..."
                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              />
              <button @click="currenTab = 3">Done</button>

            </div>

            <div
              v-if="currenTab === 3"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              {{ step4 }}
              <label for="textInput" class="block mb-2 text-sm font-medium text-gray-700">Enter Answer:</label>
              <input
                type="text"
                id="textInput"
                name="textInput"
                placeholder="Type here..."
                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              />
              <button @click="currenTab = 4">Done</button>
            </div>

            <div
              v-if="currenTab === 4"
              class="w-full h-[600px] mt-5 shadow-xl border-gray-400 border-2 rounded-lg p-5 mb-2"
            >
              {{ step5 }}
               <label for="textInput" class="block mb-2 text-sm font-medium text-gray-700">Enter Email:</label>
              <input
              v-model="email"
                type="text"
                id="textInput"
                name="textInput"
                placeholder="Type here..."
                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              />
              <button @click="sendMail">Done</button>
            </div>
            <div
              class="flex lg:w-full text-[#2a2d57] lg:ml-3 lg:mb-2 md:ml-1 md:mb-1"
            >
              <div class="flex text-lg font-semibold pl-3 custom-sm:my-4">
                Comments:
                <ChatBubbleLeftIcon
                  class="h-[26px] w-[26px] ml-1 text-[#2a2d57]"
                />
              </div>
            </div>

            <div
              class="flex lg:w-full md:w-[96%] overflow-auto bg-white rounded-md shadow-xl lg:p-3 lg:ml-5 lg:mb-6 md:p-3 md:ml-3 md:my-6 cursor-pointer hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)]"
            >
              <div class="flex ml-2 w-full">
                <input
                  type="text"
                  placeholder="Leave a comment..."
                  class="w-full border-b-2 pl-2 p3-1 focus:outline-none"
                />
                <a
                  href=""
                  class="flex items-center justify-center my-auto ml-1.5"
                  ><PaperAirplaneIcon
                    class="ml-1 mr-1 w-[25px] h-[25px] text-[#2a2d57] hover:scale-110"
                /></a>
              </div>
            </div>
            <Comment
              name="@Mikilabsyu143"
              description="I held her close to me
            'Cause I know she breaks so easily
            And then I told her."
            />
            <Comment
              name="@Mikilabsyu143"
              description="But I knew no matter how I tried to console her
            She'd just do the best she could
            But there are times the best is no damn good"
            />
            <Comment
              name="@Mikilabsyu143"
              description="And no matter how you try to be kind
            There's always still a part of you you leave behind
            When it falls apart
            There's no easy way to break somebody's heart"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import Comment from "../components/Comment.vue";

const currenTab = ref(0);

defineProps({
image:String,
job_title:String,
job_description:String,
location:String,
salary:String,
skills:String,

step1:String,
step2:String,
step3:String,
step4:String,
step5:String,

});


const email = ref("");
  const subject = ref("Talleco Application Status");
  const message = ref("Dear Stephen Sagarino Jr., thank you for your interest in joining Talleco. After careful consideration, we regret to inform you that we have decided to pursue other candidates whose qualifications more closely align with our current needs. We appreciate the time you invested in applying and wish you the best of luck in your future endeavors.");
  const improve = ref("Based on your answers, in Step 1, you seem to be lacking in a specific skill. We recommend focusing on improving in this area to enhance your qualifications for future opportunities.");
  const sendMail = async () => {
    try {
      const formData = new FormData();
      formData.append("email", email.value);
      formData.append("subject", subject.value);
      formData.append("message", message.value);
      formData.append("improve", improve.value);

      await axios.post("http://localhost:8080/sendMail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
    
  
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email. Please try again.");
    }
  };
</script>

<style>
@media (min-width: 300px) and (max-width: 400px) {
  /* CSS styles for extra custom-small screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: -4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 300px;
    height: 280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 400px) and (max-width: 640px) {
  /* CSS styles for custom-small screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: -1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 330px;
    height: 280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  /* CSS styles for small screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: -1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 350px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  /* CSS styles for medium screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: -1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 400px;
    height: 350px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  /* CSS styles for large screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 500px;
    height: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/* Extra-large screens */
@media (min-width: 1280px) and (max-width: 1535px) {
  /* CSS styles for extra-large screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 620px;
    height: 450px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 1536px) {
  /* CSS styles for extra-large screens */
  .iframe-container {
    width: 100%; /* Customize as needed */
    height: 100%;
    margin-left: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iframe-container iframe {
    width: 760px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
