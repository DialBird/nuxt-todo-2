<template>
  <div class="my-10 mx-auto" style="width: 600px">
    <div class="bg-white shadow-md w-full p-4 rounded">
      <h2 class="text-center font-bold text-xl mb-4">Form</h2>
      <form @submit.prevent="onSubmit">
        <div class="mb-4">
          <label for="email" class="block text-sm mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            class="appearance-none border rounded py-2 px-3 w-full"
            v-model="form.email"
          />
        </div>
        <div class="flex flex-col md:flex-row space-x-0 md:space-x-4">
          <div class="mb-4 flex-1">
            <label for="firstName" class="block text-sm mb-2">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="firstName"
              class="appearance-none border rounded py-2 px-3 w-full"
              v-model="form.firstName"
            />
          </div>
          <div class="mb-4 flex-1">
            <label for="lastName" class="block text-sm mb-2">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="lastName"
              class="appearance-none border rounded py-2 px-3 w-full"
              v-model="form.lastName"
            />
          </div>
        </div>
        <div class="mb-4">
          <label for="select" class="block text-sm mb-2">Select</label>
          <select
            id="select"
            class="appearance-none border rounded py-2 px-3 w-full"
            v-model="form.select"
          >
            <option value="aaa">aaa</option>
            <option value="bbb">bbb</option>
          </select>
        </div>
        <hr class="mb-4" />
        <ul>
          <li v-for="todo in form.todos" :key="todo.itle">
            <div class="mb-4 flex-1">
              <input
                type="text"
                placeholder="title"
                class="appearance-none border rounded py-2 px-3 w-full"
                v-model="todo.title"
              />
            </div>
          </li>
        </ul>
        <button
          type="button"
          @click="addTodo"
          class="my-4 py-2 px-4 bg-blue-600 rounded text-white font-bold"
        >
          add
        </button>
        <div class="text-center">
          <button
            type="submit"
            class="my-4 py-2 px-4 bg-blue-600 rounded text-white font-bold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from '@vue/composition-api'
import { AdjustmentsIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: {
    AdjustmentsIcon,
  },
  setup() {
    const form = reactive({
      email: '',
      firstName: '',
      lastName: '',
      select: '',
      todos: [{ title: 'ok' }],
    })

    const addTodo = () => {
      form.todos.push({ title: '' })
    }

    const onSubmit = () => {
      console.log('as', form)
    }

    return { addTodo, form, onSubmit }
  },
})
</script>

<style>
</style>
