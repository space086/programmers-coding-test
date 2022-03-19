// javascript coding test - x만큼 간격이 있는 n개의 숫자 (lv1)
function solution(x, n) {
    var answer = [];
    var cnt = 0;
    
    while(cnt<n) {
        cnt++;
        answer.push(x*cnt);
    }
    return answer;
}
