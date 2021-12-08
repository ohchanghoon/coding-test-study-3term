function solution(numbers) {
  let answer = [];
  let uniqueAnswer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  answer = answer.sort((a, b) => {
    return a - b;
  });

  uniqueAnswer = answer.filter((element, index) => {
    return answer.indexOf(element) === index;
  });

  return uniqueAnswer;
}
