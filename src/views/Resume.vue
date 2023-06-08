<template>
  <div class="container flex flex-col">
    <header class="flex flex-col w-full bg-neutral-50 items-center justify-center">
      <h1 class="text-3xl font-bold mt-10">Online Resume</h1>
      <button class="bg-sky-500 text-white font-bold mt-4 mb-10 w-fit px-4 py-2 rounded"><i
          class="fa-solid fa-file-lines pr-2"></i>Download PDF Version</button>
    </header>
    <div class="resume-container bg-white">
      <div class="resume bg-white drop-shadow-lg mx-auto my-20 p-20">
        <h1 class="text-4xl text-left font-bold text-sky-500">MADISON MITCHELL</h1>
        <h5 class="text-md text-left">Full Stack Software Engineer | Salesforce Developer</h5>
      </div>
    </div>
  </div>
</template>


<script>
export default {

}
</script>

<style scoped>
.resume {
  max-width: 1020px;
  max-height: 1320px;
}
</style>