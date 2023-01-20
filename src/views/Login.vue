<script>
import axios from 'axios'

export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      user: undefined,
      error: ''
    }
  },

  methods: {
    async handleAuth() {
      try {
        const response = await axios.post('/login', this.formData )
        this.user = response.data
      } catch (e) {
        this.error = e.response.data.error
      }
    }
  }
}
</script>

<template>
  <h1 v-if="user">
    Hello, {{ user.name }}
  </h1>
  <form @submit.prevent="handleAuth">
    <input v-model="formData.username" role="username" />
    <input v-model="formData.password" role="password" />
    <button>Click here to sign in</button>
  </form>
  <span v-if="error">{{ error }}</span>
</template>
