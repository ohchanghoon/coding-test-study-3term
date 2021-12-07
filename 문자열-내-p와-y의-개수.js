const REG = /[py]/gi;

function numPY(s){
  var result = true;

let pCount = 0;
  let yCount = 0;

  s.match(REG).forEach(chr => {
    chr.toLowerCase() === 'y' ?
      yCount++ :
        pCount++;
  });

  return yCount === pCount;
}


//console.log( numPY("pPoooyY"))
//console.log( numPY("Pyy"))