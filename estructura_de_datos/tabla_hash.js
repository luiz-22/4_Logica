// Tabla Hash
// Función hash (devuelve el índice)
// Guardar el par clave-valor controlando las colisiones
// Devuelver un valor si exite
// Cosultar si hay algo almacenado con esa clave
//
//


// ---------------------------------------- Tabla Hash ----------------------------------------
function HashTable() {
    this.numBuckets = 35
    this.buckets = []
}


// ----------------------------- Función hash (devuelve el índice) ----------------------------
HashTable.prototype.hash = function (key) {
    let acum = 0

    for (let i = 0; i < key.length; i++) {
        acum += key.charCodeAt(i)
    }

    return acum % this.numBuckets
}


// ------------------- Guardar el par clave-valor controlando las colisiones -------------------
HashTable.prototype.set = function (key, value) {
    if (typeof key !== 'string') throw new TypeError('Keys must be strings')

    let index = this.hash(key)

    if (!this.buckets[index]) {
        this.buckets[index] = {}
    }

    this.buckets[index][key] = value
}


// --------------------------------- Devuelver un valor si exite -------------------------------
HashTable.prototype.get = function (key) {
    const index = this.hash(key)
    return this.buckets[index][key]
}


// ------------------------ Cosultar si hay algo almacenado con esa clave ----------------------
HashTable.prototype.hasKey = function (key) {
    const index = this.hash(key)
    return !!this.buckets[index][key]
}



// ------------------------------
const hashTable = new HashTable()

let obj = {
    juan: 25597351,
    alan: 13489223,
    leo: 31269752,
    jose: 18931537
}

hashTable.set("juan", obj.juan)
hashTable.set("leo", obj.leo)
hashTable.set("alan", obj.alan)
hashTable.set("lana", 33597613)

console.log(hashTable)