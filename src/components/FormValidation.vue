<script>
import { reactive, computed, ref } from 'vue'
import { patientForm, isFormValid } from '@/utils/form.js'
export default {
  emits: ['submit'],
  setup(props, { emit }) {
    const form = reactive({
      name: '',
      weight: {
        value: '',
        units: 'kg'
      }
    })
    const validatedForm = computed(() => {
      return patientForm(form)
    })
    const submit = () => {
      emit('submit', { patient: form })
    }
    const valid = computed(() => isFormValid(validatedForm.value))
    return {
      form,
      validatedForm,
      submit,
      valid,
    }
  }
}
</script>

<template>
  <div class="form-wrapper">
    <h3>Patient Data</h3>
    <form @submit.prevent="submit">
      <div class="field">
        <div v-if="!validatedForm.name.valid" class="error" role="error">
          {{ validatedForm.name.message }}
        </div>
        <label for="name">Name</label>
        <input id="name" name="name" role="name" v-model="form.name" />
      </div>
      <div class="field">
        <div v-if="!validatedForm.weight.valid" class="error" role="error">
          {{ validatedForm.weight.message }}
        </div>
        <label for="weight">Weight</label>
        <input id="weight" role="weight" name="weight" type="number" v-model.number="form.weight.value" />
        <select id="weight-units" role="weight-units" v-model="form.weight.units">
          <option value="kg">kg</option>
          <option value="lb">lb</option>
        </select>
      </div>
      <div class="field">
        <button role="submit" :disabled="!valid">Submit</button>
      </div>
    </form>
    <div>
<pre>
Patient Data
{{ form }}
</pre>

<pre>
Form State
{{ validatedForm }}
</pre>
    </div>
  </div>
</template>

<style>
.field > label {
  display: inline-block;
  width: 50px;
  margin: 0 0 20px 0;
}
.field > input {
  display: inline-block;
  margin: 2px;
}
.error {
  color: red;
}
pre {
  display: flex;
  justify-content: flex-start;
}
.form-wrapper {
}
</style>
