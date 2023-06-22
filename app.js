const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;


app.listen(process.env.PORT ||  port, () => console.log(`Listening on port ${port}`))
app.use(express.static('static'));

app.get('/', (request, respone) => {
    respone.sendFile('index.html', { root : './templates/' });
});

app.get('/contact', (request, respone) => {
    respone.sendFile('contact.html', { root : './templates/' });
});

app.get('/fe', (request, respone) => {
    respone.sendFile('fe.html', { root : './templates/' });
});

app.get('/mart', (request, respone) => {
    respone.sendFile('mart.html', { root : './templates/' });
});

app.get('/anime', (request, respone) => {
    respone.sendFile('anime.html', { root : './templates/' });
});

app.get('/web', (request, respone) => {
    respone.sendFile('web.html', { root : './templates/' });
});

app.get('/ml', (request, respone) => {
    respone.sendFile('ml.html', { root : './templates/' });
});

app.get('/time', (request, respone) => {
    respone.sendFile('time.html', { root : './templates/' });
});


