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

function displayUser(users){
    const userOutput = document.querySelector('#user-output')
    userOutput.innerHTML = '';
}