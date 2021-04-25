<template>
  <div class="font-sans">
    <div
      class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100"
    >
      <div class="relative sm:max-w-sm w-full">
        <div
          class="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"
        ></div>
        <div
          class="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"
        ></div>
        <div
          class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md"
        >
          <label
            for=""
            class="block mt-3 text-sm text-gray-700 text-center font-semibold"
          >
            SIGN UP
          </label>
          <form method="#" action="#" class="mt-10">
            <div>
              <input
                type="email"
                placeholder="Email"
                v-model="email"
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>

            <div class="mt-7">
              <input
                type="password"
                placeholder="Password"
                v-model="password"
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>
            <div class="mt-7">
              <button
                class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                @click.prevent="handleSubmit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  useContext,
  useRouter,
} from '@nuxtjs/composition-api'

export default defineComponent({
  middleware: 'beforeAuth',
  setup() {
    const { $supabase } = useContext()
    const router = useRouter()
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      const { user, session, error } = await $supabase.auth.signUp({
        email: email.value,
        password: password.value,
      })

      if (error) {
        console.error('as', error.message)
        return
      }

      router.go(0)
    }

    return {
      email,
      handleSubmit,
      password,
    }
  },
})
</script>

<style>
</style>
