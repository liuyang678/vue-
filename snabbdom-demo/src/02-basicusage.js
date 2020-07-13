import { h, init } from 'snabbdom';

let patch = init([])

let vnode = h('div#container', [
  h('h1', 'Hello Snabbdom'),
  h('p', '这是一个p标签')
]);

let app = document.querySelector('#app');

let oldValue = patch(app, vnode);

setTimeout(() => {
  vnode = h('div#container', [
    h('h1', 'Hello world'),
    h('p', 'hellp P')
  ]);
  patch(oldValue, vnode)

  // patch(oldValue, h('!'))  //清空节点

}, 2000)