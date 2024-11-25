document.addEventListener('DOMContentLoaded', () => {
    const newItemInput = document.getElementById('new-item');
    const addButton = document.getElementById('add-btn');
    const shoppingList = document.getElementById('shopping-list');
    const clearButton = document.getElementById('clear-list');
  
 
    addButton.addEventListener('click', () => {
      const newItemText = newItemInput.value.trim();
      if (newItemText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <span>🔍 ${newItemText}</span>
          <button class="delete-btn">✖</button>
        `;
        shoppingList.appendChild(listItem);
        newItemInput.value = '';
  
       
        listItem.querySelector('.delete-btn').addEventListener('click', () => {
          listItem.remove();
        });
      }
    });
  
    
    clearButton.addEventListener('click', () => {
      shoppingList.innerHTML = '';
    });
  });