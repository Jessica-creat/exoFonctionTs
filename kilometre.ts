function toKilometers(v: number | string): string {
  
    if (typeof v === 'number') {
        return `${v}km`;
    } else if (typeof v === 'string') {
        if (v.includes('km')) {
            return v;
        } else { 
            const nombre = parseFloat(v);
            if (!isNaN(nombre)) {
                return `${nombre}km`;
            } else {
                throw new Error('La chaîne doit représenter un nombre');
            }
        }
    } else {
        throw new Error('Le paramètre doit être un nombre ou une chaîne');
    }
}


console.log(toKilometers(5));     
console.log(toKilometers("5km"));  
console.log(toKilometers("10"));   