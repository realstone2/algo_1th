/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 선가공
    const processedS = s.trim().toLowerCase().replace(/[^a-z0-9]/g, '')
    // 투포인터 사용
    let rear = processedS.length - 1;
    for (let front = 0; front < processedS.length / 2; front++) {
        // 앞뒤 값이 같으면 계속진행
        if(processedS[front] === processedS[rear]) rear-- 
        // 다르면 즉시 false 리턴
        else return false;
    }
    // 가공된 string의 모든 자리 값이 대칭이라면 조건을 충족하므로 true 리턴
    return true;
};