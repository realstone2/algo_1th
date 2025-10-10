/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    let sObj = {}; 

    for(let i = 0; i < s.length; i++){
        if(!sObj[s[i]]){
            sObj[s[i]] = 0;
        }
        sObj[s[i]]++;
    }

      for(let j = 0; j < t.length; j++){
        if(!sObj[t[j]]){
            return false;
        }
        sObj[t[j]]--;
    }

    return true;
};