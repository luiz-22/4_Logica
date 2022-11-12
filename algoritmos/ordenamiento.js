// Bubble Sort              // O(n^2)
// Insertion Sort           // O(n^2)
// Selection Sort           // O(n^2)
// Quick Sort               // O(n log n)
// Merge Sort               // O(n log n)
//
//


// ------------------------------------ Bubble Sort -------------------------------------
function bubbleSort(array) {
    var swap = true

    while (swap) {
        swap = false
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                var aux = array[i]
                array[i] = array[i + 1]
                array[i + 1] = aux
                swap = true
            }
        }
    }

    return array
}

let arrayBubleSort = [5, 1, 4, 2, 8]

console.log(bubbleSort(arrayBubleSort))

// ----------------------------------- Insertion Sort -----------------------------------
function insertionSort(array) {

    for (var i = 1; i < array.length; i++) {
        var j = i - 1
        var aux = array[i]

        while (j >= 0 && array[j] > aux) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = aux
    }

    return array
}

let arrayInsertionSort = [5, 1, 4, 2, 8]

console.log(insertionSort(arrayInsertionSort))

// i = 1
// j = 0
// 5 1 4 2 8
// ^


// ----------------------------------- Selection Sort -----------------------------------
function selectionSort(array) {

    for (var i = 0; i < array.length - 1; i++) {
        let posMin = i
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[posMin]) {
                posMin = j
            }
        }

        var aux = array[i]
        array[i] = array[posMin]
        array[posMin] = aux
    }

    return array
}

let arraySelectionSort = [5, 1, 4, 2, 8]

console.log(selectionSort(arraySelectionSort))

// ------------------------------------- Quick Sort -------------------------------------
function quickSort(array) {
    // Caso base
    if (array.length <= 1) return array

    var pivot = array[0]
    var left = []
    var right = []

    for (var i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    // Recursión
    return quickSort(left).concat(pivot).concat(quickSort(right))
}

let arrayQuickSort = [5, 1, 4, 2, 8]

console.log(quickSort(arrayQuickSort))

// ------------------------------------- Merge Sort -------------------------------------
function merge(left, right) {
    var leftIndex = 0
    var rightIndex = 0
    var arrayResult = []

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            arrayResult.push(left[leftIndex])
            leftIndex++
        } else {
            arrayResult.push(right[rightIndex])
            rightIndex++
        }
    }

    return arrayResult.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

function mergeSort(array) {
    // Caso base
    if (array.length === 1) return array

    var middlePos = Math.floor(array.length / 2)
    var left = array.slice(0, middlePos)
    var right = array.slice(middlePos)

    // Recursión
    return merge(mergeSort(left), mergeSort(right))
}

let arrayMergeSort = [5, 1, 4, 2, 8]

console.log(mergeSort(arrayMergeSort))