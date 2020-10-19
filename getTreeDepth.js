function getTreeDepth (tree, parentDeep = 0) {
  if (tree.left && tree.right) {
    return Math.max(getTreeDepth(tree.left, parentDeep), getTreeDepth(tree.left, parentDeep)) + 1
  } else if (tree.left || tree.right) {
    return getTreeDepth(tree.left || tree.right, parentDeep) + 1
  } else {
    return parentDeep
  }
}

console.log(getTreeDepth({left:{right:{},left: {left: {}}}}))