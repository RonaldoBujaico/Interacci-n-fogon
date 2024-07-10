// reporte 
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('barChart').getContext('2d');

    // Datos de ejemplo para el gráfico de barras
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            label: 'Ventas por Mes',
            data: [150, 230, 180, 210, 280, 320, 290, 210, 180, 220, 250, 200], // Datos de ejemplo para cada mes
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo de las barras
            borderColor: 'rgba(54, 162, 235, 1)', // Color del borde de las barras
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true // Empezar el eje Y desde 0
            }
        }
    };

    // Crear el gráfico de barras
    const barChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });

  
    const descargarPDF = document.querySelector('#downloadPDF');
    descargarPDF.addEventListener('click', function() {
        
        const opciones = {
            filename: 'informe_ventas.pdf',
            margin: 1,
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 3, letterRendering:true },
            jsPDF: { unit: 'in', format: 'a3', orientation: 'portrait' }
        };

        
        const cuerpoReporte = document.querySelector('.card-body');

        
        html2pdf()
            .from(cuerpoReporte)
            .set(opciones)
            .save();
    });
});

const tablaProducto = document.querySelector("#tabla-producto");
const contenedoresproductos = document.querySelectorAll(".producto");
const filtroTodos = document.querySelector('.btn-tabs .btn-success');
const filtroBebidas = document.querySelector('.btn-tabs .btn-secondary:nth-child(2)');
const filtroComida = document.querySelector('.btn-tabs .btn-secondary:nth-child(3)');
const btnFinalizar = document.querySelector('.btnFinalizar');
const btnAceptarModal = document.getElementById('btnAceptarModal'); // Agregamos referencia al botón Aceptar

const productos = [
    {
        "nombreProducto": "Chicano",
        "categoria": "bebida",
        "cantidad": 0,
        "precio": 15.30
    },
    {
        "nombreProducto": "Cola cola 1lt",
        "categoria": "bebida",
        "cantidad": 0,
        "precio": 8.50
    },
    {
        "nombreProducto": "Inka Cola 1lt",
        "categoria": "bebida",
        "cantidad": 0,
        "precio": 9.50
    },
    {
        "nombreProducto": "Anticucho",
        "categoria": "comida",
        "cantidad": 0,
        "precio": 18.00
    },
    {
        "nombreProducto": "Mollejita",
        "categoria": "comida",
        "cantidad": 0,
        "precio": 12.50
    },
    {
        "nombreProducto": "Brocheta de pollo",
        "categoria": "comida",
        "cantidad": 0,
        "precio": 15.00
    },
    {
        "nombreProducto": "Rachi",
        "categoria": "comida",
        "cantidad": 0,
        "precio": 10.50
    },
];

// Variable para almacenar productos seleccionados
let productosSeleccionados = [];

// Función para renderizar la tabla de productos
function renderizarTabla() {
    tablaProducto.innerHTML = ""; 
    
    productosSeleccionados.forEach((producto, index) => {
        if (producto.cantidad > 0) {
            const precioTotal = (producto.precio * producto.cantidad).toFixed(2);
            tablaProducto.innerHTML += `
            <tr data-index="${index}">
                <th><button class="btn btn-danger btn-borrar" onclick="eliminarProducto(${index})"><i class="bi bi-trash-fill"></i></button></th>
                <td>${producto.nombreProducto}</td>
                <td><button class="btn btn-secondary btn-aumentar" data-index="${index}">+</button> ${producto.cantidad} <button class="btn btn-secondary btn-disminuir" data-index="${index}">-</button></td>
                <td>${precioTotal}</td>
                <td><button class="btn btn-warning"><i class="bi bi-pencil-fill"></i></button></td>
            </tr>
            `;
        }
    });

    // Asignar eventos a los botones de aumentar y disminuir
    const botonesAumentar = document.querySelectorAll(".btn-aumentar");
    const botonesDisminuir = document.querySelectorAll(".btn-disminuir");
    
    botonesAumentar.forEach((boton) => {
        boton.removeEventListener("click", aumentarCantidad);
        boton.addEventListener("click", aumentarCantidad);
    });

    botonesDisminuir.forEach((boton) => {
        boton.removeEventListener("click", disminuirCantidad);
        boton.addEventListener("click", disminuirCantidad);
    });
}

