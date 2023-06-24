
let list = document.querySelector("#parentLi");
//let childs = list.childNodes;
//console.log(childs)
//let childToRemove = childs[3]

let children = list.children;
console.log(children)
let childToRemove = children[1]

list.removeChild(childToRemove)

