function solution(lottos, win_nums) {
  const rank = [];
  let minRank = 0;
  let count = 0;

  for (let i in win_nums) {
    if (lottos.includes(win_nums[i])) {
      minRank += 1;
    }

    if (lottos[i] === 0) count += 1;
  }

  const maxRank = count + minRank;

  rank.push(7 - (maxRank < 1 ? 1 : maxRank));
  rank.push(7 - minRank >= 6 ? 6 : 7 - minRank);

  return rank.sort();
}
