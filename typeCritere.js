function filtrer(arr, crit) {
    // Étape 1 : Vérifier les paramètres d'entrée
    if (!Array.isArray(arr)) {
        throw new Error('Le premier paramètre doit être un tableau');
    }
    if (typeof crit !== 'function') {
        throw new Error('Le deuxième paramètre doit être une fonction');
    }
    // Étape 2 : Créer un tableau résultat vide
    var resultat = [];
    // Étape 3 : Parcourir chaque élément du tableau
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        // Étape 4 : Appliquer le critère à l'élément
        if (crit(element)) {
            resultat.push(element);
        }
    }
    return resultat;
}
