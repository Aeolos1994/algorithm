// 单向链表实现队列
class SLLQueue {
  constructor(queue) {
    this.queue = {
      virtualHead: {
        next: null
      },
      virtualTail: {
        prev: null
      }
    }
    this.queue.virtualHead.next = this.queue.virtualTail
    this.queue.virtualTail.prev = this.queue.virtualHead
    if (queue) {
      queue.forEach(val => {
        this.push(val)
      })
    }
  }
  push (val) {
    let node = {
      val: val,
      next: null,
      prev: null
    }
    let headNext = this.queue.virtualHead.next
    this.queue.virtualHead.next = node
    headNext.prev = node
    node.prev = this.queue.virtualHead
    node.next = headNext
    
  }
  pop () {
    let tailPrev = this.queue.virtualTail.prev
    if (this.queue.virtualTail.next === this.queue.virtualHead) {
      return void(0)
    } else {
      this.queue.virtualTail.prev = tailPrev.prev
      tailPrev.prev.next = this.queue.virtualTail
      return tailPrev.val
    }
  }
}

let ssl = new SLLQueue()
ssl.push(1)
ssl.push(2)
console.log(ssl.pop())