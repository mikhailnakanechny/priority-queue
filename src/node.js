class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.parent = null;
        this.left = null;
        this.right = null;
    }

    appendChild(node) {
        if (this.left && this.right) {
            return;
        }
        if (this.left) {
            this.right = node;
            this.right.parent = this;
        } else {
            this.left = node;
            this.left.parent = this;
        }
    }

    removeChild(node) {
        if (this.left === node) {
            this.left.parent = null;
            this.left = null;
            return;
        }

        if (this.right === node) {
            this.right.parent = null;
            this.right = null;
            return;
        }

        throw new Error('passed node is not a child of this node');
    }

    remove() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    }

    swapWithParent() {
        if (!this.parent) {
            return;
        }

        let parent = this.parent;
        let parentOfParent = this.parent.parent;
        let leftChild = parent.left;
        let rightChild = parent.right;

        if (parent && parentOfParent) {
            let buffer = this.parent.parent;
            this.parent.parent = this;
            this.parent = buffer;
        }

        if (parent && !parentOfParent && !rightChild) {
            this.parent.parent = this;
            this.parent = null;
        }
        else if (parent && !parentOfParent && rightChild){
            this.parent.left.parent = this;
            this.parent.parent = this;
            this.parent = null;
        }




    }
}

module.exports = Node;
