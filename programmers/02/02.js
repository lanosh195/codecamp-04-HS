01 
"문자열 정수로 바꾸기"

    function solution(s) {
        var answer = 0;
        if(s.length>=1 && s.length<=5){
            answer=Number(s)
        }
        return answer;
    }

02
"연속된 같은 숫자 제거"

function solution(arr){
    var answer = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i]!== arr[i+1]){
            answer.push(arr[i])
        }
    } 
    return answer;
}

03
"핸드폰 번호 가리기"

function solution(phone_number) {
    let answer = '';
       for(let i=0; i< phone_number.length; i++){
        if(i< phone_number.length-4){
            answer += "*"
        }else{ 
                answer += phone_number[i]
            }
        }  
    return answer;
}

function solution(phone_number) {
    let answer= '';
    answer= answer.padStart( phone_number.length-4,"*")
    answer += phone_number.slice( phone_number.length-4,phone_number.length)
}

