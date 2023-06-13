let taskList = [];

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let img = e.target.img.value;

    if(name.trim() === '' || img.trim() === ''){
        alert('Please enter both name and image URL');
        return;
    }
    let newUser = {
        id: generateUniqueId(),
        name: name,
        img: img
    }

    taskList.push(newUser);
    displayUser();
    e.target.reset();
});

function generateUniqueId(){
    return Date.now().toString();
}

function displayUser(users){
    const userOutput = document.querySelector('#user-output')
    userOutput.innerHTML = '';

    users.map((user) => {
        const userElement = document.createElement('div');
        userElement.className = 'userElement';
        userElement.innerHTML = `
        
        <div class='card' id='${user.id}'> <!-- Add the ID to the user's card -->
          <div class='img-list'>
            <img src="${user.img}" />
          </div>
          <h3>Name: ${user.name}</h3>
          <button onclick='deleteUser("${user.id}")'>Delete</button> <!-- Add a delete button -->
          <button onclick='editUser("${user.id}")'>Edit</button> <!-- Add an edit button -->
          <button onclick='updateUser("${user.id}")'>Update</button> <!-- Add an update button -->
        </div>
        `;
    })
    userOutput.appendChild(userElement)
}

function