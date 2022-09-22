const butts = document.querySelector('.butts');

butts.addEventListener('click', () => {
  console.log('It got clicked');
});

const buyButtons = document.querySelectorAll('button.buy');
// console.log(buyButtons);

function buyItem(event) {
  console.log(parseFloat(event.target.dataset.price));
}

buyButtons.forEach((button) => button.addEventListener('click', buyItem));
