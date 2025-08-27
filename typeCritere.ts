
type Critere<T> = (v: T) => boolean;

function filtrer<T>(arr: T[], crit: Critere<T>): T[] {
  
    if (!Array.isArray(arr)) {
        throw new Error('arr doit être un tableau');
    }
    
    if (typeof crit !== 'function') {
        throw new Error('crit doit être une fonction');
    }
    
   
    const resultat: T[] = [];
    
    for (const element of arr) {
        try {
            if (crit(element)) {
                resultat.push(element);
            }
        } catch (error) {
            console.warn('Erreur dans le critère pour élément:', element, error);
        }
    }
    
    return resultat;
}


function depenseEstGrande(n: number): boolean {
    if (typeof n !== 'number' || isNaN(n)) {
        throw new Error('Paramètre must be a valid number');
    }
    return n >= 100;
}


function minLongueur(min: number): (s: string) => boolean {
    if (typeof min !== 'number' || min < 0) {
        throw new Error('min doit être un nombre positif');
    }
    
    return (s: string): boolean => {
        if (typeof s !== 'string') {
            throw new Error('Paramètre must be a string');
        }
        return s.length >= min;
    };
}


console.log('=== TESTS FINAUX ===');
console.log('Mots >= 7 lettres:', filtrer(["café", "épicerie"], minLongueur(7))); 