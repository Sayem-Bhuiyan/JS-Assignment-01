// basic math
// input a number and return the cube of input number
function cubeNumber(n){
    if(typeof n !== 'number'){
        return 'Please enter a valid number';
    }
    else {
        return Math.pow(n, 3);
    }
}
const input = 4;
console.log(cubeNumber(input));