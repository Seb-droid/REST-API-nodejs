function ajouter(a, b) {
    return a + b;
}
 
function soustraire(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}
 
function division(a, b) {
    return a / b;
}


const toolkit = {
    ajouter,
    soustraire,
    multiplication,
    division,
}
 
module.exports = toolkit;