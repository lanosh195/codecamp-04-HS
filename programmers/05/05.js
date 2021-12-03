01;
("완주하지 못하 선수");

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

function solution(participant, completion) {
  participant.sort(); //참가자 명단 오름차순 정렬
  completion.sort(); //완주자 명단 오름차순 정렬

  let answer = "";
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

02;
("모의고사");

//수포자들이 찍는 방식
const answerTable = [
  //1번 수포자의 방식
  [1, 2, 3, 4, 5],
  //2번 수포자의 방식
  [2, 1, 2, 3, 2, 4, 2, 5],
  //3번 수포자의 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  //학생들의ㅡ 점수를 저장하는 배열
  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < answerTable.length; l++) {
      if (answerTable[l][i % answerTable[l].length] === answers[i]) {
        score[l]++;
      }
    }
  }
  //제일 많이 맞춘 학생을 저장
  const biggest = Math.max(...score);
  const result = [];

  for (let i = 0; i < score.length; i++) {
    if (biggest === score[i]) {
      result.push(i + 1);
    }
  }
  return result;
}

///매서드
//수포자들이 찍는 방식
const answerTable = [
  //1번 수포자의 방식
  [1, 2, 3, 4, 5],
  //2번 수포자의 방식
  [2, 1, 2, 3, 2, 4, 2, 5],
  //3번 수포자의 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  //학생들의ㅡ 점수를 저장하는 배열
  const scoreList = [
    { student: 1, score: 0 },
    { student: 2, score: 0 },
    { student: 3, score: 0 },
  ];

  answers.forEach((el, i) => {
    answerTable.forEach((cu, l) => {
      if (cu[i % cu.length] === el) {
        scoreList[l].score += 1;
      }
    });
  });
  // const scoreArr = scoreList.map(el =>{
  //     return el.score
  // })
  const biggest = Math.max(
    ...scoreList.map((el) => {
      return el.score;
    })
  );
  const result = scoreList.filter((el) => {
    return el.score === biggest;
  });
  return result.map((el) => el.student);
}

03;
("폰켓몬");

function solution(nums) {
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i])
    if (
      answer.length !== nums.length / 2 &&
      answer.includes(nums[i]) === false
    ) {
      answer.push(nums[i]);
    }
  }
  console.log(answer);
  return answer.length;
}
//new Set 함수 사용
function solution(nums) {
  const answer = new Set([]);

  for (let i = 0; i < nums.length; i++) {
    if (answer.size !== nums.length / 2) {
      answer.add(nums[i]);
    }
  }
  return answer.size;
}

//매서드 방식
function solution(nums) {
  const answer = [];

  nums.forEach((monster) => {
    // console.log(monster)
    if (
      answer.length !== nums.length / 2 &&
      answer.includes(monster) === false
    ) {
      answer.push(monster);
    }
  });
  return answer.length;
}

//new Set 이용
function solution(nums) {
  const answer = new Set(nums).size;
  //폰켓몬 최대 개수
  const limit = nums.length / 2;
  console.log(answer, limit);

  if (limit >= answer) {
    return answer;
  }
  return limit;
}

04;
("피보나치 수");
function solution(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    let sum = (arr[i - 2] + arr[i - 1]) % 1234567;
    //현재 피보나치 위치에서 2칸 앞에 있는 데이터
    let prev = arr[i - 1];
    //현재 피보나치 위치에서 1칸 앞에 있는 데이터
    let next = sum;

    arr.push(sum);
    // console.log(sum, prev, next, arr)
  }
  return arr[n];
}

//매서드 방식
function solution(n) {
  let prev = 0; //0번째 피보나치 수의 결과
  let next = 1; //1번째 피보나치 수의 결과
  let sum = prev + next; //0 + 1 = 1;
  const result = new Array(n - 1).fill(1).reduce((el) => {
    sum = (prev + el) % 1234567;
    prev = el;
    next = sum;

    return sum;
  }, sum);
  return result;
}

05;
("숫자 문자열과 영단어");
function solution(s) {
  s = s.replace(/zero/g, "0");
  s = s.replace(/one/g, "1");
  s = s.replace(/two/g, "2");
  s = s.replace(/three/g, "3");
  s = s.replace(/four/g, "4");
  s = s.replace(/five/g, "5");
  s = s.replace(/six/g, "6");
  s = s.replace(/seven/g, "7");
  s = s.replace(/eight/g, "8");
  s = s.replace(/nine/g, "9");

  return Number(s);
}
