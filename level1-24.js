// javascript coding test - 정수 내림차순으로 배치하기 (lv1)
function solution(n) {
    return +(String(n).split('').map(item => +item).sort((a,b)=>b-a).join(''))
}