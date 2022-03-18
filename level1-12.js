// javascript coding test - 두 개 뽑아서 더하기 (lv1)
function solution(num) {
let answer = [];

for(let i =0; i<num.length-1; i++){
    for(let j = i+1; j<num.length; j++){
        if(!answer.includes(num[i]+num[j])){
          answer.push(num[i]+num[j]);
        }
    }
  }
  answer.sort((a,b)=>a-b);
  return answer; 
}
