01;
("체육복");

function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => reserve.includes(student) === false)
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => losted.includes(student) === false)
    .sort((a, b) => a - b);

  //전체 학생의 수 - 체육복을 도난당한 학생의 수
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    //체육복을 잃어버린 학생을 sutudent 상수에 할당
    const student = lost[i];

    //내 앞에 있는 학생의 번호를 조회
    if (reserve.includes(student - 1)) {
      answer++;
      reserve.splice(reserve.indexOf(student - 1), 1);
      //내 뒤에 있는 학생의 번호를 조회
    } else if (reserve.includes(student + 1)) {
      answer++;
      reserve.splice(reserve.indexOf(student + 1), 1);
    }
  }
  return answer;
}

//매서드 방식
function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => reserve.includes(student) === false)
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => losted.includes(student) === false)
    .sort((a, b) => a - b);

  //전체 학생의 수 - 체육복을 도난당한 학생의 수
  let answer = n - lost.length;

  lost.forEach((student) => {
    //앞에 있는 학생이 여벌을 가지고 있는지
    const prev = reserve.indexOf(student - 1);
    //뒤에 있는 학생이 여벌을 가지고 있는지
    const next = reserve.indexOf(student + 1);

    if (prev !== -1) {
      answer++;
      reserve.splice(prev, 1);
    } else if (next !== -1) {
      answer++;
      reserve.splice(next, 1);
    }
  });

  return answer;
}

02;
("시저 암호");

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    let index = alphabet.indexOf(s[i]);
    const word =
      index > 25 ? alphabet.slice(26, alphabet.length) : alphabet.slice(0, 26);

    // console.log(s[i], word, index)
    index = word.indexOf(s[i]) + n;
    // console.log( s[i], word, word[index])

    if (index >= 26) {
      index -= 26;
    }
    answer += word[index];
  }

  return answer;
}

const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자 알파벳만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 알파벳만 저장

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    //소문자인지 검증 후 소문자면 소문자 리스트에
    //대문자이면 대문자 리스트에 저장
    const word = lower.includes(s[i]) ? lower : upper;
    let index = word.indexOf(s[i]) + n;

    if (index >= 26) {
      index -= 26;
    }
    answer += word[index];
  }
  return answer;
}

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    let index = s[i].charCodeAt() + n;
    if (index > 122 || (index > 90 && index - n < 97)) {
      index = index - 26;
    }
    answer += String.fromCharCode(index);
  }
  return answer;
}

03;
("실패율");

function solution(N, stages) {
  stages.sort((a, b) => a - b);

  let answer = [];

  const stageArr = [];
  for (let i = 1; i <= N; i++) {
    stageArr.push({
      stage: i,
      users: 0, //현재 스테이지를 클리어하지 못한 유저의 수
      fail: 0, //현재 스테이지의 실패율을 저장하기 위한 값
    });
  }
  let players = stages.length;
  for (let i = 0; i < stages.length; i++) {
    if (stageArr[stages[i] - 1]) {
      stageArr[stages[i] - 1].users += 1;
      //현재 스테이지와 다른 스테이지 번호가 동일하지 않을 때
      if (stages[i] !== stages[i + 1]) {
        const fail = stageArr[stages[i] - 1].users / players;
        players = players - stageArr[stages[i] - 1].users;

        stageArr[stages[i] - 1].fail = fail;
      }
    }
  }
  stageArr.sort((a, b) => {
    return b.fail - a.fail;
  });
  for (let i = 0; i < stageArr.length; i++) {
    answer.push(stageArr[i].stage);
  }
  return answer;
}

//매서드 방식
function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const answer = new Array(N).fill(1).map((el, i) => {
    const stage = el + i;
    const stageInfo = { stage: stage, users: 0, fail: 0 };

    stages.forEach((user, i) => {
      if (user === stage) {
        stageInfo.users += 1;

        if (stages[i + 1] !== stage) {
          stageInfo.fail = stageInfo.users / stages.length;
          stages.splice(0, stageInfo.users);
        }
      }
    });
    return stageInfo;
  });
  const result = answer
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);

  return result;
}

04;
("예산");

function solution(d, budget) {
  const answer = d
    .sort((a, b) => a - b)
    .filter((price) => {
      budget -= price;
      if (budget >= 0) {
        return price;
      }
    });
  return answer.length;
}
