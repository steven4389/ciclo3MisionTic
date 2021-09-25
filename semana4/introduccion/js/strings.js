const producto1 = "hoy aprendimos un tema llamado \"strings\"";
const producto2 = "lavadora de 50 lbs"
const producto3 = "equipo de sonido"

console.log("producto1: ", producto1, "producto2: ", producto2.length);
console.log(producto1.indexOf("llamado"));

// let re = new RegExp('aprendimos+tema');
// paragraph.match(re);

console.log(producto1.concat(producto2).concat(producto3));
console.log(producto1 + producto2);
console.log(`${producto1}  ${producto2} este es otro string`);

const product4 = '        Monitor 20 Pulgadas      '; 
console.log(product4);
console.log(product4.trimStart());
console.log(product4.trimEnd());
console.log(product4.trim());

console.log(product4.replace("20", "24"));

console.log(product4.slice(8, 15));
console.log(product4.substr(8, 3) ); 
console.log(product4.charAt(14));

