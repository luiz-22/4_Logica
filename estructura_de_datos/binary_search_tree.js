// Árbol binario de búsqueda
// Insertar un nodo
// Altura
// Cuantos nodos tiene
// Contiene un cierto elemento
// Balanceado
// Búsqueda en profundidad
// Búsqueda en anchura
//
//


// ----------------------------- Árbol binario de búsqueda ------------------------------
function BinarySearchTree(value) {
    this.value = value
    this.left = null
    this.right = null
}

// ---------------------------------- Insertar un nodo ----------------------------------
BinarySearchTree.prototype.insert = function (value) {

    let current = this

    if (current.value > value) {
        if (current.left === null) {
            let nodeTree = new BinarySearchTree(value)
            current.left = nodeTree
            return
        }
        current.left.insert(value)
    } else {
        if (current.right === null) {
            let nodeTree = new BinarySearchTree(value)
            current.right = nodeTree
            return
        }
        current.right.insert(value)
    }
}

// --------------------------------------- Altura ---------------------------------------
BinarySearchTree.prototype.height = function () {
    let lh = !this.left ? 0 : this.left.height();
    let rh = !this.right ? 0 : this.right.height();
    return 1 + Math.max(lh, rh);
}

// --------------------------------- Cuantos nodos tiene --------------------------------
BinarySearchTree.prototype.size = function () {

    let tree = this

    if (tree.left === null && tree.right === null) {
        return 1
    }

    if (tree.left === null) {
        return 1 + tree.right.size()
    }


    if (tree.right === null) {
        return 1 + tree.left.size()
    }

    return 1 + tree.left.size() + tree.right.size()
}

// ----------------------------- Contiene un cierto elemento ----------------------------
BinarySearchTree.prototype.contains = function (value) {
    let tree = this

    if (tree.value === value) {
        return true
    }

    if (tree.value > value) {
        if (tree.left === null) {
            return false
        } else {
            return tree.left.contains(value)
        }
    } else {
        if (tree.right === null) {
            return false
        } else {
            return tree.right.contains(value)
        }
    }
}

// ------------------------------------- Balanceado -------------------------------------
BinarySearchTree.prototype.balanced = function () {
    if (this.right === null && this.left !== null && this.left.height() >= 2) return false;
    if (this.left === null && this.right !== null && this.right.height() >= 2) return false;
    let izq = this.left.height();
    let der = this.right.height();
    if (izq - der >= 2 || der - izq >= 2) return false;
    return true;
}

// ------------------------------- Búsqueda en profundidad ------------------------------
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
    if (!order || order === 'in-order') {
        this.left && this.left.depthFirstForEach(cb, order)
        cb(this.value)
        this.right && this.right.depthFirstForEach(cb, order)
    } else if (order === 'pre-order') {
        cb(this.value)
        this.left && this.left.depthFirstForEach(cb, order)
        this.right && this.right.depthFirstForEach(cb, order)
    } else { // post-order
        this.left && this.left.depthFirstForEach(cb, order)
        this.right && this.right.depthFirstForEach(cb, order)
        cb(this.value)
    }
}

// --------------------------------- Búsqueda en anchura --------------------------------
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
    cb(this.value)

    if (this.left) array.push(this.left)
    if (this.right) array.push(this.right)

    array.length && array.shift().breadthFirstForEach(cb, array)
}



// ------------------------------
const tree = new BinarySearchTree(8)
//const tree = new BinarySearchTree(20)

let valuesToInsert = [3, 10, 1, 6, 14, 4, 7, 13];
//let valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];

for (let i = 0; i < valuesToInsert.length; i++) {
    tree.insert(valuesToInsert[i])
}

let arrayInOrder = []
let arrayPreOrder = []
let arrayPostOrder = []
let arrayAnchura = []

tree.depthFirstForEach(function (val) {
    arrayInOrder.push(val)
})

tree.depthFirstForEach(function (val) {
    arrayPreOrder.push(val)
}, 'pre-order')

tree.depthFirstForEach(function (val) {
    arrayPostOrder.push(val)
}, 'post-order')

tree.breadthFirstForEach(function (val) {
    arrayAnchura.push(val)
})

console.log(arrayInOrder)
console.log(arrayPreOrder)
console.log(arrayPostOrder)
console.log(arrayAnchura)
