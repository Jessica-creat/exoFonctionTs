function toKilometers(v) {
    if (typeof v === 'number') {
        return "".concat(v, "km");
    }
    else if (typeof v === 'string') {
        if (v.includes('km')) {
            return v;
        }
        else {
            var nombre = parseFloat(v);
            if (!isNaN(nombre)) {
                return "".concat(nombre, "km");
            }
            else {
                throw new Error('La chaîne doit représenter un nombre');
            }
        }
    }
    else {
        throw new Error('Le paramètre doit être un nombre ou une chaîne');
    }
}
console.log(toKilometers(5));
console.log(toKilometers("5km"));
console.log(toKilometers("10"));
