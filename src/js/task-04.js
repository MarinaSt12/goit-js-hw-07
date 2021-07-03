let counterValue = document.getElementById('value');
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
let valueValue = +counterValue.textContent;
increment.addEventListener('click', () => {
  ++valueValue;
  return (counterValue.textContent = valueValue);
});
decrement.addEventListener('click', () => {
  --valueValue;
  return (counterValue.textContent = valueValue);
});
