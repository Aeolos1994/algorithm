/*
运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字/值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

 

进阶:

你是否可以在 O(1) 时间复杂度内完成这两种操作？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lru-cache
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


// 方案1: 
// 使用最基础的数据结构 Array & Object实现
// get 需要通过快速获取到对应的value，可以想到使用HashMap
// put 需要快速插入，同时保证有序，可以想到LinkedList
// delete 因为我们只存固定长度的数据，所以在put操作中其实隐含delete操作, 需要快速删除节点时就需要双向链表
// 最终数据结构为 一张hash表存我们的key，方便进行查找，一张链表存我们的value，方便操作

class LRUCache {
    constructor (cacheSize) {
        this.cacheSize = cacheSize
    }
    get (key) {

    }
    put (key, value) {

    }
    delete (key) {

    }
}

// 方案2：不限制数据结构的使用的话
// 通过ES6新数据结构中 Map的有序性可以很的简单实现
