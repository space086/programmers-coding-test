// javascript coding test - 부족한 금액 계산하기 (lv1)
function solution(price, money, count) {
    let totalP = 0;
    
    for(let i=1;i<=count;i++){
        totalP += price * i;
    }
    
    return money > totalP ? 0 : totalP-money
}