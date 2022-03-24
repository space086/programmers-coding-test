// javascript coding test - 최대공약수와 최소공배수 (lv1)
function solution(n, m) {
    var answer = [];
    
    let k = 0;
    let j = 0;
    
    let num = n > m ? n: m;
    
    for(let i = 0; i<= num; i++) {
        if(n% i == 0 && m % i == 0){
            k = i
        }
    }
    j = n* m / k;
    answer =[k,j];
    return answer;
}
