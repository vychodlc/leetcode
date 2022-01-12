// 给你一个包含 n 个整数的数组 nums，
// 判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
// 请你找出所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。


var threeSum = function(nums) {
  let length = nums.length;
  if(length<3) {
    return []
  }
  let res = [];
  nums = nums.sort((a,b) => a-b)
  if(nums[0]>0 || nums[-1]<0) {
    return res;
  }
  for(let i=0; i<length; i++) {
    if(nums[i]>0) {
      return res;
    }
    if(i>0 && nums[i]==nums[i-1]) {
      continue;
    }
    let l = i+1;
    let r = length-1;
    while(l<r) {
      let temp = nums[i] + nums[l] + nums[r];
      if(temp<0) {
        l++;
      } else if(temp>0) {
        r--;
      } else if(temp===0) {
        res.push([nums[i],nums[l],nums[r]])
        while(l<r && nums[l]==nums[l+1]) { l++ }
        while(l<r && nums[r]==nums[r-1]) { r-- }

        l++,r--;
      }
    }
  }
  return res;
}

console.log(threeSum([-1,0,1,2,-1,-4]));