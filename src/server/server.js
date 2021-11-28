const express = require('express')
var FormData = require('form-data');

const app = express()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const cors = require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

const getAPIData = async (url) => {

    const formData = new FormData();
    formData.append("key", "");
    formData.append("url",url);
    formData.append("lang", "en"); 

    let data = await fetch("https://api.meaningcloud.com/sentiment-2.1" , {
        method: 'POST',
        body: formData,
        redirect: 'follow',
        headers:{
            'Content-Type': "multipart/form-data"
        }
    });
    data = await data.json();
    return data; 
} 
app.get('/meaning', async (req, res) => {
    console.log(req.query.url);
    const data = await getAPIData(req.query.url); 
    console.log(data);
    console.log(typeof data);
    res.send(JSON.stringify(data))
})
