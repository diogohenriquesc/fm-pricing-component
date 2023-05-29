// Toggle functionality

const pricingInputs = document.querySelectorAll('input[name="pricing"]');
const priceTags = document.querySelectorAll('.plan__price span');
const monthlyPrices = [19.99, 24.99, 39.99];
const annuallyPrices = [199.99, 249.99, 399.99];

let currentSelectedInput;

function swichValues() {
  for (let i = 0; i < priceTags.length; i++) {
    if (currentSelectedInput === 'monthly') {
      priceTags[i].innerText = monthlyPrices[i];
    } else {
      priceTags[i].innerHTML = annuallyPrices[i];
    }
  }
}

pricingInputs.forEach((input) => {
	input.addEventListener('change', () => {
		currentSelectedInput = input.value;
    swichValues();
	});
});


// Fade in animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  })
})

const plansElements = document.querySelectorAll('.plan');
plansElements.forEach((el) => observer.observe(el));

