function formatContact(opts: { nom?: string; ville?: string }): string {
   
    const { nom = "Inconnu", ville = "N/A" } = opts;
    
  
    return `${nom} — ${ville}`;
}


console.log(formatContact({ nom: "Alice", ville: "Paris" }));  
console.log(formatContact({ nom: "Bob" }));                    
console.log(formatContact({ ville: "Lyon" }));                 
console.log(formatContact({}));                                
