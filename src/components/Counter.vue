<template>
  <button role="increment" @click="count += 1" />
  <button role="submit" @click="$emit('submit', count)" />
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>
