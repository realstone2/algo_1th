/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}

 1. 일단 s와 t의 개수가 맞는지 확인한다. 개수가 틀리면 false
 2. s를 포문을 돌면서 각 글자가 t의 글자의 개수와 같은지 확인한다.

 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    return [...s].sort().join('') === [...t].sort().join('')

};