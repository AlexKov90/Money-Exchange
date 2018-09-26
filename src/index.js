// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }
    
    const coins = { H: 50, Q: 25, D: 10, N: 5, P: 1 };
    const setOfCoins = {};
    let money = currency;
       
    for (const key in coins) {
        const count = Math.trunc(money / coins[key]);
        if (count > 0) {
            setOfCoins[key] = count;
        }
        money = money % coins[key]; 
    }
    
    return setOfCoins;
}


