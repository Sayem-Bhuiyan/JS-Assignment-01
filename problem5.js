function canPay(price, money){
    let totalTaka = 0;
    for ( let i = 0; i < money.length; i++){
        let taka = money[i];
        totalTaka = totalTaka + taka;
    }
    if( totalTaka > price){
        return true;
    }
    else {
        return false;
    }
}
const price = 10;
const myMoney = [1, 5, 5]
const canIBuy = canPay(price, myMoney);
console.log(canIBuy);