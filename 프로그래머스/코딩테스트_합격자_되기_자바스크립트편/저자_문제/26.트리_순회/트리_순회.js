function preorder(nodes, idx) {
  // 전위 순회 => 부모-왼-오

  if (idx < nodes.length) {
    let ret = `${nodes[idx]} `;
    ret += preorder(nodes, idx * 2 + 1); // 왼
    ret += preorder(nodes, idx * 2 + 2); // 오
    return ret;
  }

  return '';
}

function inorder(nodes, idx) {
  // 중위 순회 => 왼-부모-오
  if (idx < nodes.length) {
    let ret = inorder(nodes, idx * 2 + 1);
    ret += `${nodes[idx]} `;
    ret += inorder(nodes, idx * 2 + 2);
    return ret;
  }

  return '';
}

function postorder(nodes, idx) {
  // 후위 순회 => 왼-오-부모
  if (idx < nodes.length) {
    let ret = postorder(nodes, idx * 2 + 1);
    ret += postorder(nodes, idx * 2 + 2);
    ret += `${nodes[idx]} `;

    return ret;
  }

  return '';
}

function solution(nodes) {
  const 전위 = preorder(nodes, 0);
  const 중위 = inorder(nodes, 0);
  const 후위 = postorder(nodes, 0);

  return [전위.slice(0, -1), 중위.slice(0, -1), 후위.slice(0, -1)];
}
/*
이진 탐색 트리가 아닌 이진 트리임을 잊지말자!
*/
