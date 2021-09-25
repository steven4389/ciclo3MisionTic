const productos = [
    { nombre: "smart tv", categoria: "hogar", precio: "700.000", peso: "10 lb" },
    { nombre: "lavadora", categoria: "aseo", precio: "1.500.000", peso: "50 lb" },
    { nombre: "nevera", categoria: "hogar", precio: "1.200.000", peso: "500 lb" },
    { nombre: "camiseta hombre", categoria: "vestuario", precio: "30.000", peso: "10 lb" }]


const getProducts = (dataProducts) => {
    productos.forEach((element)=>{
        let div = document.createElement("div");
        div.className = "estilos"
        // div.style.border = "1px solid gray";
        // div.style.width = "20%";
        // div.style.height = "20vh";
        // div.style.marginBottom = "10px";
        // div.style.padding = "10px";
        let nombre = document.createTextNode(element.nombre);
        let categoria = document.createTextNode(element.categoria);
        div.appendChild(nombre);
        div.appendChild(categoria);
        let contenedor = document.getElementById("gallery");
        contenedor.appendChild(div);
    });
}

getProducts(productos);