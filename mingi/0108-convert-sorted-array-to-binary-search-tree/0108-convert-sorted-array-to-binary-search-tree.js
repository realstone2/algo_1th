/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
    // 헬퍼 함수를 호출하여 변환 작업을 시작합니다.
    return convertToBST(nums, 0, nums.length - 1);
};

/**
 * 배열의 특정 부분 (start부터 end까지)을 BST로 변환하는 재귀 헬퍼 함수
 * @param {number[]} nums 입력 배열
 * @param {number} start 서브 배열의 시작 인덱스
 * @param {number} end 서브 배열의 끝 인덱스
 * @return {TreeNode} 생성된 서브트리의 루트 노드
 */
function convertToBST(nums, start, end) {
    if (start > end) {
        return null;
    }

    const mid = Math.floor((start + end) / 2);

    const root = new TreeNode(nums[mid]);

    root.left = convertToBST(nums, start, mid - 1);
    
    root.right = convertToBST(nums, mid + 1, end);

    return root;
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}