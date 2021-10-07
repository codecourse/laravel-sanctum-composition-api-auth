<template>
  <form v-on:submit.prevent="login">
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
    import axios from 'axios'
    import { reactive } from 'vue'

    const form = reactive({
        email: '',
        password: ''
    })

    const login = async () => {
        await axios.get('/sanctum/csrf-cookie')

        await axios.post('/login', form)
    }
</script>
