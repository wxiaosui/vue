<script>
/**
 * 适用场景: 复杂关系的组件数据传递
 * Vuex 作用相当于一个用来存储共享变量的容器
 *
 * state     用来存放共享变量的地方
 * getter    可以增加一个getter派生状态，(相当于store中的计算属性），用来获得共享变量的值
 * mutations 用来存放修改state的方法。
 * actions   也是用来存放修改state的方法，不过action是在mutations的基础上进行。常用来做一些异步操作
*/
</script>

<script>
/**
 * 父子关系的组件数据传递选择 props  与 $emit进行传递，也可选择 ref
 * 兄弟关系的组件数据传递可选择 $bus，其次可以选择$parent进行传递
 * 祖先与后代组件数据传递可选择 attrs 与 listeners 或者 Provide 与 Inject
 * 复杂关系的组件数据传递可以通过 vuex 存放共享的变量
*/
</script>