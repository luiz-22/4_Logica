// Nodo
// Pila
// Insertar un elemento
// Sacar un elemento devolviendolo
//
//


// ---------------------------------------- Nodo ----------------------------------------
function Node(value) {
    this.value = value
    this.next = null
}

// ---------------------------------------- Pila ----------------------------------------
function Stack() {
    this.top = null
}

// -------------------------------- Insertar un elemento --------------------------------
Stack.prototype.push = function (value) {
    var newNodo = new Node(value);
    newNodo.next = this.top;
    this.top = newNodo;
}

// --------------------------- Sacar un elemento devolviendolo --------------------------
Stack.prototype.pop = function () {
    if (this.top == null) return null;

    let popNodo = this.top;
    this.top = popNodo.next;

    return popNodo;
}



// ------------------------------
const stack = new Stack()

stack.push(44)
stack.push(13)
stack.push(28)

console.log(stack)