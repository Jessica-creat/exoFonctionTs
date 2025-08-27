function prixTTC(prixHT, tauxTVA) {
    if (tauxTVA === void 0) { tauxTVA = 0.2; }
    if (typeof prixHT !== 'number') {
        throw new Error('Le prix HT doit être un nombre');
    }
    var ttc = prixHT * (1 + tauxTVA);
    return Math.round(ttc * 100) / 100;
}
console.log(prixTTC(10));
console.log(prixTTC(10, 0.1));
console.log(prixTTC(100, 0.055));
