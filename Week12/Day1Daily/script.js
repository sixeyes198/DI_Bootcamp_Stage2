const fromCurrencyDropdown = document.getElementById("fromCurrency");
const toCurrencyDropdown = document.getElementById("toCurrency");

async function currency() {
  const firstRespo = await fetch(
    "https://v6.exchangerate-api.com/v6/2cccb9ad25d511c84eb112cc/latest/ILS"
  );
  if (firstRespo.ok) {
    let currencyData = await firstRespo.json();
    console.log(currencyData.conversion_rates);
  } else {
    throw new Error("something went wrong");
  }
}
currency();

async function currencyToPair() {
  const secondRespo = await fetch(
    "https://v6.exchangerate-api.com/v6/2cccb9ad25d511c84eb112cc/pair/ILS/USD"
  );
  if (secondRespo.ok) {
    const currncyExchange = await secondRespo.json();
    console.log(currncyExchange);
  } else {
    throw new Error("Cant find the currency");
  }
}
currencyToPair();
