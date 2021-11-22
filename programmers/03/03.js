01;
"문자열 내 p와 y의 개수"

function solution(s) {
//   let answer = true;
  let newS = s.toLowerCase();
  let p = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    if (newS[i] === "p") {
      p++;
    } else if (newS[i] === "y") {
      y++;
    }
//     if (p === y) {
//       answer = true;
//     } else if (p !== y) {
//       answer = false;
//     }
//   }
  return p===y;
}

// function solution(s){
//     const check={}; //알파벳의 개수를 정리하는 객체
//     const answer=s.toLowerCase()
//                     .split("")
//                     .forEach(str=>{
//                         check[str] === undefined
//                             ? check[str] = 1// 기존에 알파벳이 없다면 1을 초기값으로 생성
//                             : check[str] +=1// 기존의 알파벳 개수를 1 증가
//                     })
//         return check.p === check.y
// }  매서드 방식




02;
("이상한 문자 만들기");

// function solution(s) {
//   let answer = "";
//   let newS = String(s);
//   for (let i = 0; i < s.length; i++) {
//     if (newS[i] % 2 === 0) {
//       newS[i] = newS.toUpperCase();
//     } else if (newS[i] % 2 === 1) {
//       newS[i] = newS.toLowwerCase();
//     }
//   }
//   console.log(newS);
//   return answer;
// }

function solution(s) {
    let answer;
    
    let idx=0; //단어별로 인덱스 값을 저장하는 역할
    for(let i=0; i<s.length; i++){
        if(s[i] === " "){
            //공백이라면 그냥 공백을 넣어준다.(예외처리)
            answer += " "
            idx = 0; //다음 단어부터 idx 0부터 다시 시작.
        }else {
            answer += idx % 2 === 0
                ? s[i].toUpperCase() //짝수면 대문자
                : s[i].toLowerCase() //홀수면 소문자
            idx++;
        }
    }
    return answer
}

function solution(s) {
    const answer= s.split(" ")//공백을 기준으로 쪼개서 배열에 저장
                     .map(word=> {
                         return word.split("")
                                     .map( (letter, i)=> {
                             return i % 2 ===0
                                 ? letter.toUpperCase()
                                 : letter.toLowerCase()
                         }).join("") //배열을 문자열로(붙여서) 만들어줌
                     }).join(" ") //공백을 기준으로 문자열 만들어줌
     return answer;
 }

 03
 "자연수 뒤집어 배열로 만들기"

 function solution(n) {
  let answer = [];
  let N = n.toString().split('');
  for(let i=N.length-1; i>=0; i--){
      answer.push(Number(N[i]))
  }
  console.log(answer)
  return answer;
}

// function solution(n) {
//   const answer = String(n)
//                   .split("")
//                   .reverse()
//                   .map((n)=>{
//                      return Number(n)
//                   })      
//   return answer;
// }

04
"I나누어 떨어지는 숫자 배열"

function solution(arr, divisor) {
  let answer = [];
  for(let i=0; i<arr.length; i++){
      if(arr[i]%divisor===0){
          answer.push(arr[i])  
      }
  }
    if(answer.length === 0) {
        answer.push(-1)
    }
  return answer.sort((a,b)=>a-b);
}


function solution(arr, divisor) {
  let answer = [];
  for(let i=0; i<arr.length; i++){
      if(arr[i]% divisor===0){
          answer.push(arr[i])
      }
  }
  
  return answer.length ===0 
      ? [-1]
      : answer.sort((a,b)=>a-b)
}

// function solution(arr, divisor) {
//   const answer= arr.filter(num =>{
//       return num%divisor ===0
//   }) 
//   return answer.length ===0
//       ? [-1]
//       : answer.sort((a,b)=>a-b)
// }

05
"콜라츠 추측"

function solution(num) {
    let answer = 0;
    for(let i= 0; i<500; i++){
        if(num!==1){
            if(num%2===0){
                num= num/2
            }else{
                num=num*3+1
            }
        }else{
            return answer= i
        }
    }
    return answer= -1;
}

function solution(num) {
    let count = 0;
    for(let i= 0; i<500; i++){
        if(num===1){
            break; //for문을 중단
        }
        count++;
        
        num=num%2===0
        ? num/2
        :num*3+1
    }
    return num!== 1 ? -1 : count
}
///while문
function solution(num) {
    let counter = 0;
    while (num !== 1){
        if(counter++ === 500) return -1;
        num = num%2 ? num*3+1 : num/2;
    }
    return counter;
}
///매서드 방식
function solution(num) {
    let count = 0;
    
    const arr= new Array(500)
                .fill(1)
                .forEach( _ =>{ // _ 사용되지 않는 데이터 언더바로 둠.
                    if(num!== 1){
                        count++;

                        num = num % 2 ? num*3+1 : num/2
                    }
                })
    return num === 1 ? count : -1;
}
//for나 while은 조건 만족 시 멈추는데 forEach는 끝날 때까지 계속 돈다.



06
"두 개 뽑아서 더하기"

function solution(numbers) {
    let answer = [];
    
    for(let i=0; i<numbers.length; i++){
        for(let l=i+1; l<numbers.length; l++){
            const sum = numbers[i]+ numbers[l];
            if (answer.includes(sum)===false)
            answer.push(sum);
        }
    }
    return answer.sort((a,b)=>a-b);
}

// function solution(numbers) {
//     let answer = new Set([]);
    
//     for(let i=0; i<numbers.length; i++){
//         for(let l=i+1; l<numbers.length; l++){
//             const sum = numbers[i]+ numbers[l];
            
//             answer.add(sum);
//         }
//     }
//     answer= Array.from(answer)
//     return answer.sort((a,b)=>a-b);
// }

// function solution(numbers) {
//     // const answer = [];
//     const answer = new Set([]);
    
//     numbers.forEach ((num,i)=> {
//         numbers.slice(i+1, numbers.length).forEach(num2 =>{
//                 const sum =num+num2;
//             answer.add(sum)
//             // if(answer.includes(sum)===false){
//             //     answer.push(sum)
//             // }
//        })    
//     })
//     // return answer.sort((a,b)=>a- b)
//     return Array.from(answer).sort((a,b)=> a- b)
// }

07
"정수 제곱근 판별"

function solution(n) {
    let answer = -1;
    
    for(let i=1; i*i <=n; i++){
        if(i*i===n){
            answer=Math.pow(i+1,2)
        }
    }return answer
}

//  while문 활용
function solution(n) {
    let num = 1;
    // while(num*num !== n){
        while(num*num < n){
            num++
        }
    return num*num === n
        ? Math.pow(num+1,2)
        : -1
} //조건을 !==n 이 아니고 <n 으로 했어야 함.


//매서드 방식
function solution(n) {
    return Number.isInteger( Math.sqrt(n))
        ? Math.pow(Math.sqrt(n)+1,2)
        : -1
}
