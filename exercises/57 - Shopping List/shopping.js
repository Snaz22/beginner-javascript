const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  e.currentTarget.item.value = '';
  //   displayItems();
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      (item) => `<li class="shopping-item">
      <input 
        type="checkbox" 
        value="${item.id}"
        ${item.complete ? 'checked' : ''}
      >
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove ${item.name}"
      value="${item.id}"
      >&times;</button>
  </li>`
    )
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  console.log('Deleting item', id);
  items = items.filter((item) => item.id !== id);
  console.log(items);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markComplete(id) {
  console.log('Marking as complete for', id);
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  console.log(itemRef);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
list.addEventListener('click', (event) => {
  const id = parseInt(event.target.value);
  if (event.target.matches('button')) {
    deleteItem(id);
  }
  if (event.target.matches('input[type="checkbox"]')) {
    markComplete(id);
  }
});

restoreFromLocalStorage();
