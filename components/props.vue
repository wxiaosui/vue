<template>
  <div :name="name"></div>
</template>
<script>
export default {
  data() {
    return {
      name: 'name'
    }
  },
  props: {
    name: {
      type: String, // 接收数据类型
      defaule: 'name', // 默认值
      require: true // 必须转递
    },
  }
}
</script>