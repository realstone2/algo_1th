/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // map에 key: 원소 값, value: 값의 갯수를 저장
    const stringMap = new Map();
    for(let i = 0; i < s.length; i++){
        stringMap.set(s[i], (stringMap.get(s[i]) || 0) + 1);
    }

    // value가 1인 key에 해당하는 인덱스를 리턴
    for(let i = 0; i < s.length; i++) {
        if(stringMap.get(s[i]) === 1) {
            return i;
        }
    }
    // value가 1인 key가 없으면 최종적으로 -1 리턴
    return -1;
};