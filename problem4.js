function findAddress(obj){
    if ( typeof obj !== 'object'){
        return "Please provide a valid object";
    }
    const streetNo = obj.street || '__';
    const houseNo = obj.house || '__';
    const societyNO = obj.society || '__';

    const address = streetNo+','+houseNo+','+societyNO;
    return address;
}

const object = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}
const address = findAddress(object);
console.log(address);


// output: 10,15A,Earth Perfect