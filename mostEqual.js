/*
   设计一个方法，输入一个无需数据[1, 65, 4, 32, 95, 33, 9, 3]
   输出3个数组，并使3个数组的和尽可能相近
*/

//  Array的坑： Array(n)返回值 为[empty, empty, ...]  无法直接循环遍历
//  Array(n).fill([])  将会引用同一个[]

function makeAlmostEqual (arr, part) {
  let orderedArr = arr.sort((a,b) => b - a)  
   
  let res = Array(part).fill(void(0)).map(() => [])
  orderedArr.forEach(value => {
    let minArrIndex = getMinArrIndex(res)
    res[minArrIndex].push(value)
  })
  return res
}

function getSum (arr) {
  return arr.reduce((sum, v) => sum + v, 0)
}

function getMinArrIndex (arrs) {
  let minArrIndex = 0
  arrs.forEach((arr, index) => {
    if (getSum(arrs[minArrIndex]) > getSum(arrs[index])) {
      minArrIndex = index
    }
  })
  // console.log(arrs)
  return minArrIndex
}

makeAlmostEqual([1, 65, 4, 32, 95, 33, 9, 3], 3)
