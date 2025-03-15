const merge = (arr1, arr2) => {
    let i = 0,
        j = 0,
        len1 = arr1.length,
        len2 = arr2.length;
    let res = [];

    while (i < len1 && j < len2) {
        if (arr1[i] > arr2[j]) {
            res.push(arr2[j]);
            j++;
        } else {
            res.push(arr1[i]);
            i++;
        }
    }

    while (i < len1) {
        res.push(arr1[i]);
        i++;
    }

    while (j < len2) {
        res.push(arr2[j]);
        j++;
    }

    return res;
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
};
// console.log(merge([1, 10, 50], [1, 2, 14, 99, 100]));
console.log(mergeSort([1, 10, 50, 1, 2, 14, 99, 100]));
