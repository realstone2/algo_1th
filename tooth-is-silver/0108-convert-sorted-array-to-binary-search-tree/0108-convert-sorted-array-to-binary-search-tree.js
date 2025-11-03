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
var sortedArrayToBST = function(nums) {
    // 빈 배열이면 null 반환
    if (nums.length === 0) return null
    
    // 헬퍼 함수 호출: 전체 배열 범위로 BST 생성
    return buildBST(nums, 0, nums.length - 1);
};

const buildBST = (nums, left, right) => {
    // Base Case: 범위가 유효하지 않으면 null 반환
    // left > right 는 더 이상 처리할 원소가 없다는 의미
    if (left > right) {
        return null;
    }
    
    // 중간 인덱스 계산 (정수 나눗셈)
    // 중간 값을 루트로 선택하면 좌우가 균형잡힘
    const mid = Math.floor((left + right) / 2);
    
    // 중간 값으로 새 노드 생성
    const root = new TreeNode(nums[mid]);
    
    // 왼쪽 서브트리 생성
    // 중간보다 작은 값들(left ~ mid-1)로 구성
    root.left = buildBST(nums, left, mid - 1);
    
    // 오른쪽 서브트리 생성
    // 중간보다 큰 값들(mid+1 ~ right)로 구성
    root.right = buildBST(nums, mid + 1, right);
    
    // 완성된 서브트리의 루트 반환
    return root;
};