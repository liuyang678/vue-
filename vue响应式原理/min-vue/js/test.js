function reactive(obj) {
  let deps = {};
  return new Proxy(obj, {
    get: function (target, key) {
      if( Dep ) {
        deps[key] = deps[key] || [];
        deps[key].push(Dep);
      }
      return Reflect.get(target, key);
    },
    set: function (target, key, value) {
      Reflect.set(target, key, value);
      if( deps[key] ) {
        deps[key].forEach(dep => {
          dep()
        })
      }
    }
  })
}
var Dep = null;
function watch(effect) {
  Dep = function() {
    effect()
  }
  effect();
  Dep = null;
}

const state =  reactive({
  foo: 100,
  bar: 200
})

watch(() => {
  console.log("foo changed: ", state.foo)
})

watch(() => {
  console.log("bar changed: ", state.bar)
})

state.foo++;
state.bar++;
