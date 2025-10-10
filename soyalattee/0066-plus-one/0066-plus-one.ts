function plusOne(digits: number[]): number[] {
  for(let i = digits.length ; i--; i>=0){
    const curNum = digits[i];
    if(curNum === 9){
        digits[i]=0;
    } else {
        digits[i]++;
        break;
    }
  }
  if(digits[0]===0){
    digits.unshift(1);
  }
  return digits
};