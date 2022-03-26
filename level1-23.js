// javascript coding test - 정수 제곱근 판별 (lv1)
function solution(n) {
    let num = Math.sqrt(n);
    if(num % 1 === 0 ) return (num+1) * (num+1)
    else return -1
}