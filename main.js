let vegetables = [];

//Spread Operator Function to add a new vegetable to the list
const addVegetable = (name, quantity, price) => {
    const newVegetable = { name, quantity, price };
    vegetables = [...vegetables, newVegetable];
};

// Arrow function to display the vegetables in the DOM
const displayVegetables = () => {
    const list = document.getElementById('listing-veg');
    list.innerHTML = '';  // Clear the current list

    if (vegetables.length === 0) {
        list.innerHTML = '<p>No listings available yet.</p>';
    } else {
        const ul = document.createElement('ul');
        vegetables.forEach(({ name, quantity, price }) => {
            const li = document.createElement('li');
            li.innerHTML = `${name}: ${quantity} Kgs - KES ${price} `;
            ul.appendChild(li);
        });
        list.appendChild(ul);
    }
};



// Event listener for form submission
document.getElementById('listing-form').addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent form submission (page reload)

    // Get the form values
    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    // Add the vegetable to the list
    addVegetable(name, quantity, price);

    // Clear the form fields after submission
    document.getElementById('listing-form').reset();

    // Display the updated vegetable list
    displayVegetables();
});
