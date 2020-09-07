let arr = [1, 6, 4, 5, 10, 7, 3]
function heapSort (arr) {
    let binaryTree = {
        value: arr.shift()
    }
    
    // 从右向左寻找非叶子节点的堆头
    for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
        initHeap(arr, i)
    }
}

function initHeap (arr, i) {
    if (arr[i] < arr[i * 2]) {
        exchange(arr, i, i*2)
    }
    if (arr[i*2 + 1] && arr[i] < arr[i * 2 + 1]) {
        exchange(arr, i, i*2 + 1)
    }
    return arr
}

function exchange (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}