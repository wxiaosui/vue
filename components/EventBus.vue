<script>
/**
 * 使用场景：兄弟组件传值
 * 创建一个中央时间总线EventBus
 * 兄弟组件通过$emit触发自定义事件，$emit第二个参数为传递的数值
 * 另一个兄弟组件通过$on监听自定义事件
*/
</script>

Bus.js
<script>
// 创建一个中央时间总线类
class Bus {
  constructor() {
    this.callbacks = {};   // 存放事件的名字
  }
  // 监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。
  // vm.$on( event, callback )
  $on(name, fn) {
    this.callbacks[name] = this.callbacks[name] || [];
    this.callbacks[name].push(fn);
  }
  // 触发当前实例上的事件。附加参数都会传给监听器回调。
  $emit(name, args) {
    if (this.callbacks[name]) {
      this.callbacks[name].forEach((cb) => cb(args));
    }
  }
}

// main.js
Vue.prototype.$bus = new Bus() // 将$bus挂载到vue实例的原型上
// 另一种方式
Vue.prototype.$bus = new Vue() // Vue已经实现了Bus的功能
</script>

Children1.vue
<template>
  <div></div>
</template>
<script>
export default {
  mounted() {
    this.$bus.$emit('foo', 23333)
  }
}
</script>

Children2.vue
<template>
  <!-- div -->
</template>
<script>
export default {
  mounted() {
    this.$bud.$on('foo', this.foo)
  },
  methods: {
    foo(val) {
      console.log(val)
    }
  }
}
</script>