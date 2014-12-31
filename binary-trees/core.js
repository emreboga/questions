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

function Stack() {
    this.s = [];
}
Stack.prototype.push = function(item) {
    this.s[this.s.length] = item;
};
Stack.prototype.pop = function() {
    return this.s.splice(this.s.length - 1, 1)[0];
};
Stack.prototype.isEmpty = function() {
    return (this.s.length === 0);
};
Stack.prototype.peek = function() {
    return this.s[this.s.length - 1];
};
