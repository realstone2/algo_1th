/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // 이진탐색 n의 중간을 집어서 양쪽을 비교한다
        let left = 1;
        let right = n;
        let mid = Math.floor(n / 2)

        while (left !== right) {
            if(isBadVersion(mid)) {
                right = mid;
            } else {
                // 1과 5의 중간은 2이다. 2는 false이므로 오른쪽에 불량이 있다
                // 오른쪽으로 간다 left 1을 2로 바꾼다.
                // right 5는 바꾸지 않는다.
                // mid를 중간 값으로 바꾼다.
                left = mid + 1;
            }
            mid = Math.floor((left + right)/ 2);
        }

        return left
    };
};