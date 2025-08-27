function totalPanier() {
    var prix = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        prix[_i] = arguments[_i];
    }
    if (prix.length === 0) {
        return 0;
    }
    for (var _a = 0, prix_1 = prix; _a < prix_1.length; _a++) {
        var p = prix_1[_a];
        if (typeof p !== 'number') {
            throw new Error('Tous les paramètres doivent être des nombres');
        }
    }
    var total = prix.reduce(function (accumulateur, valeurCourante) {
        return accumulateur + valeurCourante;
    }, 0);
    return total;
}
console.log(totalPanier());
console.log(totalPanier(10, 20, 30));
console.log(totalPanier(2.5, 3.75, 1.99));
console.log(totalPanier(100, 50, 25, 10));
