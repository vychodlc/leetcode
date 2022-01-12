// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

/**
 * @param {number} n
 * @return {string[]}
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generate = function(str,n,result) {
  if(str.length==n) {
      let old = str;
      while(str.indexOf('()')!=-1) {
          str = str.replaceAll('()','')
      }
      if(str=='') {
          result.push(old);
      }
  } else if(str.length<n) {
      generate(str+'(',n,result);
      generate(str+')',n,result);
  }
};
var generateParenthesis = function(n) {
  let result = [];
  n = 2*n;
  generate('(',n,result);
  return result;
};

// let result = [generateParenthesis(1)]
let results = []
for(let i=0;i<8;i++) {
  results.push(generateParenthesis(i+1))
}

console.log(results);