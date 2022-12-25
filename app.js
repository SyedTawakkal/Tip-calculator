const foodMoneyHolder = document.querySelector(".food-money");
const tipPercentageHolder = document.querySelector(".tip");
const amountDisplayer = document.querySelector(".total");
const button = document.querySelector(".button");

const calculator = () => {
  let percentageValue = tipPercentageHolder.value / 100;
  let totalAmount =
    parseInt(foodMoneyHolder.value) +
    parseInt(foodMoneyHolder.value) * percentageValue;
  console.log(percentageValue);
  console.log(totalAmount);
  amountDisplayer.innerHTML = `&#8377; ${totalAmount.toFixed(2)}/-`;
};
button.addEventListener("click", calculator);
