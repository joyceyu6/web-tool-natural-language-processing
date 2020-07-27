function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if (!Client.checkForName(formText)){
        alert("this is not a president");
        return;
    }
          

    console.log("::: Form Submitted :::")
    fetch(`http://localhost:3000/test?name=${formText}`)
    .then(res => {        
        return res.json()
    })
    .then(function(data) {        
        // document.getElementById('results').innerHTML = data.message
        document.getElementById('results').innerHTML = data.titles;
    })
}

export { handleSubmit }
