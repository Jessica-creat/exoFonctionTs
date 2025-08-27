function erreurFatale(message: string): never {
 
    if (typeof message !== 'string') {
       
        throw new Error('Le message doit être une chaîne');
    }
    
    throw new Error(`ERREUR FATALE: ${message}`);
    
}

try {
    erreurFatale("Données corrompues détectées");
    console.log('Ceci ne sera jamais exécuté'); 
} catch (error) {
    console.error('Erreur attrapée:', error.message);
}