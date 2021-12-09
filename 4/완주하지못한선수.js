function solution(participant, completion) {
  const runners = {};

  for (let p of participant) {
    runners[p] = runners[p] ? runners[p] + 1 : 1;
  }

  for (let c of completion) {
    runners[c] -= 1;
  }

  for (let r in runners) {
    if (runners[r] === 1) return r;
  }
}
