// 动态规划学习1
/*
  动态规划的思想： 通过拆分问题为子问题，计算子问题得到原问题的解
  前置： 需要找到互相独立的最优子问题
        找到子问题与父问题的关系并建立数学模型
        找到base case(即原子解)
  操作： 自底向上通过base case & 数学模型推导出父问题的解
  应用场景： 最值问题...
*/

// 凑零钱问题
/* 
    给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

    示例 1:
    输入: coins = [1, 2, 5], amount = 11
    输出: 3 
    解释: 11 = 5 + 5 + 1

    示例 2:
    输入: coins = [2], amount = 3
    输出: -1
     

    说明:
    你可以认为每种硬币的数量是无限的。
*/

// LeetCode: https://leetcode-cn.com/problems/coin-change/solution/322-ling-qian-dui-huan-by-leetcode-solution/

// 首先这是个求最值问题，是要求问题的最优解
// 尝试是否可以把问题分解？  问题可以分解为 amount-coins[i]的最优解 + 1，这个子问题可以继续分解为 amount-coins[i] - coins[i] 的最优解 + 2，etc.
// 那么子问题是互相独立的吗？  由于每种硬币的个数是无限的，所以这种分解方式的子问题是互相独立的
// 那么这个问题有base case吗？  现实逻辑为  amount === 0时，无需硬币即可凑成，所以res = 0,这种情况即可以作为base case
// 所以可以构造状态转移方程：f(n)为amount=n时的最优解
// f(0) = 0
// f(n) = f(n-coins[i]) + 1

function getCoins (coins, amount) {
  // 为什么是amount + 1?  因为我们有个base case占据Array的头部
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i < amount; i++) {
    for (coin of coins) {
        if (i < coin) continue
        // 本行即为对于状态转移方程的代码实现
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}



// 最大子序列和
// https://leetcode-cn.com/problems/maximum-subarray/
/* 
    给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

    示例:

    输入: [-2,1,-3,4,-1,2,1,-5,4]
    输出: 6
    解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
    进阶:

    如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
*/

// 首先搭眼一瞄 又是个最值问题，接下来看
// 1. 是否可以分解？  首先连续子数组的和结束位置假设为n, 最大和为f(n)
//    那么在数组Array[n] 为正时, f(n) = f(n-1) + Array[n]
//    否则f(n) === f(n-1),因为我们在求最大和所以使用Max函数
// 2. 子问题独立吗？  每个元素都独立的所以子问题独立
// 3. 有base case吗？ 假如数组为空时,那么最大和为0 所以base case为 f(0) = 0
// 其实我们是因为有了base case来推算分解方式的
// 整体思路也就是，把每个数组的元素作为子数组的结束元素，并得出每种情况下的最大值，最后进行max计算
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


// 另一种方式
// 思路： 贪心算法 遍历数组，判断每次循环中的sum对后续加和是否有增益
// 如果出现sum < 0, 则sum = 当前遍历值v，否则sum += v, 并取的每次循环中的sum最大值

function getSubArrayMaxSum2 (arr) {
  let sum = -Infinity, res = -Infinity
  arr.forEach(v => {
      if (sum >= 0) {
          sum += v
      } else {
          sum = v
      }
      res = Math.max(sum, res)
  });
  return res
}

console.log(getSubArrayMaxSum2([-2,1,-3,4,-1,2,1,-5,4]))