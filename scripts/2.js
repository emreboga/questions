/*
Given a binary tree, find its maximum height.
*/

var q2 = (function() {
    return {
        exec: function() {
            var btree = $.extend(true, {}, input.btree);
            return getMaxheight(btree);
        }
    };

    function getMaxheight(node) {
        var height = 0,
            maxheight = 0,
            stack = new Stack();
        if (node) {
            stack.push(node);
            height += 1;
            while (!stack.isEmpty()) {
                var current = stack.pop();
                if (!current.isVisited) {
                    current.isVisited = true;
                    if (current.children && current.children.length > 0) {
                        if (current.children[0]) {
                            stack.push(current.children[0]);
                        }
                        if (current.children[1]) {
                            stack.push(current.children[1]);
                        }
                        height += 1;
                    } else {
                        if (height > maxheight) {
                            maxheight = height;
                        }
                        height -= 1;
                    }
                }
            }
            if (height > maxheight) {
                maxheight = height;
            }
        }
        return maxheight;
    }
}());
