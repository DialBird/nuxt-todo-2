import { Middleware } from '@nuxt/types'

const auth: Middleware = ({ $supabase, redirect }) => {
  if (!Boolean($supabase.auth.session())) {
    return redirect('/signin')
  }
}

export default auth
