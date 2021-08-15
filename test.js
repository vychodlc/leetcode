// var lengthOfLongestSubstring = function(s) {
//   let left = 0;
//   let result = 0;
//   let map = new Map();
//   for(let right=0; right<s.length; right++) {
//     if(map.has(s[right]) && map.get(s[right])>=left) {
//       left = map.get(s[right]) + 1;
//     }
//     result = Math.max(result,right-left+1)
//     map.set(s[right],right)
//   }
//   return result;
// };
// console.log(lengthOfLongestSubstring('dqwqwddqw'));

// // 4
// let nums1 = [1,23],nums2 = [1,2,3,23]
// var findMedian = (nums1,nums2) => {
//   let len1 = nums1.length,len2 = nums2.length;
//   let len = len1 + len2;

//   let preValue = -1,curValue = -1;
//   let point1 = 0, point2 = 0;
//   for (let i = 0; i <= Math.floor(len/2); i++) {
//     preValue = curValue;
//     if (point1 < len1 && (point2 >= len2 || nums1[point1] < nums2[point2])) {
//       curValue = nums1[point1];
//       point1++;
//     } else {
//       curValue = nums2[point2];
//       point2++;
//     }
//   }
//   return len % 2 === 0 ? (preValue + curValue) / 2 : curValue
// }
// console.log(findMedian(nums1,nums2));

// 5
// var checkStr = (s) => {
//   let len = s.length;
//   let left=0,right=len-1;
//   // if(len==2&&s[0]!=s[1]) {
//   //   return false;
//   // }
//   while(left!=right&&left-1!=right) {
//     console.log(s[left],s[right]);
//     if(s[left]==s[right]) {
//       left++;right--;
//     } else {
//       return false
//     }
//   }
//   return true
// }

// var checkStrFun = (s) => {
//   let maxStr = '';
//   for(let i=0;i<s.length;i++) {
//     for(let j=i+1;j<s.length+1;j++) {
//       let str = s.slice(i,j);
//       if(checkStr(str)==true && str.length>=maxStr.length) {
//         maxStr = str;
//       }
//     }  
//   }
//   return maxStr
// }

// console.log(checkStr("acaa"));
// var longestPalindrome = function(s) {
//   let len = s.length;
//   if(len<2) {
//     return s;
//   }
//   let left=0,right=0;
//   for(let i=0;i<len;i++) {
//     check(i,i+1);check(i,i);
//   }

//   function check(m,n) {
//     while(m>=0 && n<len && s[m]==s[n]) {
//       m--;n++;
//     }
//     if(n-m>right-left) {
//       left = m; right = n;
//     }
//   }

//   return s.slice(left+1,right)
// }

// console.log(longestPalindrome('qqqqddd'));

// // 11 
// var maxArea = function(height) {
//   // let len = height.length;
//   // let maxWater = 0;
//   // for(let i=0; i<len; i++) {
//   //     for(let j=i+1; j<len; j++) {
//   //         maxWater = Math.max(maxWater, Math.min(height[i],height[j]) * (j-i))
//   //     }
//   // }
//   // return maxWater
//   let len = height.length;
//   let left = 0, right = len-1;
//   let maxWater = 0;
//   while((left-1)!=right) {
//     maxWater = Math.max(maxWater, (right-left) * Math.min(height[left], height[right]))
//     height[left]<height[right]?left++:right--; 
//   }
//   return maxWater
// };

// console.log(maxArea([1,7]));

// 15
nums = [-2,-3,0,1,2,0,0,0]
nums.sort((a,b)=>{return a-b})
for(let i=0; i<nums.length; i++){
  for(let j=i+1; j<nums.length; j++){
    if(nums[i]==nums[j]){
      nums.splice(j--,1)
    }
  }
}
console.log(nums);