// Make a div
const newDiv = document.createElement('div');
// add a class of wrapper to it
newDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(newDiv);
// make an unordered list
const uList = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`;

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
newDiv.innerHTML = uList;

// create an image
const image = document.createElement('img');
// set the source to an image
image.src = 'https://picsum.photos/200';
// set the width to 250
image.width = 250;
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = 'Cute Puppy';
// Append that image to the wrapper
newDiv.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const htmlString = `<div>
<p>First Paragraph</p>
<p>Second Paragraph</p>
</div>`;

const uListElement = newDiv.querySelector('ul');
uListElement.insertAdjacentHTML('beforebegin', htmlString);

// add a class to the second paragraph called warning
document.querySelectorAll('p')[1].classList.add('warning');

// remove the first paragraph
document.querySelectorAll('p')[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const playerHtml = `
    <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>They are ${height} and ${age} years old. In dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
  <button class="delete" type="button">Delete</button>
    </div>`;
  return playerHtml;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');

// make 4 player cards using generatePlayerCard
let playerCardsHtml = generatePlayerCard('Sam', 33, 175);
playerCardsHtml += generatePlayerCard('Daniel', 34, 174);
playerCardsHtml += generatePlayerCard('Summer', 10, 140);
playerCardsHtml += generatePlayerCard('Amber', 3, 100);

cardsDiv.innerHTML = playerCardsHtml;
newDiv.insertAdjacentElement('beforebegin', cardsDiv);

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const clickedButton = event.currentTarget;
  clickedButton.parentElement.remove();
}
// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));
