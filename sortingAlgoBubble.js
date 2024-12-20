function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    let comparisons = []; // Store comparisons

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            comparisons.push([arr[i], arr[i + 1]]); // Log comparison
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return { sortedArray: arr, comparisons: comparisons };
}

let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];
let result = bubbleSort(numbers);
console.log("Sorted array:", result.sortedArray);
console.log("Comparison process:", result.comparisons);
          
