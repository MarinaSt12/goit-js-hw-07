const inputElem = document.querySelector('#font-size-control');
console.log(inputElem);

const textElem = document.querySelector('#text');
console.log(textElem);

console.log(inputElem.value);
inputElem.addEventListener('input', function () {
  text.style.fontSize = `${inputElem.value * 0.4}px`;
});
