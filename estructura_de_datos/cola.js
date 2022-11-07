// Nodo
// Cola
// Insertar un nodo a la cola
// Sacar el 1° nodo de la cola devolviéndolo
//
//


// ---------------------------------------- Nodo ----------------------------------------
function Node(value) {
    this.value = value
    this.next = null
}

// ---------------------------------------- Cola ----------------------------------------
function Queue() {
    this.head = null
    this.tail = null
}

// ----------------------------- Insertar un nodo a la cola -----------------------------
Queue.prototype.insert = function (value) {
    const newItem = new Node(value)

    if (this.tail) {
        this.tail.next = newItem
    }

    this.tail = newItem

    if (!this.head) {
        this.head = this.tail
    }
}

// --------------------- Sacar el 1° nodo de la cola devolviéndolo ----------------------
Queue.prototype.get = function () {
    if (!this.head) {
        return null
    }

    const firstNode = this.head

    if (this.head.next) {
        this.head = this.head.next
    } else {
        this.head = null
        this.tail = null
    }

    return firstNode;
}



// ------------------------------
let queue = new Queue()

queue.insert(11)
queue.insert(99)
queue.insert(37)

queue.get()

console.log(queue)