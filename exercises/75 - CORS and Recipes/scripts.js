// The Recipe Puppy API used in the course is broken
// Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"

const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const response = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await response.json();
  return data;
}

async function handleSubmit(e) {
  e.preventDefault();
  const el = e.currentTarget;
  console.log(form.query.value);
  fetchAndDisplay(form.query.value);
}

async function fetchAndDisplay(query) {
  form.submit.disabled = true;
  const recipes = await fetchRecipes(query);
  console.log(recipes);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
  console.log('Creating HTML');
  const html = recipes.map(
    (recipe) => `<div class="recipe">
      <h2>${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
      ${
        recipe.thumbnail &&
        `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`
      }
      <a href ="${recipe.href}">View Recipe -></a>
    </div>`
  );
  recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);
fetchAndDisplay('pizza');
