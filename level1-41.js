// javascript coding test - 나머지 1이 되는 수 찾기 (lv1)
function solution(n) {
    for(let i=2; i<n; i++) {
        if(n%i===1) return i;
    }
}