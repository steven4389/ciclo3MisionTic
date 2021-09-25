//no es lo mismo
const numero1 = 20;
const numero2 = "20";

//comparador estricto ===
if (numero1 === numero2) {
    console.log('son iguales');
} else {
    console.log('no son iguales');
}

let numeroCualquiera = 500;
numeroCualquiera = 20.3;
numeroCualquiera = 500 / 4;
numeroCualquiera = -10;
numeroCualquiera = .8;

const otraForma = new Number(20);


//operaciones

//suma
let numeroX = 5;
let numeroY = 10;
let resultado = numeroX + numeroY;
resultado = numeroX - numeroY;
resultado = numeroX * numeroY;
resultado = numeroX / numeroY;
resultado = numeroX % numeroY;

if (503 % 2 === 0) {
    console.log('es par', 503 % 2);
} else {
    console.log('no es par', 503 % 2);
}

// let variableZ = Math.PI;

// console.log('variableZ', variableZ);

let variableZ = Math.round(2.3)
console.log('variableZ', variableZ);
variableZ = Math.sqrt(144);
console.log('variableZ', variableZ);
resultado = Math.min(3, 5, 1, 2, 9, 4, 2, -3);
resultado = Math.max(4, 1, 21, 4, 15, 5, 11, 5);
resultado = Math.round((Math.random() * 10));
resultado = Math.floor(Math.random() * 30);
console.log('variableZ', resultado);

let numeroH = "500"
console.log(numeroH);
console.log(Number.parseInt(numeroH));


//operadores
console.log(30 > 5);
console.log(30 < 5);
console.log("moto" !== "carro");
console.log(30 == "30");

let variableDeprueba = "este es un string";
console.log(typeof variableDeprueba);


const nombreProducto = "Monitor 20 Pulgadas";
const precio = 30;
const disponible = true;

const producto = [
    { nombreProducto: "lavadora", precio: 300, disponible: true },
    { nombreProducto: "Monitor 20 Pulgadas", precio: 305, disponible: false },
    { nombreProducto: "computador", precio: 320, disponible: true }];

const producto1 = { nombreProducto: "lavadora", precio: 300, disponible: true };

console.log(producto1.disponible);


const producto2 = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion: {
        peso: '1kg',
        medida: '1m'
    }
}

console.log(producto2.informacion.peso);



const producto10 = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}


const concatenacion = { ...producto10, ...medidas }

console.log('concatenacion', concatenacion);

console.log(Object.keys(producto10));
console.log(Object.values(producto10));
console.log(Object.entries(producto10));


const numeros = [10, 20, { llave: "valor" }, 40, "este es un string"];
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');
console.log(numeros[3])

//ciclos o iteradores
for (let index = 0; index < numeros.length; index++) {
    console.log("elemento", numeros[index]);
}

numeros.forEach(function (element) {
    console.log(element);
})

for (const key in producto10) {
    console.log("impresion del objeto", producto10[key]);
}

for (const iterator of [10, 20, { llave: "valor" }, 40, "este es un string"]) {
    console.log("iterador", iterator);
}


//funciones
function sumar() {
    console.log("sumar", 2 + 2);
}

sumar();


const sumar2 = function () {
    console.log(3 + 3);
}

sumar2();

const multiplicar = (a, b) => {
    return a*b;
}

multiplicar(5, 2);

let retorno = multiplicar(10,5);

console.log('retorno', retorno);