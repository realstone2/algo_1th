function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(root) {

    /**
     * @param {TreeNode | null} node 현재 검사할 노드
     * @param {bigint | null} min 하한 (strictly greater than)
     * @param {bigint | null} max 상한 (strictly less than)
     * @return {boolean} 유효성 여부
     */
    const validate = (node, min, max) => {
        if (node === null) {
            return true;
        }

        const nodeVal = BigInt(node.val);

        if (min !== null && nodeVal <= min) {
            return false;
        }

        if (max !== null && nodeVal >= max) {
            return false;
        }

        
        const isLeftValid = validate(node.left, min, nodeVal);
        
        const isRightValid = validate(node.right, nodeVal, max);
        
        return isLeftValid && isRightValid;
    };

    return validate(root, null, null);
};