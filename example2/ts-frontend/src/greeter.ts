interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): Promise<string> {
    const persons = [];
    persons.push(person);
    return fetch(`hello?first=${person.firstName}&last=${person.lastName}`, { method: 'GET'})
        .then(function (response) {
            return response.text();
        })
}

let user = {firstName: "Jane", lastName: "User"};

greeter(user).then(s => document.body.innerHTML = s);
