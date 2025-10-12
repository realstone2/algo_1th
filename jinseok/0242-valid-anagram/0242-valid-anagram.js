/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sMap = new Map();
    const tMap = new Map();

    for(let i = 0; i < s.length; i ++){
        const sWord = s[i];

        sMap.set(sWord, (sMap.get(sWord) ?? 0) + 1);
    }

    for(let i = 0; i < t.length; i ++){
        const tWord = t[i];
        
        tMap.set(tWord, (tMap.get(tWord) ?? 0) + 1);
    }


    let result = true

    sMap.forEach((v,key) => {
        if(tMap.get(key) !== v){
            result = false
        }
    })

    tMap.forEach((v,key) => {
        console.log(key, v, sMap.get(key))
        if(sMap.get(key) !== v){
            result = false
        }
    })

    return result;

};