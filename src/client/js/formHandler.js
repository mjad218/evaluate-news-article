function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value;
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(`http://localhost:8081/meaning?url=${formText}`, {
        // body: formText
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = `<pre> ${JSON.stringify(res) }</pre>`;
        console.log(res);
    })
}

export { handleSubmit }
