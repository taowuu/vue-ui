<template>
  <div>
    <EditableTable 
      :data="tableData"
      @submit="editData"
    />
  </div>
</template>

<script setup>
  import EditableTable from '@/libs/components/EditableTable/index.vue'
  import { defineComponent, ref } from 'vue'

  const components = defineComponent({
    EditableTable,
  })
  const tableData = ref({
      tHead: [
        {
          key: 'id',
          text: 'stuno',
          editable: false,
        },
        {
          key: 'name',
          text: 'name',
          editable: false,
        },
        {
          key: 'age',
          text: 'age',
          editable: false,
        },
        {
          key: 'chinese',
          text: 'chinese',
          editable: true,
        },
        {
          key: 'math',
          text: 'math',
          editable: true,
        },
        {
          key: 'english',
          text: 'english',
          editable: true,
        },
      ],
      tBody: [
        {
          id: 1,
          name: 'tao1',
          age: 16,
          chinese: 150,
          math: 100,
          english: 100
        },
        {
          id: 2,
          name: 'tao2',
          age: 17,
          chinese: 90,
          math: 150,
          english: 110
        },
        {
          id: 3,
          name: 'tao3',
          age: 18,
          chinese: 120,
          math: 90,
          english: 150
        },

      ]
    })
  const editData = ({ index, key, value, text }, removeEditInput) => {
    // console.log({ index, key, value, text })
      if(tableData.value.tBody[index][key] !== value) {
        const cfm = window.confirm(`
          您确定将数据下标为 [${ index }]项
          [${ text }] 字段的内容修改为 [${ value }] 吗
        `)
        if(cfm) {
          tableData.value.tBody = tableData.value.tBody.map((item, idx) => {
            index === idx && (item[key] = value)
            return item
          })
        } else {
          removeEditInput()
        }
      }
  }    

</script>
