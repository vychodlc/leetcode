var dailyTemperatures = function(temperatures) {
  let results = [];
  for(let i=0; i<temperatures.length; i++) {
      let temp = temperatures[i];
      let count = 0;
      for(let j=i+1; j<temperatures.length; j++) {
        count++;
        if(temp<temperatures[j]) {
          break;
        }
      }
      if(temperatures.length-i-1==count) count = 0;
      results.push(count);
  }
  return results;
};

// let results = dailyTemperatures([73,74,75,71,69,72,76,73]);
// let results = dailyTemperatures([76,73]);
let results = dailyTemperatures([30,40,50,60])
console.log(results);