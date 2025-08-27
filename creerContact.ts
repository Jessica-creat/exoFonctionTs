const creerContact = (nom: string): { id: string; nom: string } => ({ 
    id: Date.now().toString(), 
    nom: nom 
});

const contact1 = creerContact("Alice");
console.log(contact1); 


const contact2 = creerContact("Bob");
console.log(contact2);
