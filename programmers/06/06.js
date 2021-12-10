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

05;
("크레인 인형뽑기 게임");

function solution(board, moves) {
  let answer = 0;
  const bucket = [];

  // 크레인이 이동하는 위치값을 구하는 반복문
  for (let i = 0; i < moves.length; i++) {
    for (let l = 0; l < board.length; l++) {
      const doll = board[l][moves[i] - 1];

      // 인형이 있는 칸이 빈칸이 아니라면
      if (doll !== 0) {
        // 방금 뽑은 인형의 위치를 빈칸으로 만들어준다.
        board[l][moves[i] - 1] = 0;

        // 버켓에 넣으려고 하는 인형과 버켓의 마지막 (맨 위에 있는) 인형이 동일한지
        if (bucket[bucket.length - 1] === doll) {
          answer += 2;
          bucket.splice(bucket.length - 1, 1);
          // bucket.pop(); 스플라이스나 팝을 이용해서 마지막에 있는 값 제거해줌.
          break;
        }

        bucket.push(doll);
        break;
      }
    }
  }
  // console.log(answer, bucket)
  return answer;
}

//매서드 방식

function solution(board, moves) {
  let answer = 0;
  const bucket = [];

  moves.forEach((move) => {
    //forEach 는 break처럼 종료를 못시키기 때문에
    // cheak가 false일 때만 forEach를 실행할 수 있게함
    let check = false;

    board.forEach((location) => {
      const doll = location[move - 1];

      if (check === false) {
        if (doll != 0) {
          location[move - 1] = 0;

          if (bucket[bucket.length - 1] === doll) {
            answer += 2;
            bucket.splice(bucket.length - 1, 1);
          } else {
            bucket.push(doll);
          }
          check = true;
        }
      }
    });
  });
  return answer;
}
