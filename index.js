const body = document.body

function submitData(name, email) {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }).then(response => response.json())
    .then(obj => body.innerHTML = obj['id'])
    .catch(function(error) {
        alert("Unauthorized Access")
        body.innerHTML = error.message
    })
}

