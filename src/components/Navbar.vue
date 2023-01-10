<template>
  <button v-if="authenticated">Logout</button>
  <button v-if="!authenticated">Login</button>
</template>

<script>
export default {
  props: {
    authenticated: {
      type: Boolean,
      default: false
    }
  }
}
</script>
