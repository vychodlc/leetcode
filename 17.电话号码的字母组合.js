// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。


// 广度优先
var letterCombinations = function(digits) {
  const KEY = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
  if(digits=='') {
    return []
  }
  digits = digits.split('').map(item=>parseInt(item));
  let res = KEY[digits[0]].split('');
  
  for(let i=1; i<digits.length; i++) {
    let leng = res.length;
    for(let j=0; j<leng; j++) {
      let p = res.splice(0,1)[0];
      for(let k=0; k<KEY[digits[i]].length; k++) {
        res.push(p+KEY[digits[i]][k]);
      }
    }  
  }
  return res;
}

console.log(letterCombinations('23'));