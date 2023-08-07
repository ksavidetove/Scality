function findSumIndices(arr, target) {
    let i = 0;
    let j = 0;

    // loop through the array
    for (i in arr) {
        // convert string index into number
        i = parseInt(i);
        // we stop evaluating if the first index points to a number to big
        if (arr[i] > target) {
            break;
        }

        // loop through the array starting by the next index following i
        // this allows to avoid double evaluations and the evaluation of an index with himself
        for (j = i + 1; j < arr.length; j++) {
            // we stop evaluating if the second index points to a number to big or if the sum is too big
            if (arr[j] > target || arr[i] + arr[j] > target) {
                break;
            }

            if (arr[i] + arr[j] === target)
                return [i, j];
        }
    }
}

console.log(findSumIndices([1,2,3,4,5,6,7,8,9], 12));