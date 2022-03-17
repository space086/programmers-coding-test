function solution(numbers) {
  let answer = 0;
  for (let i = 0; i <= 9; i++) {
      if (!numbers.includes(i)) {
          answer += i;
      }
  }
  return answer;
}

//////////////
//음양더하기
function solution(absolutes, signs) {
  for(let i = 0; i < absolutes.length; i++) {
      if(signs[i] === false) {
          absolutes[i] = -absolutes[i]
      }else {
          absolutes[i]
      }
  } return absolutes.reduce(function(acc,cur){
      return acc + cur
  })
}

////////
//소수만들기
function solution(nums){
  var result = 0;
  var sum = [];
    
  for(var i = 0; i < nums.length; i++){
    for(var j = i+1; j < nums.length; j++){
      for(var k = j+1; k < nums.length; k++){
        var temp = nums[i] + nums[j] + nums[k]
        sum.push(temp);
      }
    }
  }
  for(var l = 0; l < sum.length; l++){
    if(isPrime(sum[l])){
      result++;
    }
  }
    
  return result;
}

function isPrime(sum){
  for(var i = 2; i*i <= sum; i++){
    if(sum % i === 0) return false;
  }
    
  return true;
}

//////
//k번째 수
function solution(array, commands) {
  var answer = [];
  for(let i=0; i<commands.length;i++){
      let list = array.slice(commands[i][0]-1, commands[i]
                    [1]).sort((a,b)=>{return a-b});
      
      answer.push(list[commands[i][2]-1]);
  }

  return answer;
}

/////




