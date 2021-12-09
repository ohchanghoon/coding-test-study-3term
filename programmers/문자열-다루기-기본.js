function solution(s) {
  const check = /[^0-9]/g;

  return (s.length === 4 || s.length === 6) && !check.test(s) ? true : false;
}
