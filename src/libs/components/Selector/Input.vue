<template>
  <div class="selector-input">
    <label class="placeholder"
    > </label>
    <input type="text" class="input tao-text-input"
      :value="value"
      ref="inputValue"
      @input="searchOptions($event)"
      @focus="searchOptions($event)"
      @blur="setValue(value)"
      placeholder=" please select"
    >
    <span class="iconfont icon-arrow-down">  </span>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'

export default {
  name: 'SelectorInput',
  props: {
    // placeholder: {
    //   type: String,
    //   default: 'please select'
    // },
    value: String,
  },
  setup(props, ctx) {
    const instance = getCurrentInstance()

    const searchOptions = (e) => {
      // console.log(e.target.value)
      ctx.emit('searchOptions', e.target.value)
    }
    const setValue = (value) => {
      const _input = instance.refs.inputValue
      if(_input.value.length > 0) {
        _input.value = value
      }
    }
    // 
    return {
      searchOptions,
      setValue,
    }
  }
}
</script>

<style scoped>
@import url('@/libs/tao.css');

input {
  width: 300px; 
  height: 40px; 
  font-size:25px;
}
</style>