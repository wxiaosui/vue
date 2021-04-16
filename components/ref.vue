Father.vue
<template>
  <Children ref="foo" />
</template>
<script>
export default {
  /**
   * 父组件在使用子组件的时候设置ref
   * 父组件通过设置子组件ref来获取数据
  */
  mounted() {
    this.$refs.foo  // 获取子组件实例，通过子组件实例我们就能拿到对应的数据
  }
}
</script>