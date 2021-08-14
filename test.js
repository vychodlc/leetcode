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

// 4
let nums1 = [1,23],nums2 = [1,2,3,23]
var findMedian = (nums1,nums2) => {
  let len1 = nums1.length,len2 = nums2.length;
  let len = len1 + len2;

  let preValue = -1,curValue = -1;
  let point1 = 0, point2 = 0;
  for (let i = 0; i <= Math.floor(len/2); i++) {
    preValue = curValue;
    if (point1 < len1 && (point2 >= len2 || nums1[point1] < nums2[point2])) {
      curValue = nums1[point1];
      point1++;
    } else {
      curValue = nums2[point2];
      point2++;
    }
  }
  return len % 2 === 0 ? (preValue + curValue) / 2 : curValue
}
console.log(findMedian(nums1,nums2));