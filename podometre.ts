export const podometre = {
    pas: 0,

    incrementArrow: (): number => {
        podometre.pas += 1;
        
        
        return podometre.pas;
    }
};


console.log("Valeur initiale :", podometre.pas); 

console.log("Appel incrementArrow :", podometre.incrementArrow()); 
console.log("Appel incrementArrow :", podometre.incrementArrow()); 
console.log("Appel incrementArrow :", podometre.incrementArrow()); 

console.log("Valeur finale :", podometre.pas); 