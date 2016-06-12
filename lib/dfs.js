var bst = require("binaryTree.js");
function Node(data) {
     this.data = data;
     this.parent = null;
     this.children = [];
}
function Tree(data) {
     var node = new Node(data);
     this._root = node;
}
 function addChild(data) {
     this._root.children.push(new Node(data));
     this._root.parent = this;
}

var tree = new Tree('br1');
addChild.call(tree, 'br2');
addChild.call(tree, 'br3');
addChild.call(tree, 'br4');
addChild.call(tree, 'br5');
addChild.call(tree, 'br6');
addChild.call(tree, 'br7');
addChild.call(tree, 'br8');
addChild.call(tree, 'br9');
addChild.call(tree, 'br10');

function dfs(root) {
    if (root === null) return false;
    var stack = [];
    stack.push(root._root);
    while(stack.length>0){
        var elem = stack.pop();
        console.log(elem.data)
        for (var i = 0, length = elem.children.length; i < length; i++) {
            stack.push(elem.children[i])
        }
    }
}
dfs(tree)
