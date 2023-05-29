const pricingInputs = document.querySelectorAll('input[name="pricing"]');
const priceTags = document.querySelectorAll('.plan__price span');
const monthlyPrices = [19.99, 24.99, 39.99];
const annuallyPrices = [199.99, 249.99, 399.99];

let currentSelectedInput = getSelectedInput();

function getSelectedInput() {
	for (let i = 0; i <= pricingInputs.length; i++) {
		if (pricingInputs[i].checked === true) {
			return pricingInputs[i].value;
		}
	}
}

pricingInputs.forEach((input) => {
	input.addEventListener('change', () => {
		currentSelectedInput = input.value;
    swichValues();
	});
});

function swichValues() {
  for (let i = 0; i < priceTags.length; i++) {
    if (currentSelectedInput === 'monthly') {
      priceTags[i].innerText = monthlyPrices[i];
    } else {
      priceTags[i].innerHTML = annuallyPrices[i];
    }
  }
}
