import { init, h } from 'snabbdom';
import style from 'snabbdom/modules/style'
import eventlisteners from 'snabbdom/modules/eventlisteners'

const patch = init([
  style,
  eventlisteners
])

let vnode = h('div', {
  style: {
    backgroundColor: 'red'
  },
  on: {
    click: () => {
      console.log('点我了!')
    }
  }
}, [
  h('h1', 'Hello Snabbdom'),
  h('p', '这是一个p标签')
])


let app = document.querySelector('#app');

patch(app, vnode)