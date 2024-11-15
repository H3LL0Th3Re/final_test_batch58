function partition(arr, s, e) {
    let pivot = arr[e - 1]; 
    let i = s - 1;  
    for (let j = s; j < e - 1; j++) {
        if (arr[j] < pivot) {  
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[e - 1];
    arr[e - 1] = temp;
    return i + 1;  
}

function quicksort(arr, s, e) {
    if (s < e) {
        let p = partition(arr, s, e);  
        quicksort(arr, s, p);  
        quicksort(arr, p + 1, e);  
    }
}

let array = [2, 1, 3, 4, 5, 7];
let s = 0;
let e = array.length;
quicksort(array, s, e);

for (let i = 0; i < e; i++) {
    console.log(array[i]);
}
