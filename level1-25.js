// javascript coding test - 자연수 뒤집어 배열로 만들기 (lv1)
function solution(n) {
    return n.toString().split('').reverse().map(o => o = parseInt(o));
}