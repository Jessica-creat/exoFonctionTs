var creerContact = function (nom) { return ({
    id: Date.now().toString(),
    nom: nom
}); };
var contact1 = creerContact("Alice");
console.log(contact1);
var contact2 = creerContact("Bob");
console.log(contact2);
