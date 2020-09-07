function mergeSort(arr) {
    devide(arr, 0, arr.length-1)
    return arr
}

function devide(arr, left, right) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2)
        devide(arr, left, mid)
        devide(arr, mid+1, right)
        merge(arr, left, mid, right)
    }
}

function merge (arr, left, mid, right) {
    let i = left
    let j = mid + 1
    let res = []
    let t = 0
    
    while (i <= mid && j <= right) {
        if (arr[i] < arr[j]) {
            res[t++] = arr[i++]
        } else {
            res[t++] = arr[j++]
        }
    }
    console.log(1, res)
    while (i <= mid) {
        res[t++] = arr[i++]
    }
    while (j <= right) {
        res[t++] = arr[j++]
    }
    console.log(2, res)
    // console.log(res)
    // console.log('-------------')
    t = 0
    while(left <= right) {
        arr[left++] = res[t++]
    }
    console.log(3, res)
    console.log('arr', arr)
    console.log('---------------------')
    return res
}

console.log(mergeSort([3,1,5,6,12,3,5,234,41,41,56,75,1,3,5,6,3,21,31,33]))
