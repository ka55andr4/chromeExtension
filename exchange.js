document.addEventListener('DOMContentLoaded', function(){
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const apiKEY = "032JbYzW8X6bT9fawByFRg==xvJWOaW1DnSkr9UQ"
const apiUrl= "https://api.api-ninjas.com/v1/exchangerate?pair=USD_"

//convert button 
convert.addEventListener('click', () => {
    console.log('hi')
    const amountTotal = amount.value;
    console.log('total', amountTotal)
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;
    console.log('url', url)
    //fetch URL
    fetch (url, {
        headers: {
            'X-API-Key': apiKEY
        }
    })
    //conversion
    .then(response => response.json())
    .then(data => {
        const rate = data.exchange_rate;
        console.log('rate', rate)
        const resultPrice = amountTotal * rate;
        console.log ('result', resultPrice)
        result.innerHTML = `${amountTotal} USD = ${resultPrice.toFixed(2)} ${currencyTotal}`;  
    })
    .catch(error => {
        console.error('Request failed:', error);
        result.innerHTML = 'An error occured please try again later.'
    })
 })
})
