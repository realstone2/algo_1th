function twoSum(nums: number[], target: number): number[] {
    let fir;
    let sec;
    for(let i = 0; i<nums.length ; i++){
        fir = i;
       
        for(let j = i+1; j<nums.length; j++){
            sec = j;
            if(nums[fir]+ nums[sec] === target ) return [fir,sec];
            
        }
    }

};