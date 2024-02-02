let currencyData; // Declare currencyData globally

const fromCurrencyDropdown = document.getElementById("fromCurrency");
const toCurrencyDropdown = document.getElementById("toCurrency");
const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convertCurrency);

const switchButton = document.getElementById("switchButton");
switchButton.addEventListener("click", switchCurrencies);

function switchCurrencies() {
  const temp = fromCurrencyDropdown.value;
  fromCurrencyDropdown.value = toCurrencyDropdown.value;
  toCurrencyDropdown.value = temp;
}

function convertCurrency() {
  const fromCurrency = fromCurrencyDropdown.value;
  const toCurrency = toCurrencyDropdown.value;
  const amount = document.getElementById("amountInput").value;
  const conversionRate = currencyData.conversion_rates[toCurrency];
  const result = amount * conversionRate;
  document.getElementById(
    "result"
  ).innerText = `${amount} ${fromCurrency} = ${result.toFixed(
    2
  )} ${toCurrency}`;
}

async function currency() {
  try {
    const firstRespo = await fetch(
      "https://v6.exchangerate-api.com/v6/2cccb9ad25d511c84eb112cc/latest/ILS"
    );
    if (firstRespo.ok) {
      currencyData = await firstRespo.json(); // Assign to the global variable
      console.log(currencyData.conversion_rates);
      const currencyRates = currencyData.conversion_rates;
      for (const currencyCode in currencyRates) {
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");

        option1.value = currencyCode;
        option1.text = currencyCode;

        option2.value = currencyCode;
        option2.text = currencyCode;

        fromCurrencyDropdown.add(option1);
        toCurrencyDropdown.add(option2);
      }
    } else {
      throw new Error("something went wrong");
    }
  } catch (e) {
    console.log(e);
  }
}
currency();
