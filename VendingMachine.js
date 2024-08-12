function getChange(price_of_item, money_given_to_purchase) {
    const price = price_of_item * 100;
    const money = money_given_to_purchase * 100;

 
    let change = money - price;
    const coins = [1, 5, 10, 25, 50, 100];
    const result = [0, 0, 0, 0, 0, 0];


    for (let i = coins.length - 1; i >= 0; i--) {
        const coinValue = coins[i];
        if (change >= coinValue) {
            result[i] = Math.floor(change / coinValue);
            change %= coinValue;
        }
    }

    return result;
}


const price_of_item = 2.99; 
const money_given_to_purchase = 5; 
const change = getChange(price_of_item, money_given_to_purchase);
console.log(change); 
