function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// async for of loop
async function draw(el) {
  const text = el.textContent;
  let soFar = '';
  for (const letter of text) {
    console.log(letter);
    soFar += letter;
    el.textContent = soFar;
    // wait for some amount of time
    const { typeMin, typeMax } = el.dataset;
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeToWait);
  }
}

// recursion

const els = document.querySelectorAll('[data-type');
els.forEach(draw);
