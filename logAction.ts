function logAction(message: string): void {
    
    if (typeof message !== 'string' || message.trim() === '') {
        console.warn('Message vide ou non valide');
        return; 
    }
    
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ACTION: ${message}`);
    
   
}


logAction("sortie courir 5km");


logAction("pause café");


const result = logAction("test"); 