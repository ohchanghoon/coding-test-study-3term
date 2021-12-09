function solution(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  return answer
    .sort((a, b) => a - b)
    .filter((element, index) => answer.indexOf(element) === index);
}
