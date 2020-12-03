//* can be incorporated to generate random items for index/show pages.

const getRandomFromArray = (arr, n)  => {
    let result = new Array(n), 
        length = arr.length, //6
        selected = new Array(length)
    
    while (n--) {
        let rnd = Math.floor(Math.random() * length);
        result[n] = arr[ rnd in selected ? selected[rnd] : rnd ];
        selected[n] = --length in selected ? selected[length] : length
    }
    return result;
}


// uncomment to test the function.
// let arr = ["a", "b", "c", "d", "e", "f"]
// getRandomFromArray(arr, 4)
