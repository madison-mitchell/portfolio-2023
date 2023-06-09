<template>
  <div>
        <div class="main-section flex">
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
        </div>
        <div class="horizontal-bar bg-neutral-300 h-0.5 w-full mt-8 mb-8"></div>
    </div>
</template>

<script>
export default {
    name: 'ResumeMain',
}
</script>

<style scoped>
.vertical-bar {
  width: .5px;
}

.horizontal-bar {
  height: .5px;
}
</style>