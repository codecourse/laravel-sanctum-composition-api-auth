<template>
  <div v-if="authenticated">
      Hey {{ user.name }}. <button>Logout</button>
  </div>
  <form v-on:submit.prevent="login(form)">
      <div>
          <label for="email">Email</label>
          <input type="text" name="email" id="email" v-model="form.email">
      </div>

      <div>
          <label for="password">Password</label>
          <input type="password" name="password" id="password" v-model="form.password">
      </div>

      <div>
          <button type="submit">Login</button>
      </div>
  </form>
</template>

<script setup>
    import { reactive } from 'vue'
    import useAuth from './auth/useAuth'

    const { login, getAuthenticated: authenticated, getUser: user } = useAuth()

    const form = reactive({
        email: '',
        password: ''
    })
</script>
