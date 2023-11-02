function sortMaker(arr){
    if (arr[0] < 0 || arr[1] < 0){
        return 'Invalid Input';
    }
    else {
       if (arr[0] === arr[1]){
        return 'equal';
       }
       else {
            if(arr[0] < arr[1]){
                return arr.reverse();
            }
            else {
                return arr;
            }
       }
    }
}

const numbers = [9, 11];
console.log(sortMaker(numbers))