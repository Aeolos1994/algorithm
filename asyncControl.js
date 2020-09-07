// 假装有个 1s 返回的请求
let dbData = 0
function fakeRequest () {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve('response:' + dbData++)
        }, 1000)
    })
}

class AsyncControl {
    constructor (limit) {
        this.limit = limit || 5
        this.pendingQueue = []
        this.activeRequest = 0
    }

    acRequest (req, handler, ...params) {
        if (this.activeRequest >= this.limit) {
            this.pendingQueue.push({req, handler, params})
            console.warn(`请求队列已达到最大限制，请求进入等待队列，当前等待请求数量：${this.pendingQueue.length}`)
        } else {
            this.activeRequest++
            req(...params).then(res => {
                this.activeRequest--
                handler(res)
                if (this.pendingQueue.length) {
                    let pendingRequest = this.pendingQueue.shift()
                    console.warn(`执行等待队列中的请求，当前等待请求数量：${this.pendingQueue.length}`)
                    this.acRequest(pendingRequest.req, pendingRequest.handler, pendingRequest.params)
                }
            })
        }
    }
}

let ac = new AsyncControl(5)

for(let i = 0; i < 20; i++) {
    ac.acRequest(fakeRequest, (res) => {
        console.log(res)
    }) 
}