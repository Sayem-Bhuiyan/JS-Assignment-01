function matchFinder(str1, str2){
    if(typeof str1 !== 'string' || typeof str2 !== 'string'){
        return 'Please enter a valid string';
    }
    else{
        if(str1.includes(str2)){
            return true;
        }
        else {
            return false;
        }
    }
}

const string1 = 'John Doe';
const string2 = 'ohn';
const isAvailabe = matchFinder(string1, string2);
console.log(isAvailabe);