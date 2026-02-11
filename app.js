const express = require('express');
const app = express();
const port = 3000;
//importo istanza rotte
const rottePosts = require('./routes/posts');
//imporo middleware gestione rotta inseistente
const notFound = require("./middlewares/notFound");

app.use(express.static('public')); //asset statici di expressjs (middleware)

app.use(express.json()); //registro body parser per applicaton/json

//rotta index
app.get('/', (req, res) => { //prima rotta preincipale
    res.send('<h1>rotta di home del nostro blog</h1>')

    //res.send('<h1>Server del mio blog</h1>') //il type di default é 'html'
})

//istanza rotte posts
app.use('/posts', rottePosts);

//registro middleware di gestione rotta insesistenste
app.use(notFound);

// Avvia il server e lo mette in ascolto per richieste HTTP sulla porta specificata
app.listen(port, () => {
    console.log(`esempio di app in ascolto sulla porta ${port}`); //tempalte litteral perche se in ambiente js
})