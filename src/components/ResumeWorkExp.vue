<template>
    <div :class="proj" v-for="proj in projects" :key="proj">
        <div :class="'header-' + proj" class="flex justify-between mt-4">
            <a class="hover:text-sky-700" :href="proj.url" target="_blank">
                <h3 class="text-left tracking-wide text-xl font-black">{{ proj.title }}</h3>
            </a>
            <h4 class="flex flex-col justify-center text-neutral-400 text-sm">{{ proj.date }}</h4>
        </div>
        <p :class="'p-' + project" class="text-justify text-md pl-6" v-for="paragraph in proj.paragraph" :key="paragraph">{{ paragraph }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            projects: state => state.projects,
        }),
    },
}
</script>

<style>

</style>