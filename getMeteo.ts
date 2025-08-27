async function getMeteo(ville: string): Promise<{ ville: string; degres: number }> {
   
    if (typeof ville !== 'string' || ville.trim() === '') {
        throw new Error('Le nom de la ville doit être une chaîne non vide');
    }
    
   
    await new Promise(resolve => setTimeout(resolve, 1000));
    
 
    return Promise.resolve({
        ville: ville,
        degres: 21 
    });
    
}


async function afficherMeteo() {
    try {
       
        const meteo = await getMeteo("Lyon");
        console.log(`Météo à ${meteo.ville}: ${meteo.degres}°C`); 
        
        console.log(typeof meteo.ville); 
        console.log(typeof meteo.degres); 
        
    } catch (error) {
        console.error('Erreur météo:', error.message);
    }
}

getMeteo("Paris")
    .then(meteo => {
        console.log(`Météo Paris: ${meteo.degres}°C`);
    })
    .catch(error => {
        console.error('Erreur:', error.message);
    });


afficherMeteo();
getMeteo("Marseille").then(console.log);