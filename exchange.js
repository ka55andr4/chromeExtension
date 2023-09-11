const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const apiKEY = "032JbYzW8X6bT9fawByFRg==xvJWOaW1DnSkr9UQ"
const apiUrl= "https://api.api-ninjas.com/v1/exchangerate?pair=USD_"

//convert button 
convert.addEventListener('click', () => {
    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;
    //fetch URL
    fetch (url, {
        headers: {
            'X-API-Key': apiKEY
        }
    })
    //conversion
    .then(response => response.json())
    .then(data => {
        const rate = data.rate;
        const result = amountTotal * rate;
        result.innerHTML = `${amount} ${currency} = ${result.toFixed(2)} USD`; 
    })
    .catch(error => {
        console.error('Request failed:', error);
        result.innerHTML = 'An error occured please try again later.'
    })
})
