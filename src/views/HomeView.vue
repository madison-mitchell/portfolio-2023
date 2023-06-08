<template>
  <div>
    <AboutMe />
    <Skills />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from '../components/AboutMe.vue';
import Skills from '../components/Skills.vue';
import Contact from '../components/Contact.vue';

export default {
  name: 'HomeView',
  components: {
    AboutMe,
    Skills,
    Contact
  },
};
</script>

<style scoped></style>
