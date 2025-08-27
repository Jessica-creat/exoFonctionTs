const upperProduits = (liste: string[]): string[] => 
   
    liste.map(produit => produit.toUpperCase());


console.log(upperProduits(["pommes", "bananes", "lait"])); 


console.log(upperProduits([])); 
