/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const firstItem = strs[0]
    // 공통 str을 가지고 있는 마지막 인덱스
    let finalIndex = firstItem.length;
    for(let i = 1; i < strs.length; i++){
        for( let j = 0; j < finalIndex; j++) {
            // 0번째 인덱스의 문자열과 이외 문자열의 공통 str 비교
            if(strs[i][j] !== strs[0][j]) {
                // 공통이 없으면 즉시 빈문자열 리턴
                if(j === 0) return "";
                // 마지막 인덱스 갱신
                finalIndex = j;
                // 마지막 인덱스 찾았으니 즉시 해당 포문 탈출
                break;
            }
        }

    }
    return firstItem.slice(0, finalIndex)
};