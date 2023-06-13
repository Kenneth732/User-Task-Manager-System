// Create an empty array to store users
let userList = [];

// Select the form element and add a submit event listener
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the values entered in the form fields
    let name = e.target.name.value;
    let img = e.target.img.value;

    // Check if name and img fields are empty
    if (name.trim() === '' || img.trim() === '') {
        alert('Please enter both name and image URL');
        return;
    }

    // Create a new user object with a unique ID
    let newUser = {
        id: generateUniqueId(),
        name: name,
        img: img
    };

    // Add the new user to the userList array
    userList.push(newUser);

    // Call a function to handle displaying the users
    displayUsers(userList);

    // Reset the form fields
    e.target.reset();
});

// Function to generate a unique ID
function generateUniqueId() {
    // You can use a library like uuid or generate a custom ID
    // For simplicity, let's use a timestamp-based ID
    return Date.now().toString();
}

// Function to display the users
function displayUsers(users) {
    // Get the element where the user list will be displayed
    let userListElement = document.getElementById('userList');

    // Clear any existing content
    userListElement.textContent = '';

    // Iterate over the users array and generate HTML for each user
    users.forEach(user => {
        let userElement = document.createElement('div');
        userElement.className = 'userElement';
        userElement.innerHTML = `
            <div class='card' id='${user.id}'> <!-- Add the ID to the user's card -->
                <div class='img-list'>
                    <img src="${user.img}" alt="User Image">
                </div>
                <h3>Name: ${user.name}</h3>
                <button onclick='deleteUser("${user.id}")'>Delete</button> <!-- Add a delete button -->
                <button onclick='editUser("${user.id}")'>Edit</button> <!-- Add an edit button -->
                <button onclick='updateUser("${user.id}")'>Update</button> <!-- Add an update button -->
            </div>
        `;
        userListElement.appendChild(userElement);
    });
}

// Function to delete a user
function deleteUser(userId) {
    // Find the index of the user in the userList array based on the ID
    const userIndex = userList.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
        // Remove the user from the userList array
        userList.splice(userIndex, 1);
        // Call the displayUsers function to update the user list
        displayUsers(userList);
    }
}

// Function to edit a user
function editUser(userId) {
    // Find the user in the userList array based on the ID
    const user = userList.find(user => user.id === userId);

    if (user) {
        // Populate the form fields with the user's data for editing
        document.querySelector('#name').value = user.name;
        document.querySelector('#img').value = user.img;
        // You can store the user ID in a variable to track the edited user
        // and update the user's details when the update button is clicked
        // For simplicity, let's assume it's a global variable called 'editedUserId'
        editedUserId = user.id;
    }
}

// Function to update a user
function updateUser(userId) {
    // Find the user in the userList array based on the ID
    const user = userList.find(user => user.id === userId);

    if (user) {
        // Update the user's data with the values from the form fields
        user.name = document.querySelector('#name').value;
        user.img = document.querySelector('#img').value;
        // Call the displayUsers function to update the user list
        displayUsers(userList);
        // Reset the form fields and clear the editedUserId variable
        document.querySelector('#form').reset();
        editedUserId = null;
    }
}

// Call the displayUsers function initially to show any existing users
displayUsers(userList);
