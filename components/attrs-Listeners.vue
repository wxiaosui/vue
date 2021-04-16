<script>
/**
 * 适用场景：祖先传递数据给子孙
 * 设置批量向下传属性 $attrs 和 $listeners
 * 包含了父级作用域中不作为 prop 被识别 (且获取) 的特性绑定 ( class 和 style 除外)。
 * 可以通过 v-bind="$attrs" 传⼊内部组件
*/
</script>
-----
childen.vue
<template>
  <div>
    <!-- 并未在props中声明foo -->
    <p>{{$attrs.foo}}</p>
  </div>
</template>
<script>
export default {

}
</script>

Parent.vue
<template lang="">
  <HelloWorld foo="foo"/>
</template>
<script>
export default {

}
</script>
------
<template lang="">
  <!-- 给Grandson隔代传值，communication/index.vue -->
  <!-- Child2做展开 -->
  <Grandson v-bind="$attrs" v-on="$listeners"></Grandson>
  <!-- Grandson使⽤ -->
  <div @click="$emit('some-event', 'msg from grandson')">
    {{msg}}
  </div>
</template>