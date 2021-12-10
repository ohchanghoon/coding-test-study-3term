function solution(s) {
	let num = s.length

	if(num === 4 || num === 6){
		return s.split("").every((c)=>!isNaN(c))
	}

	return false;
}