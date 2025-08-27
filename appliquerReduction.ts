
const appliquerReduction = (prix: number): number => {
    if (typeof prix !== 'number') {
        throw new Error('Le prix doit être un nombre');
    }
    return prix * 0.9;
};


console.log(appliquerReduction(100));     
console.log(appliquerReduction(50));     
console.log(appliquerReduction(200));    