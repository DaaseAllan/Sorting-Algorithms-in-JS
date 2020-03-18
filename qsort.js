function qsort(arr, left, right) {
    if (left < right) {
        let q = partition(arr, left, right);
        qsort(arr, left, q - 1);
        qsort(arr, q + 1, right);
    }
}

function partition(arr, left, right) {
    partNumb = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
        if (arr[j] < partNumb) {
            // Swaps the value on j and i.
            let buffer = arr[i];
            arr[i] = arr[j];
            arr[j] = buffer;

            i++;
        }
    }
    // Swaps the value on right (the partNumb) and i.
    let buffer = arr[i];
    arr[i] = arr[right];
    arr[right] = buffer;

    return i;
}

let testArr = [3, 5, 1, 6, 1, 9];
qsort(testArr, 0, testArr.length - 1);
console.log(testArr);