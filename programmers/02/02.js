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

04
"짝수와 홀수"

function solution(num) {
    let answer = "";
    if(num%2===0){
        answer = "Even"
    } else{
        answer = "Odd"
    }
    return answer;
}

// function evenOrOdd(num) {
//     return num % 2 ? "Odd" : "Even";
//   }

05
"평균 구하기"

function solution(arr) {
    let answer = 0;
    for(let i=0; i<arr.length; i++){
        answer += arr[i];
    }
    return answer/arr.length;
}

// 1 function average(array){
//     return array.reduce((a, b) => a + b) / array.length;
//   }
  

// 2 function average(array){
//     var result = array.reduce(function(a,b){ return a + b; });
//     return result/array.length;
//   }
  

06
"가운데 글자 가져오기"

function solution(s) {
    let answer = '';
    let half= Math.floor(s.length/2);
    
    if(s.length%2 !==0){
        answer=s[half]
    }else {
        answer= s[half-1]+s[half]
    }
    
    return answer;
}

// 1 function solution(s) {
//     return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }


// 2 function solution(s) {
//     const mid = Math.floor(s.length/2);
//     return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
// }

07
"서울에서 김서방 찾기"

function solution(seoul) {
    let answer=seoul.indexOf("Kim");
    return "김서방은 "+answer+"에 있다";
        // return `김서방은 ${answer}에 있다`
}

08
"문자열 다루기"

function solution(s) {
    let answer = parseInt(s)
    if((s.length===4 || s.length===6)&&s==answer){
        answer=true
    }   else{
        answer=false
    }
    return answer;
    // console.log(answer)
}

09
"약수의 합"

function solution(n) {
    let answer=0
    for(let i=1; i<=n; i++){
        if(n%i===0){
            answer+=i
        }
    }
    return answer;
}

10
"자릿수 더하기"

function solution(n)
{
    let answer = 0;
    let a= String(n);
    for(let i=0; i<a.length; i++){
        answer+=parseInt(a[i]);
    }  
    return answer;
}



11
"x만큼 간격이 있는 n개의 숫자"

function solution(x, n) {
    let answer = [];
    for(let i=1; i<=n; i++){
        answer.push(x*i)
    }
    return answer;
}

