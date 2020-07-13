import { h, init } from 'snabbdom';

const patch = init([]);

let vnode = h('div#container.cls', 'hello world');

let app = document.querySelector('#app');

let oldVnode = patch(app, vnode);

console.log(oldVnode)

vnode = h('div', 'hello snabbdom');

patch(oldVnode, vnode)