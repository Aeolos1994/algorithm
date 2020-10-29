function getSubArrayMaxSum (arr) {
    if (!arr.length) return 0
    let dp = new Array(arr.length).fill(-Infinity)
    dp[0] = arr[0]
    for (let i = 1, l = arr.length; i < l; i++) {
        // 核心思想： dp[i]值可以由dp[i-1] 和 arr[i] 推导得出
        // 取前序子数组&当前元素加和 与 当前元素其中的最大一个就可以
        dp[i] = Math.max(arr[i], dp[i-1] + arr[i])
    }
    console.log(dp)
    return Math.max(...dp)
}
console.log(getSubArrayMaxSum([-2,1,-3,4,-1,2,1,-5,4]))