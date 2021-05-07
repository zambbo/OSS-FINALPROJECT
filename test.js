fetch("https://randomuser.me/api/")
.then(res => res.json())
.then(data => {
    let result = data.results;
    let gender = result[0].gender;
    let email = result[0].email;
    let name = result[0].name.first;

    let div = document.createElement("div");
    let targetElement = document.getElementsByClassName("jumbotron")[0];

    div.innerHTML = `<h1>gender: ${gender}</h1><h2>name: ${name}</h2><h3>email: ${email}</h3>`;

    targetElement.appendChild(div);
})