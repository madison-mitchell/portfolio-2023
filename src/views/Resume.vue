<template>
  <div id="top-of-page" class="container flex flex-col w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full">
    <header class="flex flex-col w-full bg-neutral-50 items-center justify-center">
      <h1 class="text-3xl font-bold mt-10">Online Resume</h1>
      <a href="/Madison Mitchell Resume.pdf" download>
        <button class="bg-sky-500 text-white font-bold mt-4 mb-10 w-fit px-4 py-2 rounded"><i class="fa-solid fa-file-lines pr-2"></i>Download PDF Version</button>
      </a>
    </header>
    <div class="resume-container bg-white p-4">
      <div class="resume bg-white drop-shadow-2xl mx-auto my-20 p-20">
        <ResumeHeader />
        <!-- <header class="resume-header flex justify-between">
          <div class="right-box flex flex-col justify-center">
            <h1 class="text-4xl text-left tracking-wider font-black text-sky-500">MADISON MITCHELL</h1>
            <h5 class="text-md text-left">Full Stack Software Engineer | Salesforce Developer</h5>
          </div>
          <div class="left-box flex">
            <div class="vertical-bar inline-block max-h-max bg-neutral-300 mr-4"></div>
            <div class="contact-info flex flex-col justify-center">
              <h5 class="text-md text-left"><a href="tel:3304955075">(330) 495-5075</a></h5>
              <h5 class="text-md text-left"><a href="mailto:madisonrmitchell@icloud.com">madisonrmitchell@icloud.com</a></h5>
              <h5 class="text-md text-left"><a href="http://madison-mitchell.github.io" target="_blank">madison-mitchell.github.io</a></h5>
              <h5 class="text-md text-left">Uniontown, OH, USA</h5>
            </div>
          </div>
        </header> -->
        <!-- <div class="horizontal-bar bg-neutral-300 h-0.5 w-full mt-4 mb-8"></div> -->
        <ResumeBio />
        <!-- <div class="resume-bio flex">
          <img class="headshot rounded-full w-36 h-36 mr-10 my-auto" src="../assets/headshot.jpeg" alt="">
          <p class="text-justify text-md tracking-tight">Results-oriented Software Developer with over a year of experience at Progressive Insurance, specializing in Salesforce development. Skilled in C#, .NET, Java, Javascript, Vue.js, SQL, HTML/CSS, Agile (Scrum) and more. Proven track record of delivering high-quality solutions, translating business requirements into technical implementations. Strong problem-solving abilities, effective communication skills, thrives in fast-paced, Agile environments, actively contributing to Scrum methodologies and meeting project deadlines. Committed to staying current with emerging technologies and dedicated to creating robust, scalable software solutions that drive business growth and enhance user experiences.</p>
        </div> -->
        <!-- <div class="horizontal-bar bg-neutral-300 h-0.5 w-full mt-8 mb-8"></div> -->
        <ResumeMain />
        <!-- <div class="main-section flex">
          <div class="left-box w-3/4">
            <div class="work">
              <header class="flex mb-8">
                <div class="inline-block w-1.5 h-7 bg-sky-500 mr-4"></div>
                <h1 class="flex flex-col text-sky-500 text-2xl font-bold tracking-wider">WORK EXPERIENCES</h1>
              </header>
              <div class="progressive-details">
                <div class="header-progressive flex justify-between mt-4">
                  <h3 class="text-left tracking-wide text-xl font-black">IT Apps Programmer</h3>
                  <h4 class="flex flex-col justify-center text-neutral-400 text-sm">Progressive | May 2022 - Present</h4>
                </div>
                <ul class="bullets-progressive text-justify text-md list-disc pl-6">
                  <li class="py-0.5">Administer and maintain the Salesforce Org, ensuring its optimal performance and stability</li>
                  <li class="py-0.5">Perform Salesforce development tasks, including customization, configuration, and coding, to support business requirements</li>
                  <li class="py-0.5">Collaborate with cross-functional teams to gather and analyze project requirements for Salesforce implementation</li>
                  <li class="py-0.5">Assist in the creation and management of Salesforce projects, ensuring alignment with business goals and best practices</li>
                  <li class="py-0.5">Stay up-to-date with Salesforce updates, features, and industry trends to recommend improvements and drive innovation within the Salesforce ecosystem</li>
                </ul>
              </div>
              <div class="apple-details">
                <div class="header-apple flex justify-between mt-4">
                  <h3 class="text-left tracking-wide text-xl font-black">Team Manager Apprentice</h3>
                  <h4 class="flex flex-col justify-center text-neutral-400 text-sm">Apple | July 2014 - May 2022</h4>
                </div>
                <ul class="bullets-progressive text-justify text-md list-disc pl-6">
                  <li class="py-0.5">Able to multitask within 5+ applications/systems, while communicating with co-workers and 3+ customers at once</li>
                  <li class="py-0.5">Able to analyze and resolve a variety of complex technical issues</li>
                  <li class="py-0.5">Excellent, effective communication skills using written and verbal skills</li>
                  <li class="py-0.5">Strong time management skills with the ability to work on multiple projects on a deadline</li>
                  <li class="py-0.5">Able to adopt to different communication styles</li>
                  <li class="py-0.5">Average 92% Customer Satisfaction Score, 10% above the role average</li>
                  <li class="py-0.5">Supports 10 Team Leads responsible for 35+ Advisors each with the transition to remote Customer Support from Retail</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="vertical-bar inline-block max-h-max bg-neutral-300 mx-8"></div>
          <div class="right-box w-1/5 flex mb-8">
            <div class="skills">
              <header class="skills-header flex">
                <div class="inline-block w-1.5 h-7 bg-sky-500 mr-4"></div>
                <h1 class="flex flex-col text-sky-500 text-2xl font-bold tracking-wider">SKILLS</h1>
              </header>
              <h3 class="text-left tracking-wide text-xl font-black mt-4">Technical</h3>
              <ul class="tech-skills text-left text-md tracking-wide">
                <li class="py-0.5">C# .NET</li>
                <li class="py-0.5">Java</li>
                <li class="py-0.5">SQL</li>
                <li class="py-0.5">Javascript / Vue.js</li>
                <li class="py-0.5">TailwindCSS</li>
                <li class="py-0.5">Bootstrap</li>
                <li class="py-0.5">Object-Oriented Design</li>
                <li class="py-0.5">Cloud (Azure)</li>
                <li class="py-0.5">CI/CD tool sets (GIT, Azure, DevOps)</li>
                <li class="py-0.5">Salesforce Development</li>
              </ul>
              <h3 class="text-left tracking-wide text-xl font-black mt-6">Professional</h3>
              <ul class="pro-skills text-left text-md tracking-wide">
                <li class="py-0.5">Effective Communication</li>
                <li class="py-0.5">Team Player</li>
                <li class="py-0.5">Strong Problem Solver</li>
                <li class="py-0.5">Good Time Management</li>
              </ul>
              <header class="education-header flex mt-6">
                <div class="inline-block w-1.5 h-7 bg-sky-500 mr-4"></div>
                <h1 class="flex flex-col text-sky-500 text-2xl font-bold tracking-wider">EDUCATION</h1>
              </header>
              <h3 class="text-left tracking-wide text-xl font-black mt-6">Certificates</h3>
              <ul class="education text-left text-md">
                <li class="py-0.5">Software Development</li>
                <li class="py-0.5 ml-2">April 2022</li>
                <li class="py-0.5 ml-2">We Can Code IT</li>
                <li class="py-0.5 ml-2">Cleveland, OH</li>
              </ul>
            </div>
          </div>
        </div> -->
        <!-- <div class="horizontal-bar bg-neutral-300 h-0.5 w-full mt-8 mb-8"></div> -->
        <ResumeFooter />
        <!-- <footer class="flex justify-evenly text-sm">
            <h5><a href="http://github.com/madison-mitchell" target="_blank"><i class="fa-brands fa-github fa-lg text-sky-500 w-6"></i>github.com/madison-mitchell</a></h5>
            <h5><a href="http://www.linkedin.com/in/madison-r-mitchell" target="_blank"><i class="fa-brands fa-linkedin-in fa-lg text-sky-500 w-6"></i>linkedin.com/in/madison-r-mitchell</a></h5>
            <h5><a href="http://madison-mitchell.github.io" target="_blank"><i class="fa-solid fa-globe fa-lg text-sky-500 w-6"></i>madison-mitchell.github.io</a></h5>
        </footer> -->
      </div>
    </div>
  </div>
</template>


<script>
import ResumeHeader from '@/components/ResumeHeader.vue';
import ResumeBio from '@/components/ResumeBio.vue';
import ResumeMain from '@/components/ResumeMain.vue';
import ResumeFooter from '@/components/ResumeFooter.vue';

export default {
  components: {
    ResumeHeader,
    ResumeBio,
    ResumeMain,
    ResumeFooter
  }
}
</script>

<style scoped>
.resume {
  max-width: 1020px;
  /* max-height: 1320px; */
}

.vertical-bar {
  width: .5px;
}

.horizontal-bar {
  height: .5px;
}

</style>