// javascript coding test - 수박수박수박수박수박수? (lv1)
function solution(n) {
  let result = ""
  for(let i = 1; i<=n; i++){
      if(i % 2 === 0){
          result += "박"
      }else{
          result += "수"
      }
  }
  return result
}