const arrondirAuCentime = function (n: number): number {
  
    if (typeof n !== 'number') {
        throw new Error('Le paramètre doit être un nombre');
    }
    
    const arrondi = Math.round(n * 100) / 100;
    
    return arrondi;
};


console.log(arrondirAuCentime(10.567));    
console.log(arrondirAuCentime(5.123));     
console.log(arrondirAuCentime(7));         