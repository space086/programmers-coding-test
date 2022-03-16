// 같은 숫자는 싫어
function solution(arr) {
  var answer = [];
  for(let i=0; i<arr.length; i++) {
    if(arr[i] !== arr[i+1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}


// 없는 숫자 더하기
function solution(num) {
  let answer= 0;

  for(let i=0; i<10; i++) {
    if(!num.include(i)) answer += i;
  }
  return answer;
}

//음양 더하기
function solution(absolutes, signs) {
  var answer = 0;

  for(let i=0; i<absolutes.length; i++){
    if(signs[i] == true) {
      answer += absolutes[i];
    }else {
      answer -= absolutes[i];
    }
  }
  return answer;
}

// 소수 만들기
function solution(nums) {
  var answer = 0;
  
  for(let i=0; i<nums.length; i++){
      for(let j= i+1; j<nums.length; j++){
          for(let k= j+1; k<nums.length; k++){
              if(isPrime(nums[i]+nums[j]+nums[k])) answer += 1;
          }
      }
  }
  return answer;
}

function isPrime(num){
  let div = 0;
  for(let i = 1; i<num; i++){
      if(num % i=== 0)div+= 1;
  }
  if(div === 1) return true;
  return false;
}

//완주하지 못한 선수
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  
  for(let i=0; i<participant.length; i++){
      if(participant[i] !== completion[i]){
          return participant[i];
      }
  }
  return answer;
}


///