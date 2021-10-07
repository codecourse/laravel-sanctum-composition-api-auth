<template>
  <div v-if="authenticated">
      Hey {{ user.name }}. <button v-on:click="logout">Logout</button>
  </div>
  <form v-on:submit.prevent="login(form)">
      <div>
          <label for="email">Email</label>
          <input type="text" name="email" id="email" v-model="form.email">

          <div v-if="errors.email">
              {{ errors.email[0] }}
          </div>
      </div>

      <div>
          <label for="password">Password</label>
          <input type="password" name="password" id="password" v-model="form.password">

          <div v-if="errors.password">
              {{ errors.password[0] }}
          </div>
      </div>

      <div>
          <button type="submit">Login</button>
      </div>
  </form>
</template>

<script setup>
    import { reactive } from 'vue'
    import useAuth from './auth/useAuth'

    const { login, getAuthenticated: authenticated, getUser: user, errors, logout } = useAuth()

    const form = reactive({
        email: '',
        password: ''
    })
</script>
