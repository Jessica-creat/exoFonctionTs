function saluer(prenom) {
    if (prenom === void 0) { prenom = "Anonyme"; }
    return "Bonjour, ".concat(prenom, " !");
}
console.log(saluer("Alice"));
console.log(saluer());
console.log(saluer(undefined));
