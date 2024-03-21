// script.js (FORMS ARE NOT WORKING)

document.getElementById('add-item-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Display success message
    const successMessage = document.getElementById('success-message');
    successMessage.classList.remove('hidden');
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 2000);

    // Append submitted data to HTML list
    const itemList = document.getElementById('item-list');
    const listItem = document.createElement('li');
    itemList.appendChild(listItem);
});
