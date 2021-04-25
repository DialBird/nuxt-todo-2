<template>
  <header class="bg-teal-400">
    <nav class="flex justify-between w-full bg-purple-500 text-white p-4">
      <nuxt-link to="/"
        ><span class="font-semibold text-xl tracking-tight"
          >TODO</span
        ></nuxt-link
      >
      <div class="md:items-center md:w-auto flex">
        <div class="md:flex hidden">
          <nuxt-link class="block md:text-white mr-4" to="/about"
            >About</nuxt-link
          >
          <nuxt-link class="block md:text-white mr-4" to="/blog"
            >Blog</nuxt-link
          >
          <nuxt-link class="block md:text-white mr-4" to="/contact"
            >Contact</nuxt-link
          >
        </div>
        <div class="flex text-sm">
          <nuxt-link
            class="p-2 ml-2 text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:opacity-70"
            to="/signin"
            >Login</nuxt-link
          >
          <nuxt-link
            class="p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:opacity-70"
            to="/signup"
            >Sign up</nuxt-link
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Header',
  setup() {},
})
</script>
