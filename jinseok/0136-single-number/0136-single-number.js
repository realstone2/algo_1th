/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const dataSet = new Map()

    nums.forEach(v => {
      dataSet.set(v, (dataSet.get(v) ?? 0) + 1);
    })


    for (let [key, value] of dataSet) {
        if(value === 1){
            return key
    }
}
};