function myAtoi(s: string): number {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    let noSpace = s.trimStart();
    let ans = "";
    for(let i = 0 ; i < noSpace.length; i++){
        if(i === 0 && (noSpace[i] === '-' || noSpace[i] === '+')){
            ans += noSpace[i]
        }else if(noSpace[i] == ' ' || isNaN(Number(noSpace[i]))){
            break;  
        }else{
            ans += noSpace[i];
        }
    }
    if(ans === "" || isNaN(Number(ans))) return 0;

    let num = Number(ans);
    
    if (num < INT_MIN) return INT_MIN;
    if (num > INT_MAX) return INT_MAX;

    return num;
};