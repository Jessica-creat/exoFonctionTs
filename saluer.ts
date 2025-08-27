function saluer(prenom: string = "Anonyme"): string {
    
    return `Bonjour, ${prenom} !`;
}


console.log(saluer("Alice"));     
console.log(saluer());             
console.log(saluer(undefined));    