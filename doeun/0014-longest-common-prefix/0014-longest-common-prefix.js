/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    //사전순으로 정렬 양끝만 비교하면 된다.. 어차피 양끝이 제일 다르게 생겼으니
    const sorted = strs.sort();

    const first = sorted[0];
    const last = sorted[sorted.length - 1];
    
    //공통 알파벳 수집
    const common = []

    for (let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
            common.push(first[i]);
        } else {
            break; // 다른 글자 나오면 종료
        }
    }
    return common.join("");
};