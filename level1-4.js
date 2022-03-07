// javascript coding test - 음양 더하기 (lv1)
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