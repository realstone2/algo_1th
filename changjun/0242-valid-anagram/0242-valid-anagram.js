/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !==t.length) return false;

    const hashmap = {}


    for(let char of s){
        hashmap[char] = (hashmap[char] || 0) + 1; 
    }

    for(let char of t){

        if(!hashmap[char]){
            return false;
        }
        hashmap[char]--
    }
    return true;
};