// Función para eliminar un producto de la lista
function eliminarProducto(index) {
    productosSeleccionados.splice(index, 1);
    renderizarTabla();
    calcularPrecioTotal();
}

// Función para aumentar la cantidad de un producto
function aumentarCantidad(event) {
    const index = event.target.getAttribute("data-index");
    productosSeleccionados[index].cantidad++;
    renderizarTabla();
    calcularPrecioTotal();
}

// Función para disminuir la cantidad de un producto
function disminuirCantidad(event) {
    const index = event.target.getAttribute("data-index");
    if (productosSeleccionados[index].cantidad > 1) {
        productosSeleccionados[index].cantidad--;
        renderizarTabla();
        calcularPrecioTotal();
    }
}

// Función para calcular el precio total de la compra
function calcularPrecioTotal() {
    let total = 0;
    productosSeleccionados.forEach((producto) => {
        total += producto.precio * producto.cantidad;
    });
    document.getElementById('total').value = total.toFixed(2); // Actualizar el campo de total en el formulario
}

// Función para filtrar productos por categoría
function filtrarProductos(categoria) {
    productos.forEach((producto) => {
        const contenedor = document.getElementById(producto.nombreProducto.replace(/ /g, ''));
        if (categoria === 'todos' || producto.categoria === categoria) {
            if (contenedor) {
                contenedor.style.display = 'block';
            }
        } else {
            if (contenedor) {
                contenedor.style.display = 'none';
            }
        }
    });
}

// Eventos de clic para los botones de filtro
filtroTodos.addEventListener('click', (event) => {
    event.preventDefault();
    filtrarProductos('todos');
});

filtroBebidas.addEventListener('click', (event) => {
    event.preventDefault();
    filtrarProductos('bebida');
});

filtroComida.addEventListener('click', (event) => {
    event.preventDefault();
    filtrarProductos('comida');
});

// Evento para agregar productos a la tabla al hacer clic en su contenedor
contenedoresproductos.forEach((contenedor) => {
    contenedor.addEventListener("click", () => {
        const nombreProducto = contenedor.id; 
        const producto = productos.find(prod => prod.nombreProducto === nombreProducto);
        
        if (producto) {
            const existeProducto = productosSeleccionados.find(prod => prod.nombreProducto === nombreProducto);
            if (existeProducto) {
                existeProducto.cantidad++;
            } else {
                productosSeleccionados.push({...producto, cantidad: 1});
            }
            renderizarTabla(); 
            calcularPrecioTotal();
        }
    });
});

// Evento para abrir el modal y manejar el formulario de pago
btnFinalizar.addEventListener("click", () => {
    // Calcular el total actual de la compra
    calcularPrecioTotal();
    
    // Limpiar los campos de monto recibido y vuelto
    document.getElementById('amountReceived').value = '';
    document.getElementById('change').value = '';

    // Mostrar el modal
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
});

// Evento para calcular el vuelto cuando se ingrese el monto recibido
document.getElementById('amountReceived').addEventListener('input', () => {
    const amountReceived = parseFloat(document.getElementById('amountReceived').value);
    const total = parseFloat(document.getElementById('total').value);

    if (!isNaN(amountReceived) && amountReceived >= total) {
        const change = amountReceived - total;
        document.getElementById('change').value = change.toFixed(2);
    } else {
        document.getElementById('change').value = '';
    }
});

// Evento para cerrar el modal y limpiar los campos al hacer clic en "Aceptar"
btnAceptarModal.addEventListener('click', () => {
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.hide(); // Ocultar el modal
});

// Evento para cerrar el modal al hacer clic en "Cancelar"
document.querySelector('[data-bs-dismiss="modal"]').addEventListener('click', () => {
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.hide(); // Ocultar el modal
});

// Renderizar la tabla inicial
renderizarTabla();
