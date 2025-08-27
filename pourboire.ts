function ajouterPourboire(total: number, tip?: number): number {
    
    if (typeof total !== 'number') {
        throw new Error('Le total doit être un nombre');
    }
    
    if (tip === undefined) {
        
        return total;
    } else {
     
        if (typeof tip !== 'number') {
            throw new Error('Le pourboire doit être un nombre');
        }
        return total + tip;
    }
}

console.log(ajouterPourboire(50));        
console.log(ajouterPourboire(50, 5));    
console.log(ajouterPourboire(50, 0));     
console.log(ajouterPourboire(100, 10));   