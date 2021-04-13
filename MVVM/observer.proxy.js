// 发布者
function Subject() {
  this.observers = [];
  this.attach = function (callback) {
    this.observers.push(callback);
  };
  this.notify = function (value) {
    this.observers.forEach(callback => callback(value));
  };
}

// 订阅者
function Observer(queue, key, callback) {
  queue[key].attach(callback);
}

// ====

// 数据拦截器 - 代理方式
function ProxyWatcher(data, queue) {
  return new Proxy(data, {
    get: (target, key) => target[key],
    set(target, key, value) {
      target[key] = value;

      // 通知此值的所有订阅者，数据发生了更新
      queue[key].notify(value);
    }
  });
}

// ====

// 消息队列
const messageQueue = {};

// 数据
const myData = ProxyWatcher({
  value: ""
}, messageQueue);

// 将每个数据属性都添加到观察者的消息队列中
for (let key in myData) {
  messageQueue[key] = new Subject();
}

// 订阅 value 值的变化
Observer(messageQueue, "value", value => {
  console.warn("value updated:", value);
});

// 更新数据
myData.value = "hello world.";
myData.value = 100;
myData.value = true;