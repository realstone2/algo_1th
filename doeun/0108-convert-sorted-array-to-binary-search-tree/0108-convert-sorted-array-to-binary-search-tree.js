/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
    // 헬퍼 함수: left와 right 인덱스 범위의 배열을 BST로 변환
    const helper = (left, right) => {
        // 기저 조건: 범위가 유효하지 않으면 null 반환
        if (left > right) return null;
        
        // 중간 인덱스 찾기 (왼쪽으로 치우친 중간값)
        const mid = Math.floor((left + right) / 2);
        
        // 중간 값으로 루트 노드 생성
        const root = new TreeNode(nums[mid]);
        
        // 왼쪽 부분 배열로 왼쪽 서브트리 구성
        root.left = helper(left, mid - 1);
        
        // 오른쪽 부분 배열로 오른쪽 서브트리 구성
        root.right = helper(mid + 1, right);
        
        return root;
    };
    
    // 전체 배열 범위로 시작
    return helper(0, nums.length - 1);
};