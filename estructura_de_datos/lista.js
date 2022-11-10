// Nodo
// Lista enlazada
// Insertar un nodo al principio
// Insertar un nodo al final
// Insertar un nodo según posición
// Imprimir la lista
// Largo de la lista
// Quitar el último nodo y devolver su valor
// Invertir lista
//
//


// ---------------------------------------- Nodo ----------------------------------------
function Node(value) {
    this.value = value
    this.next = null
}

// ----------------------------------- Lista enlazada -----------------------------------
function List() {
    this.head = null
}

// ---------------------------- Insertar un nodo al principio ---------------------------
List.prototype.addFirst = function (value) {
    if (this.head === null) {
        this.head = new Node(value)
        return
    }

    let newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
}

// ------------------------------ Insertar un nodo al final -----------------------------
List.prototype.addLast = function (value) {
    let newNodo = new Node(value);
    if (this.head == null) {
        this.head = newNodo;
    } else {
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNodo;
    }
}

// --------------------------- Insertar un nodo según posición --------------------------
// Si encuentra la posición (dentro del largo de la lista), agrega el nodo y devuelve 
//true, si no false
List.prototype.addInPos = function (value, index) {
    if (index > this.size()) {
        return false
    }

    if (index === 0) return this.addFirst(value);

    const node = new Node(value);
    let current = this.head;
    let count = 0;
    let previous;
    while (count < index) {
        count++;
        previous = current;
        current = current.next
    }

    previous.next = node;
    node.next = current;
    return true;
}


// --------------------------------- Imprimir la lista ----------------------------------
List.prototype.print = function () {
    current = this.head;

    if (!current) {
        console.log('La lista esta vacía.')
        return
    }

    while (current.next != null) {
        console.log(current.value);
        current = current.next;
    }

    console.log(current.value)
}

// --------------------------------- Largo de la lista ----------------------------------
List.prototype.size = function (current = this.head, acum = 1) {
    if (this.head === null) {
        return 0
    }

    if (current.next !== null) {
        return this.size(current.next, acum = acum + 1)
    }

    return acum
}

// --------------------- Quitar el último nodo y devolver su valor ----------------------
List.prototype.removeLast = function () {
    let current = this.head
    let val = null

    // Lista vacía
    if (!current) {
        return null
    }

    // Tengo un elemento
    if (!current.next) {
        val = current.value
        this.head = null
        return val
    }

    // Tengo más de un elemento
    while (current.next.next) {
        current = current.next
    }

    val = current.next.value
    current.next = null
    return val
}

// ----------------------------------- Invertir lista -----------------------------------
List.prototype.reverse = function () {
    let valores = [];
    let current = this.head;

    while (current !== null) {
        valores.push(current.value);
        current = current.next;
    }

    while (this.head !== null) {
        this.removeLast();
    }

    while (valores.length > 0) {
        this.addLast(valores.pop());
    }
}



// ------------------------------
const list = new List()

list.addLast(15)
list.addLast(7)
list.addLast(24)

list.print()
console.log(list)

