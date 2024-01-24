let usersList = [
    {
        name: "Arnold",
        email: "arnold@gmail.com",
        password: "123"
    }
]

let usersListDisplay = document.getElementById("users-list")


// On page load, call the display users function inorder to display all users be default
displayUsers()
console.log(usersList)
// Register a new user
function register() {
    let nameInput = document.getElementById("name")
    let emailInput = document.getElementById("email")
    let passwordInput = document.getElementById("password")
    let newUser = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    }
    usersList.push(newUser)

    console.log(usersList)

    usersListDisplay.innerHTML = ""
    
    displayUsers()
    
    // appendListItem(usersListDisplay, newUser)
}

// Display users
function displayUsers() {
    for (const user of usersList) {

        appendListItem(usersListDisplay, user)

        // // create list item that we shall insert in the single user and then append it to the users list
        // let singleUserDisplay = document.createElement("li")
        // // insert the single user but in html format
        // singleUserDisplay.innerHTML = `
        //     <span>${user.name}</span>
        //     <span>${user.email}</span>
        //     <span>${user.password}</span>
        // `
        // // append created and html inserted list item to the users list
        // usersListDisplay.appendChild(singleUserDisplay)
    }
}

function appendListItem(usersListDisplay, user) {
    // create list item that we shall insert in the single user and then append it to the users list
    let singleUserDisplay = document.createElement("li")
    // insert the single user but in html format
    singleUserDisplay.innerHTML = `
        <span>${user.name}</span>
        <span>${user.email}</span>
        <span>${user.password}</span>
    `
    // append created and html inserted list item to the users list
    usersListDisplay.appendChild(singleUserDisplay)
}