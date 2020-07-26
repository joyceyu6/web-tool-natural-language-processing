function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:3000/test')
    .then(res => {
        console.log(res);
        return res.json()
    })
    .then(function(data) {
        console.log(data);
        console.log(data["titles"]);
        // document.getElementById('results').innerHTML = data.message
        document.getElementById('results').innerHTML = data.titles[0];
    })
}

export { handleSubmit }
