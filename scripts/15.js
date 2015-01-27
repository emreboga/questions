/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/

var q15 = (function() {
    return {
        exec: function() {
            return processData(input.balancedBST);
        }
    };

    function processData(input) {
        var input_array = input.split('\n');
        var result = balancedBSTFromSortedArray(input_array.slice(1));
        return result;
    }

    function balancedBSTFromSortedArray(input) {
        if (typeof input === 'undefined' || input === null || input.length < 1) {
            return '';
        }

        var rootValue = input.splice(Math.floor(input.length / 2), 1)[0];
        var root = createNode(rootValue);
        var pivot = root;
        for (var i = 0, l = input.length; i < l; i++) {
            var node = createNode(input[i]);
            insertNode(pivot, node);
            pivot = balanceBST(node);
        }
        return pivot;
    }

    function balanceBST(node) {
        var pivot = node.parent !== null ? node.parent : node;
        if (node.parent !== null && node.parent.parent !== null) {
            if (isBalanced(node.parent.parent)) {
                pivot = balanceBST(node.parent);
            } else {
                if (node.parent.left === node) {
                    if (node.parent.parent.left === node.parent) {
                        // left-left
                        // right-rotate
                        pivot = rotateRight(node.parent.parent);
                    } else {
                        // right-left
                        // right-rotate node.parent + left-rotate node.parent.parent
                        pivot = rotateLeft(rotateRight(node.parent).parent);
                    }
                } else {
                    if (node.parent.parent.left === node.parent) {
                        // left-right
                        // left-rotate node.parent + right-rotate node.parent.parent
                        pivot = rotateRight(rotateLeft(node.parent).parent);
                    } else {
                        // right-right
                        // left-rotate
                        pivot = rotateLeft(node.parent.parent);
                    }
                }
            }
        }
        return pivot;
    }

    function rotateLeft(root) {
        var pivot = root.right;
        root.right = pivot.left;
        pivot.left = root;
        pivot.parent = null;
        if (root.parent !== null) {
            pivot.parent = root.parent;
            if (pivot.parent.left === root) {
                pivot.parent.left = pivot;
            } else {
                pivot.parent.right = pivot;
            }
        }
        root.parent = pivot;
        return pivot;
    }

    function rotateRight(root) {
        var pivot = root.left;
        root.left = pivot.right;
        pivot.right = root;
        pivot.parent = null;
        if (root.parent !== null) {
            pivot.parent = root.parent;
            if (pivot.parent.left === root) {
                pivot.parent.left = pivot;
            } else {
                pivot.parent.right = pivot;
            }
        }
        root.parent = pivot;
        return pivot;
    }

    function isBalanced(node) {
        var right_height = getHeight(node.right);
        var left_height = getHeight(node.left);
        return Math.abs(right_height - left_height) < 2;
    }

    function getHeight(node) {
        if (node === null) {
            return 0;
        }
        var right_height = node.right === null ? 0 : getHeight(node.right);
        var left_height = node.left === null ? 0 : getHeight(node.left);
        return Math.max(left_height, right_height) + 1;
    }

    function insertNode(root, node) {
        if (root !== null) {
            if (node.data > root.data) {
                if (root.right !== null) {
                    insertNode(root.right, node);
                } else {
                    root.right = node;
                    node.parent = root;
                }
            } else {
                if (root.left !== null) {
                    insertNode(root.left, node);
                } else {
                    root.left = node;
                    node.parent = root;
                }
            }
        }
    }

    function createNode(value) {
        var intValue = parseInt(value);
        return {
            data: intValue,
            right: null,
            left: null,
            parent: null
        };
    }
}());
