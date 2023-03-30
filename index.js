const BASE_URL = "http://localhost:3000/users";
const body = document.querySelector('body');

const submitData = (name, email) => {
    fetch(BASE_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        }),
    })
    .then((response) => response.json())
    .then((object) => {
        const h1 = document.createElement('h1');
        h1.textContent = object.id;
        body.appendChild(h1);
    })
    .catch((error) => {
        console.log(error);
        document.body.innerHTML = error;
    })
};

submitData('Kelvin', 'kelvin.nyoike@student.moringaschool.com');
