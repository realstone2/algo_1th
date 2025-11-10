/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

// 이진 탐색의 문제 
var solution = function(isBadVersion: (version: number) => boolean) {
    return function(n: number): number {
        let left = 1;
        let right = n;

        while (left < right) {
            // 중간 인덱스 계산 (overflow 방지)
            const mid = Math.floor(left + (right - left) / 2);

            if (isBadVersion(mid)) {
                // mid가 불량이라면 왼쪽 절반 탐색 (mid 포함)
                right = mid;
            } else {
                // mid가 정상이라면 오른쪽 절반 탐색
                left = mid + 1;
            }
        }

        // left === right 첫 번째 불량 버전
        return left;
    };
};