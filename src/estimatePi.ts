// estimate(4) = 4 * (+ 1/1 – 1/3 + 1/5 – 1/7)
/**
 function calculatePi:
 input: number
 output: number

 declare oddNumArray = []
 
for(i= 1; i < inputNum *2 ; i += 2) do:
    oddNumArray.push(i);
EndFor

let parameter: number;
for amount of elements = oddNumArray.length do:

result = inputNum * ()

 
*/

export function estimatePi(inputNum: number): number {
  let oddNumArray: number[] = [];

  for (let oddNum = 1; oddNum < inputNum * 2; oddNum += 2) {
    oddNumArray.push(oddNum);
  }

  let parameter: number = 0;
  for (let i = 0; i < oddNumArray.length; i++) {
    if (i % 2 === 0) {
      parameter += 1 / oddNumArray[i];
    } else {
      parameter -= 1 / oddNumArray[i];
    }
  }
  const result = Math.floor(4 * parameter * 10000) / 10000;
  return result;
}
