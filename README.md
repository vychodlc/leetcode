# LEETCODE HOT 100 刷题笔记

## [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

![](images/1.png)

### 方法一：暴力枚举

#### 思路及算法
最容易想到的方法是枚举数组中的每一个数 $x$，寻找数组中是否存在 $target - x$。

当我们使用遍历整个数组的方式寻找 $target - x$ 时，需要注意到每一个位于 $x$ 之前的元素都已经和 $x$ 匹配过，因此不需要再进行匹配。而每一个元素不能被使用两次，所以我们只需要在 $x$ 后面的元素中寻找 $target - x$。

#### 代码

```javascript
var twoSum = function (nums, target) {
    let items = [];
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if(nums[i]+nums[j]==target) {
                items.push(i);
                items.push(j);
                return items;
            }
        }
    }
};
```

#### 复杂度分析

+ 时间复杂度：$O(N^2)$，两个for循环，易得。
+ 空间复杂度：$O(1)$。

### 方法二：

#### 思路及算法
注意到方法一的时间复杂度较高的原因是寻找 $target - x$ 的时间复杂度过高。因此，我们需要一种更优秀的方法，能够快速寻找数组中是否存在目标元素。如果存在，我们需要找出它的索引。

使用哈希表，可以将寻找 $target - x$ 的时间复杂度降低到从 $O(N)$ 降低到 $O(1)$。

这样我们创建一个哈希表，对于每一个 $x$，我们首先查询哈希表中是否存在 $target - x$，然后将 $x$ 插入到哈希表中，即可保证不会让 $x$ 和自己匹配。

#### 代码

```javascript
var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      return [i, hash[target - nums[i]]];
    }
    hash[nums[i]] = i;
  }
  return [];
};
```

#### 复杂度分析

+ 时间复杂度：$O(N)$。
+ 空间复杂度：$O(N)$，主要用于哈希表的开销。
