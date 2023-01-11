<script>
export function submitValidator(count) {
  if (typeof count === 'string' || isNaN (count)) {
    throw Error(`
      Count should be a number.
      Got: ${count}
    `)
  }
  return true
}
</script>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const emit = defineEmits({
  submit: submitValidator
})

const increment = () => {
  count.value += 1
}
const submit = () => {
  emit('submit', count.value)
}
</script>

<template>
  <button role="increment" @click="increment" />
  <button role="submit" @click="submit" />
</template>

