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
