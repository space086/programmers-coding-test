// javascript coding test - 문자열 내 p와 y의 개수 (lv1)
function solution(s){
    let str= s.toLowerCase();
    let count = 0
    for(let i = 0; i <s.length; i++){
        if(str[i]==="p") count++;
        else if(str[i]=== "y") count--
    }
    return count === 0 ? true : false
}