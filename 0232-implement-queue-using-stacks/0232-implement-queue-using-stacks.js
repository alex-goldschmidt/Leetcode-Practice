
var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop()
//  Removes element from front of queue/top of stack2 and returns it
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2[this.stack2.length-1]
//  Returns element at front of queue/top of stack2 
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (this.stack1.length === 0 && this.stack2.length === 0)
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */