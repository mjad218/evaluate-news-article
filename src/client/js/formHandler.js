const displayResult = (data) => {
    const content = `
        <p> 
            <span>Agreement: </span> <i> ${data.agreement}</i>
        </p>
        <p> 
            <span>Confidence: </span> <i> ${data.confidence}</i>
        </p>
        <p> 
            <span>Irony: </span> <i> ${data.irony}</i>
        </p>
        <p> 
        <span>Score Tag: </span> <i> ${data.score_tag}</i>
        </p>
        <p> 
        <span>Subjectivity: </span> <i> ${data.subjectivity}</i>
        </p>
    `;    
    document.getElementById('results').innerHTML = content;

} 

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value;
    document.getElementById('results').innerHTML = `Loading data...`;
    console.log("::: Form Submitted :::")
    Client.checkForURL(formText) ? 
    fetch(`http://localhost:8081/meaning?url=${formText}`)
    .then(res => res.json())
    .then(function(res) {
        displayResult(res); 
        console.log(res);
    })
    : alert("Please Enter a valid url");
    return true;
}

export { handleSubmit }
