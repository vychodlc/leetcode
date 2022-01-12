// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//   const validMap = {
//     '{':'}',
//     '(':')',
//     '[':']'
//   }
//   let stack = [];
//   s = s.split('');
//   for(let i=0; i<s.length; i++) {
//     if(s[i]=='('||s[i]=='['||s[i]=='{') {
//       stack.push(s[i]);
//     } else {
//       let pop;
//       if(stack.length==0) {
//         return false;
//       } else if(stack.length==1) {
//         pop = stack[0];
//         stack = [];
//       } else {
//         pop = stack.splice(-1,1)[0];
//       }
//       if(validMap[pop]!=s[i]) {
//         return false;
//       }
//     }
//   }
//   return stack.length==0;
// };

var isValid = function(s) {
  let l1 = s.indexOf('()');
  let l2 = s.indexOf('[]');
  let l3 = s.indexOf('{}');
  while( l1!=-1 || l2!=-1 || l3!=-1 ) {
    console.log(s,l1,l2,l3,'---');
    if(l1!=-1) s = s.replaceAll('()','')
    if(l2!=-1) s = s.replaceAll('[]','')
    if(l3!=-1) s = s.replaceAll('{}','')
    console.log(s,l1,l2,l3,'===');
    l1 = s.indexOf('()');
    l2 = s.indexOf('[]');
    l3 = s.indexOf('{}');
  }
  return s==''
}

console.log(isValid('(())'))
// isValid('(]')