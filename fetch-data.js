async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        const userlist = document.createElement("url");
        dataContainer.innerHTML = '';
        users.forEach((user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userlist.appendChild(listItem);
            
        }));
        dataContainer.appendChild(userlist);
        console.log(userlist);
    } catch (error){
        dataContainer.innerHTML = '';
        dataContainer.textContent= 'Failes to load user data.'
    }
}
document.addEventListener('DOMContentLoaded', fetchUserData);