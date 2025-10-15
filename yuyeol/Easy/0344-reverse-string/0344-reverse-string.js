/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let temp;
    let rear = s.length - 1;
    for(let front = 0; front < s.length / 2; front++) {
        temp = s[rear];
        s[rear] = s[front];
        s[front] = temp;
        rear--
    }
};