function totalPanier(...prix: number[]): number {
   
    if (prix.length === 0) {
        
        return 0;
    }
    
    
    for (const p of prix) {
        if (typeof p !== 'number') {
            throw new Error('Tous les paramètres doivent être des nombres');
        }
    }
    
   
    const total = prix.reduce((accumulateur, valeurCourante) => {
        return accumulateur + valeurCourante;
    }, 0);
    
   
    
    return total;
}


console.log(totalPanier());                   
console.log(totalPanier(10, 20, 30));         
console.log(totalPanier(2.5, 3.75, 1.99));    
console.log(totalPanier(100, 50, 25, 10));    