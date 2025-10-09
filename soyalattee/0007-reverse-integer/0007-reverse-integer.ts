function reverse(x: number): number {
    const isPositive = x > 0 ? 1 : -1;
    const ans = Number(Math.abs(x).toString().split("").reverse().join("")) * isPositive;
    
    if(Math.pow(2,31)>= ans && Math.pow(-2,31)<= ans) return ans;
    return 0;
 
};