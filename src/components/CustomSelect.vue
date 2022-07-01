<script setup>
import { ref } from "vue";

const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
  initialValue: {
    type: Number,
  }
});
const emit = defineEmits([ 'change' ])
const selectedValue = ref(props.initialValue);
</script>

<template>
  <select class="form-select"
          v-model="selectedValue"
          @change="emit('change',$event.target.value)">

    <option v-for="option in options"
            :value="option.id"
            :key="option.id">{{ option.title }}</option>

  </select>
</template>