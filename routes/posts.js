//importo express
const express = require('express');
//creo istanza oggetto rotte
const router = express.Router();
//importo sita posts da posts.js
const listaPosts = require('../data/postsList')

//rotte di crud
// index
router.get('/', function (req, res) {
    res.json({ numeroPosts: listaPosts.length, listaPosts });
});
// show
router.get('/:id', function (req, res) {
    //rendo utilizzabile singolo post usando id
    const postById = parseInt(req.params.id) //uso parse int perche req.params.id mi sertitusce una stringa e io ho bisogna di un numero per rendere vera l'uguaglianza stretta (non ci sarei mai arrivato da solo!)
    //cerco post specifico usando metodo 'find' e usando id specifico recuerparo con req.params.id
    const showById = listaPosts.find((post) => post.id === postById) //sintasssi meootdo find copiata da mdn
    if (!showById) { //SE  showbyid non esiste NOT ritorna messaggio di errore
        return res.status(404).json({ message: 'prodotto non trovato' }); 
    }
    res.json(showById);
});
// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo post'); //da questa rotta di crud uso res.send perche mi restitusce un messaggio/html, sopra uso res.json perche mi deve tornare un oggetto json
});
// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
});
// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});
// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

//esporto istanza rootte
module.exports = router;