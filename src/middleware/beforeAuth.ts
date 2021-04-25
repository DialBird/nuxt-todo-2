import { Middleware } from '@nuxt/types'

const beforeAuth: Middleware = ({ $supabase, redirect }) => {
  if (Boolean($supabase.auth.session())) {
    return redirect('/')
  }
}

export default beforeAuth
