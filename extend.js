function ClassA (params) {
    this.params = 'params'
}
ClassA.prototype.log = function () {
    console.log(this.params)
}

function ClassB (params) {
    this.params = params
    this.addOne = params + '1'
}

ClassB.prototype = new ClassA()
ClassB.prototype.construct = ClassB

let b = new ClassB(123)
console.log(Object.prototype.toString.call(b))





