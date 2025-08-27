var upperProduits = function (liste) {
    return liste.map(function (produit) { return produit.toUpperCase(); });
};
console.log(upperProduits(["pommes", "bananes", "lait"]));
console.log(upperProduits([]));
