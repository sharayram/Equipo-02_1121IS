var nombres = ["adrian", "isacc", "oscar", "manuel", "pogba", "kante", "jose", "reyna"];
var apellidos = ["hernandez", "pavon", "cr7", "tilin", "bautista", "ronaldo", "messi"];
var edades = ["17", "18", "19"];
var sexos = ["hombre", "mujer"];

for (var i = 0; i <= 1000; i++) {

    generarPersona();
}

function generarPersona() {
    let nombre = nombres[Math.floor(Math.random() * nombres.length)];
    let apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
    let edad = edades[Math.floor(Math.random() * edades.length)];
    let sexo = sexos[Math.floor(Math.random() * sexos.length)];
    let persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        sexo: sexo,
    }
    console.log(persona);
}