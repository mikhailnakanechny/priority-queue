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
        let parentOfParent = parent.parent;
        let rightChild = parent.right;

        if (parent && parentOfParent) {
            if (!this.parent.parent.right) {
                let buffer = this.parent.parent;
                this.parent.parent = this;
                this.parent = buffer;
            } else if (this.parent.parent.left === this.parent) {
                this.parent.parent.left = this;
                this.parent.left = null;
                this.left = this.parent;
                this.parent = this.parent.parent;
            } else if (this.parent.parent.right === this.parent) {
                this.parent.parent.right = this;
                this.parent.left = null;
                this.left = this.parent;
                this.parent = this.parent.parent;
            }
        }

        if (parent && !parentOfParent && !rightChild) {
            this.parent.parent = this;
            this.parent = null;
        } else if (parent && !parentOfParent && rightChild) {
            if (!this.left) {
                this.parent.left.parent = this;
                this.parent.parent = this;
                this.parent = null;

            } else {
                this.parent.right.parent = this;
                this.parent.parent = this;
                this.left.parent = this.parent;
                this.parent.left = this.left;
                this.left = this.parent;
                this.right = this.parent.right;
                this.parent.right = null;
                this.parent = null;
            }
        }


    }
}

module
    .exports = Node;
