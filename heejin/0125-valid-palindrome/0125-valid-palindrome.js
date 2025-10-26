/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    const filteredString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedString = filteredString.split('').reverse().join('');
    return filteredString === reversedString;

};