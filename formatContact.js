function formatContact(opts) {
    var _a = opts.nom, nom = _a === void 0 ? "Inconnu" : _a, _b = opts.ville, ville = _b === void 0 ? "N/A" : _b;
    return "".concat(nom, " \u2014 ").concat(ville);
}
console.log(formatContact({ nom: "Alice", ville: "Paris" }));
console.log(formatContact({ nom: "Bob" }));
console.log(formatContact({ ville: "Lyon" }));
console.log(formatContact({}));
