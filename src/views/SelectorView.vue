<template>
  <div>
    <Selector 
      placeholder="please select framework"
      @setItemValue="setItemValue"
      :data="menuData"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Selector from '@/libs/components/Selector/index.vue'
import menuData from '@/data/selector'

export default {
  name: 'SelectorView',
  components: {
    Selector
  },
  setup() {
    const setItemValue = (value) => {
      // console.log(value)
    }
    return {
      menuData,
      setItemValue,
    }
  }
}
</script>
