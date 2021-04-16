<script>
export default {
  /**
   * 子组件传递数据给父组件
   * 子组件通过 $emit触发 自定义事件 $emit('EventName',val)
   * 父组件绑定监听器获取到子组件传递过来的参数
  */
  mounted() {
    this.$emit('add', 10)
  }
}
</script>

Father.vue

<template>
  <Children @add="cartAdd($event)" />
</template>
<script>
export default {
  methed: {
    cartAdd($event)
  }
}
</script>