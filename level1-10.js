// javascript coding test - 폰켓몬 (lv1)
function solution(nums) {
  var answer = 0;
  let now = nums.length / 2;
  
  let arr = nums.filter((element, index) => {
      return nums.indexOf(element) === index;
  });
  
  if(arr.length >= now){
      answer = now;
  }else{
      answer = arr.length;
  }
  
  return answer;
}