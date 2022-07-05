<template>
  <div class="selector" id="selector" v-focus>
    <SelectorInput 
      :placeholder="placeholder"
      :value="inputValue"
      @searchOptions="searchOptions"
    />
    <SelectorMenu 
      :data="data"
      @setItemValue="setItemValue"
      :searchValue="searchValue"
    />
  </div>
</template>

<script>
import SelectorInput from './Input.vue'
import SelectorMenu from './Menu.vue'

import focus from '../../directives/focus'

// import menuData from '@/data/selector'

import { reactive, toRefs } from 'vue'

export default {
  name: 'Selector',
  directives: {
    focus
  },
  props: {
    placeholder: String,
    data: Array,
  },
  components: {
    SelectorInput,
    SelectorMenu,
  },
  setup(props, ctx) {
    let state = reactive({
      inputValue: '',
      searchValue: '',
    })
    // 
    const setItemValue = (item) => {
      state.inputValue = item.text
      ctx.emit('setItemValue', item.value)
    }
    const searchOptions = (value) => {
      state.searchValue = value
      ctx.emit('searchOptions', value)
    }
    // 
    return {
      ...toRefs(state),
      // 
      setItemValue,
      searchOptions
    }
  }
}
</script>

<style scoped>
#selecotr {
  /* position: relative; */
  /* width: 300px; */
  /* border: 1px solid red; */
}
</style>
