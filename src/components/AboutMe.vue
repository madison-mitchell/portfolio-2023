<template>
  <div class="about-me grid grid-cols-3 gap-8 p-16 bg-neutral-100">
    <div class="col-span-2 text-justify">
      <header class="flex">
        <div class="inline-block w-1.5 h-10 bg-sky-500 mr-4"></div>
        <h1 class="flex flex-col justify-around text-4xl font-bold">Madison Mitchell</h1>
      </header>
      <h2 class="text-2xl font-medium text-sky-500 py-4">Software Developer</h2>
      <p class="mb-2">Hey there, I'm Madison Mitchell, a Software Developer with nine years of experience in the dynamic world of technology. Throughout my journey, I've honed my skills in a multitude of technologies, including Java, C#, .NET, HTML/CSS, JavaScript, Vue.js, SQL Gearset, and Salesforce. It's been an exhilarating ride, navigating the ever-changing landscape of code.</p>
      <p class="mb-2">Coding is not just a career for me; it's a deep-rooted passion. I find immense joy in bringing ideas to life through lines of code, crafting innovative solutions that make a difference. The thrill of problem-solving and the satisfaction of creating something from scratch is what fuels my drive every day.</p>
      <p class="mb-2">But my passion extends beyond the realm of coding. I'm an ardent believer in the power of continuous learning and creative exploration. When I'm not immersed in coding projects, you'll find me exploring various avenues of creation, whether it's through art, writing, or experimenting with new technologies. The world is my playground, and I'm always seeking new ways to expand my knowledge and push the boundaries of what's possible.</p>
      <p class="mb-2">In a nutshell, I'm Madison Mitchell, a tech enthusiast who thrives on the excitement of coding, creating, and learning. With every line of code, I strive to make a meaningful impact and leave a lasting impression on the ever-evolving world of technology.</p>

    </div>
    
    <div class="col-end-4">
      <img class="rounded-xl" src="../assets/headshot.jpeg" alt="">
      <div class="flex flex-col items-center mt-12">
        <button class="flex items-center py-2 px-4 bg-sky-500 rounded text-white text-center font-semibold mb-4 w-44" href=""><i class="fa-solid fa-circle-arrow-right"></i><span class="ml-2 mt-1">View Portfolio</span></button>
        <button class="flex items-center py-2 px-4 bg-sky-500 rounded text-white text-center font-semibold w-44" href=""><i class="fa-solid fa-file-lines"></i><span class="ml-2 mt-1">View Resume</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>

<style scoped></style>
