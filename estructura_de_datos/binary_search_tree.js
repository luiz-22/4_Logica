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


// ------------------------------

const tree = new BinarySearchTree(8)
//const tree = new BinarySearchTree(20)

let valuesToInsert = [3, 10, 1, 6, 14, 4, 7, 13];
//let valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];

for (let i = 0; i < valuesToInsert.length; i++) {
    tree.insert(valuesToInsert[i])
}

console.log(tree)
