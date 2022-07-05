<template>
  <div class="selector-menu tao-frame">
    <template v-if="searchData.length > 0">
      <div
        class="menu-item "
        v-for="(item, index) of searchData"
        :key="index"
        @click="setItemValue(item)"
      > {{item.text}} <hr width=60%> </div>
      
    </template>
    <NoDataTip v-else />
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';

import NoDataTip from './NoDataTip.vue'

export default {
  name: 'SelectorMenu',
  components: {
    NoDataTip,
  },
  props: {
    searchValue: String,
    data: {
      type: Array,
      default() {
        return[
          {
            id: 1,
            value: '1',
            text: 'option 1'
          },
          {
            id: 2,
            value: '2',
            text: 'option 2'
          },
          {
            id: 3,
            value: '3',
            text: 'option 3'
          },
        ]
      }
    }
  },
  setup(props, ctx) {
    const searchData = ref([])
    // 
    onMounted(() => {
      searchData.value = props.data
    })
    watch(() => {
      return props.searchValue
    }, (value) => {
      filterData(value)
    })
    // 
    const filterData = (value) => {
      searchData.value = props.data.filter((item) => {
        return item.text.toLowerCase().includes(props.searchValue.toLowerCase())
      })
    }
    const setItemValue = (item) => {
      // console.log(1)
      ctx.emit('setItemValue', item)
    }
    // 
    return {
      setItemValue,
      searchData,
    }
  }
}
</script>

<style>
@import url('@/libs/tao.css');

.selector-menu {
  display: none;
  width: 300px;
  font-size: 30px;
  /* border: 1px solid red; */
  text-align: center;
  color: rgba(0,0,0,0.7);
  margin: 0 auto;
  position: relative;
  left: 76px;
  margin-top: 20px;
}
.menu-item:hover {
  background-color: #f8f9fa;
}
</style>