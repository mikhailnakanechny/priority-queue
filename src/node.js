class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.parent = null;
        this.left = null;
        this.right = null;
    }

    appendChild(childNode) {
        if (this.left && this.right) {
            return;
        }
        if (this.left) {
            this.right = childNode;
            this.right.parent = this;
        } else {
            this.left = childNode;
            this.left.parent = this;
        }
    }

    removeChild(node) {

    }

    remove() {

    }

    swapWithParent() {

    }
}

module.exports = Node;
