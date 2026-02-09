//importo sita posts da posts.js
const listaPosts = require('../data/postsList')

function index(req, res) {
    res.json({ numeroPosts: listaPosts.length, listaPosts });
}
function show(req, res) {
    //rendo utilizzabile singolo post usando id
    const postById = parseInt(req.params.id) //uso parse int perche req.params.id mi sertitusce una stringa e io ho bisogna di un numero per rendere vera l'uguaglianza stretta (non ci sarei mai arrivato da solo!)
    //cerco post specifico usando metodo 'find' e usando id specifico recuerparo con req.params.id
    const showById = listaPosts.find((post) => post.id === postById) //sintasssi meootdo find copiata da mdn
    if (!showById) { //SE  showbyid non esiste NOT ritorna messaggio di errore
        return res.status(404).json({ message: 'prodotto non trovato' });
    }
    res.json(showById);
}
function store(req, res) {
    res.send('Creazione nuovo post'); //da questa rotta di crud uso res.send perche mi restitusce un messaggio/html, sopra uso res.json perche mi deve tornare un oggetto json
}
function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
}
function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}
function destroy(req, res) {
    res.send('Eliminazione del post ' + req.params.id);
}
// esportiamo tutto
module.exports = { index, show, store, update, modify, destroy }