var removeDuplicates = function(nums) {
    const unique = [...new Set(nums)];

    nums.length = 0;
    for (let i = 0; i < unique.length; i++) {
        nums.push(unique[i]); 
    }

    return unique.length;
};