<template>
  <table border="1" class="my-table">
    <thead>
      <tr>
        <th
          v-for="info of tHead"
          :key="info.key"
        >{{ info.text }}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) of tBody"
        :key="item.id"
      >
        <td
          v-for="(value, key) in item"
          :key="key"
          @click.stop="showEditInput($event, key, index)"
        >{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
  import EditInput from './EditInput.vue'
  // 
  import { createApp, reactive, toRefs } from 'vue'
  // 
  const props = defineProps({
    data: {
      type: Object,
      default: () => ({
        tHead: [],
        tBody: [],
      })
    }
  })
  const emit = defineEmits(['submit'])
  const { tHead, tBody } = toRefs(props.data)
  let editInputApp = null
  const state = reactive({
    key: '',
    value: '',
    index: -1,
    text: '',
  })
  // 
  function showEditInput (event, key, index) {
    // console.log(event, key, index)  
    editInputApp && removeEditInputApp(editInputApp)
    if(!checkEditable(key)) return
    
    const target = event.target
    const oFrag = document.createDocumentFragment()
    editInputApp = createApp(EditInput, {
      value: target.textContent,
      setValue
    })
    if(editInputApp) {
      editInputApp.mount(oFrag)
      target.appendChild(oFrag)
      target.querySelector('.edit-input').select()
    }
    setData({ index, key, text: findText(key) })
  }
  function setData({index, key, text, value = ''}) {
    state.key = key
    state.index = index
    state.value = value
    state.text = text
  }
  function setValue(value) {
    state.value = value
    // console.log('setValue',{...state})
    // console.log(state)
    emit('submit', { ...state })
  }
  function removeEditInputApp() {
    editInputApp && editInputApp.unmount()
    setData({
      key: '',
      value: '',
      index: -1,
      text: '',
    })
  }
  function checkEditable(key) {
    const { editable } = tHead.value.find(item => item.key === key)
    return editable
  }
  function findText(key) {
    const text = tHead.value.find(item => item.key === key)
    // console.log(text)
    return text
  }
  // 
  window.addEventListener('click', removeEditInputApp, false)
  // 
</script>

<style>
  .my-table {
    border-collapse: collapse;
    border: 1px solid lightgray;
    /* border-radius: 10px; */
    font-size: 20px;
    position: relative;
    left: 80px;
  }
  td {
    height: 60px;
    width: 60px;
    position: relative;
  }
  th {
    padding: 8px;
    /* text-decoration: none; */
    /* color: gray; */
    /* font-weight: lighter; */
  }
</style>
