class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // 작으면 왼쪽, 크면 오른쪽으로 내려가면서 비어 있는 자리에 값을 넣는 것!
  insert(key) {
    if (!this.root) {
      this.root = new Node(key); //트리가 비어 있으면 key가 루트가 된다.
    } else {
      let curr = this.root;

      // 적절한 자리를 찾을 때까지 무한히 반복
      while (true) {
        if (key < curr.val) {
          // 왼쪽으로 내려가는 경우
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = new Node(key);
            break;
          }
        } else {
          // 오른쪽으로 내려가는 경우
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  search(key) {
    let curr = this.root;

    while (curr && curr.val !== key) {
      if (key < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return curr;
  }
}

function solution(list, searchList) {
  const bst = new BST();

  for (const key of list) {
    bst.insert(key);
  }

  const result = [];
  for (const searchVal of searchList) {
    if (bst.search(searchVal)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}
