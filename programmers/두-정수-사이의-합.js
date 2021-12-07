function solution(a, b) {
  const maxNum = Math.max(a, b);
  const minNum = Math.min(a, b);
  return ((maxNum - minNum + 1) / 2) * (maxNum + minNum);
}
