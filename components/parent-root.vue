<script>
export default {
  /**
   * 通过共同祖辈$parent或者$root搭建通信侨联
  */
  mounted() {
    // 兄弟组件
    this.$parent.on('add', this.add)
    // 另一个兄弟组件
    this.$parent.emit('add')
  }
}
</script>