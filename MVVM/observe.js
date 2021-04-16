/**
 * 发布者
 */
function Subject() {

  // 单个发布者的所有订阅者
  this.observers = [];

  // 添加一个订阅者
  this.attach = function (callback) {
    this.observers.push(callback);
  };

  // 通知所有的订阅者
  this.notify = function (value) {
    this.observers.forEach(callback => callback(value));
  };
}

/**
 * 订阅者
 */
function Observer(queue, key, callback) {
  console.log('observer')
  queue[key].attach(callback);
}

// 消息队列
const messageQueue = {};

// 数据
const myData = {
  value: ""
};

// 将每个数据属性添加可订阅的入口
for (let key in myData) {
  messageQueue[key] = new Subject();
}

// 订阅 value 值的变化
Observer(messageQueue, "value", value => {
  console.warn("value updated:", value);
});

// ====

// 手动更新数据
function setData(data, key, value) {
  data[key] = value;

  // 通知此值的所有订阅者，数据发生了更新
  messageQueue[key].notify(value);
}

// ====

// 更新数据
setData(myData, "value", "hello world.");
setData(myData, "value", 100);
setData(myData, "value", true);