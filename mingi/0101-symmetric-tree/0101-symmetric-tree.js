/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric_Iterative = function(root) {
    if (!root) {
        return true;
    }
    
    const queue = [];
    queue.push(root.left);
    queue.push(root.right);

    while (queue.length > 0) {
        const t1 = queue.shift();
        const t2 = queue.shift();

        if (t1 === null && t2 === null) {
            continue;
        }

        if (t1 === null || t2 === null || t1.val !== t2.val) {
            return false;
        }

        queue.push(t1.left);
        queue.push(t2.right);

        queue.push(t1.right);
        queue.push(t2.left);
    }

    return true;
};