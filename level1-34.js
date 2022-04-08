// javascript coding test - 문자열 내 마음대로 정렬하기 (lv1)
function solution(strings, n) {
    strings.sort(function(a,b){
        var first = a[n];
        var second = b[n];
        if(first === second){
            return (a > b) - (a < b);
        }else{
            return (first > second) - (first < second);
        }
    })
    return strings;
}