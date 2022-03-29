// javascript coding test - 자릿수 더하기 (lv1)
function solution(n){
    let answer = 0;
    let a = String(n);
    for(i=0; i<a.length; i++) {
      answer += parseInt(a[i]);
    }
    return answer;
}