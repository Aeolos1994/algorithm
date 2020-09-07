function quickSort(arr) {
    if (arr.length <= 1){
      return arr
    }
    let base = arr[~~(arr.length / 2)]
    let left = []
    let right = []
    let equal = []
    arr.forEach(num => {
        if (num < base) {
            left.push(num)
        } else if(num === base) {
            equal.push(num)
        } else {
            right.push(num)
        }
    })
    console.log(left)
    console.log(equal)
    console.log(right)
    console.log('--------------------')
    return [...quickSort(left), ...equal, ...quickSort(right)]
}
console.log(quickSort([3,1,5,6,12,3,5,234,41,41,56,75,1,3,5,6,3,21,31,33]))