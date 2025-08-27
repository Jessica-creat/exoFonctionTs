export function convertirHeure(hhmm: string): number;
export function convertirHeure(minutes: number): string;
export function convertirHeure(v: number | string): number | string {
    
   
    if (typeof v === 'string') {
        return convertirStringVersMinutes(v);
    }
    
    
    if (typeof v === 'number') {
        return convertirMinutesVersString(v);
    }
    
    throw new Error('Paramètre invalide');
}


function convertirStringVersMinutes(hhmm: string): number {
    
    const regex = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;
    if (!regex.test(hhmm)) {
        throw new Error('Format invalide. Utilisez "HH:MM" (ex: "13:45")');
    }
    
   
    const [heuresStr, minutesStr] = hhmm.split(':');
    const heures = parseInt(heuresStr, 10);
    const minutes = parseInt(minutesStr, 10);
    
    
    if (heures < 0 || heures > 23 || minutes < 0 || minutes > 59) {
        throw new Error('Heures (0-23) ou minutes (0-59) invalides');
    }
    
   
    return heures * 60 + minutes;
}


function convertirMinutesVersString(minutesTotal: number): string {
    
    if (minutesTotal < 0 || minutesTotal > 1439) { // 23*60 + 59 = 1439
        throw new Error('Minutes doivent être entre 0 et 1439');
    }
    
    if (!Number.isInteger(minutesTotal)) {
        throw new Error('Le nombre de minutes doit être un entier');
    }
    
    
    const heures = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;
    
    
    const heuresStr = heures.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');
    
    
    return `${heuresStr}:${minutesStr}`;
}

console.log("=== TESTS DE CONVERSION ===");


try {
    console.log('"13:45" →', convertirHeure("13:45"));     
    console.log('"07:05" →', convertirHeure("07:05"));      
    console.log('"00:00" →', convertirHeure("00:00"));      
    console.log('"23:59" →', convertirHeure("23:59"));      
} catch (error) {
    console.error('Erreur:', error.message);
}


try {
    console.log('825 →', convertirHeure(825));              
    console.log('425 →', convertirHeure(425));             
    console.log('0 →', convertirHeure(0));                 
    console.log('1439 →', convertirHeure(1439));           
} catch (error) {
    console.error('Erreur:', error.message);
}
