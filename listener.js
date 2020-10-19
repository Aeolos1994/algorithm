/*
已知对象A = {name: 'sfd', getName: function(){console.log(this.name)}},
现要求⽤不同⽅式对A进⾏改造实现A.name发⽣变化时⽴即执⾏A.getName
*/

let a = {
  name: 'sfd',
  getName: function () {
    console.log(this.name)
  }
}

// 第一种方法 Proxy
// a = new Proxy (a, {
//   set (obj, prop, value) {
//     obj[prop] = value
//     if (prop === 'name') {
//       obj.getName()
//     }
//     return true
//   }
// })

// 第二种方法 defineProperty
// Object.defineProperty(a, 'name', {
//   set(value) {
//     a._name = value
//     a.getName()
//   },
//   get () {
//     return a._name
//   }
// })




a.name = 'asd'