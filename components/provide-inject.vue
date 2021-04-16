<script>
/**
 * provide 与 inject
 * 在祖先组件定义provide属性，返回传递的值
 * 在后代组件通过inject接收组件传递过来的值
*/
</script>

祖先组件
<script>
export default {
  provide() {
    return {
      foo: 'foo'
    }
  }
}
</script>

后代组件
<script>
export default {
  inject: ['foo'] // 获取到祖先组件传递过来的值
}
</script>