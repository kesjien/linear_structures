'use strict';
var binaryTree =  function() {
    var createTree = function(data) {
        this._root = new addNode(data);
    }
    var addNode = function(data) {
        this.data = data;
        this.parent = null;
        this.children = [];
    }
    var addChild = function(data) {
        this._root.children.push(new addNode(data));
        this._root.parent = this;
    }
    return this;
}
module.exports = binaryTree();

