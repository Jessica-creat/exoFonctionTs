// `additionDepenses(a: number, b: number): number` 
  //  → Retourne la somme de deux montants (ex. café + sandwich).

  function additionDepenses(a: number, b: number): number {
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Les deux paramètres doivent être des nombres');
    }
    
 
    const somme = a + b;
    
  
    return somme;
}


console.log(additionDepenses(2.5, 3.75)); 
console.log(additionDepenses(10, 15));    