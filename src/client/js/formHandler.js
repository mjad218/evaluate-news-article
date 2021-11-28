const displayResult = (data) => {
    // agreement: "DISAGREEMENT"
    // confidence: "86"
    // irony: "NONIRONIC"
    // model: "general_en"
    // score_tag: "P"
    // const container = document.createDocumentFragment();
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
    Client.checkForName(formText)
    document.getElementById('results').innerHTML = `Loading data...`;

    console.log("::: Form Submitted :::")
    fetch(`http://localhost:8081/meaning?url=${formText}`, {
        // body: formText
    })
    .then(res => res.json())
    .then(function(res) {
        displayResult(res); 
        console.log(res);
    })
}

export { handleSubmit }
