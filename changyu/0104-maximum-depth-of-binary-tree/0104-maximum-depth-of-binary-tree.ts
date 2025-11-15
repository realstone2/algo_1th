function maxDepth(root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;

  while (queue.length) {
    let size = queue.length;
    depth++;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return depth;
}