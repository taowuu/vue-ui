<template>
  <input type="text"
    class="edit-input"
    :value="value"
    @input="onInput"
    @blur="onBlur"
    @click="onClick"
  >
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  setValue: {
    type: Function,
    default: () => {}
  }
})
const inputValue = ref(props.value)
// console.log(inputValue)

// 
const onInput = (e) => {
  inputValue.value = e.target.value.trim()
}
const onClick = (e) => {
  e.stopPropagation()
}
const onBlur = () => {
  props.setValue(inputValue.value)
}
</script>

<style>
  .edit-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #1ba1e2;
    text-align: center;
    outline: none;
    font-size: inherit;
  }
</style>