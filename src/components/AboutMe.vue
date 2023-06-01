<template>
  <div class="about-me grid grid-cols-3 gap-8 p-16 bg-neutral-100">
    <div class="col-span-2 text-justify">
      <h1 class="text-3xl font-bold">Madison Mitchell</h1>
      <h2 class="text-xl font-medium text-sky-500 py-4">Software Developer</h2>
      <p class="">As an avid reader, particularly fantasy novels, and I enjoy working on side projects 
        to continue to challenge myself as well as create handy products around the house, like a smart mirror that tells the time, 
        current events and weather updates. And when I'm not indoors, my husband and I can be found around the national parks on our 
        Honda Groms taking photos.</p>

        <div class="flex mt-4">
          <button class="flex items-center py-2 px-4 bg-sky-500 rounded text-white text-center font-semibold mr-2" href=""><i class="fa-solid fa-circle-arrow-right"></i><span class="ml-2 mt-1">View Portfolio</span></button>
          <button class="flex items-center py-2 px-4 bg-sky-500 rounded text-white text-center font-semibold ml-2" href=""><i class="fa-solid fa-file-lines"></i><span class="ml-2 mt-1">View Resume</span></button>
        </div>
    </div>

    <div class="col-end-4">
      <img src="../assets/headshot.jpeg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>

<style scoped></style>
