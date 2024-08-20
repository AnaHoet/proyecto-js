const productos = [
    { nombre: "Producto 1", precio: 10 },
    { nombre: "Producto 2", precio: 20 },
    { nombre: "Producto 3", precio: 30 }
];

function simularProceso() {
    let total = 0;
}

    for (let producto of productos) {
        total += producto.precio;
    }
    
    if (total > 50) {
        alert("Total de la compra superior a 50. Se aplica descuento");
        total *= 0.9; // Aplicar descuento del 10%
    } else {
        alert("Total de la compra: " + total);
    }