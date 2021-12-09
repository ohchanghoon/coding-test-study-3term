function solution(s) {
  if (s.length == 4 || s.length == 6) {
    for (let i of s) {
      if (!("0" <= i && i <= "9")) return false;
    }
    return true;
  }

  return false;
}
