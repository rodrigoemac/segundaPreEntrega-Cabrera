//Simulador control de stock

//Funciones 
const materiales = [] 

function mostrarMateriales() {
    if (materiales.length === 0) {
        alert("No hay materiales guardados.");
    } else {
        let textoMateriales = materiales.map((producto, index) => {
            return `Producto ${index + 1}:\nID: ${producto.id}\n
            Nombre: ${producto.nombre}\n
            Precio: ${producto.precio}\n
            Medida: ${producto.medida}\n
            Cantidad: ${producto.CantidadProducto}\n
            Inversión: ${producto.inversion}\n`;
        }).join('\n');
        alert(textoMateriales);
    }
}


var producto;
function guardarDatos(){
    let idProducto = document.getElementById('idProd').value;
    let nombreProducto = document.getElementById('nombreProd').value;
    let precioUntario = document.getElementById('precioProd').value;
    let medidaProducto = document.getElementById('medidaProd').value;
    let CantidadProducto = document.getElementById('cantidadProd').value;
    let inversionProducto = CantidadProducto * precioUntario; 
    
    producto = {
        id: idProducto,
        nombre: nombreProducto,
        precio: precioUntario,
        medida: medidaProducto,
        CantidadProducto,
        inversion: inversionProducto
        
    }

    materiales.push(producto);
    alert("Producto guardado correctamente.");
}
