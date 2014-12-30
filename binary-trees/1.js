/*
Given a binary tree, populate the nextRight pointers in each node.
You may assume that it is a full binary tree (ie, each node other than the leaves has two children.)
var node = {
    'left': '',
    'right': '',
    'nextRight': ''
};
*/

var q1 = (function() {
    // Queue implementation
    function Queue() {
        this.q = [];
    }
    Queue.prototype.enqueue = function(item) {
        this.q.unshift(item);
    };
    Queue.prototype.dequeue = function() {
        return this.q.splice(this.q.length - 1, 1)[0];
    };
    Queue.prototype.isEmpty = function() {
        return this.q.length === 0;
    };
    Queue.prototype.peek = function() {
        return this.q[this.q.length - 1];
    };
    function insertNextRight(node) {
        // Variable decleration
        var q,
            lastAddedNode;

        // Check if node or both children are not defined
        // children[0] -> left
        // children[1] -> right
        if (!node || (node.children.length < 2)) {
            return;
        }

        // Init queue, set root node's incLevel and lastAddedNode
        q = new Queue();
        q.enqueue(node);
        node.incLevel = true;
        lastAddedNode = node;

        // Loop as long as the queue is not empty
        while (!q.isEmpty()) {
            // Get the next in the queue
            var n = q.dequeue();
            // Check left and right to enqueue accordingly
            if (n.children[0]) {
                q.enqueue(n.children[0]);
                lastAddedNode = n.children[0];
            }
            if (n.children[1]) {
                q.enqueue(n.children[1]);
                lastAddedNode = n.children[1];
            }
            // Check if level needs to be incremented
            // set nextRight otherwise
            if (!n.incLevel) {
                n.nextRight = q.peek().id;
            } else {
                lastAddedNode.incLevel = true;
            }
        }
        return node;
    }
    return {
        exec: function() {
            return insertNextRight(test.btree);
        }
    };
}());
