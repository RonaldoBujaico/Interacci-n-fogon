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

const productos = [
    {
        "nombreProducto": "Chicano",
        "cantidad": "",
        "precio": 15.30
    },
    {
        "nombreProducto": "Cola cola 1lt",
        "cantidad": "",
        "precio": 8.50
    },
    {
        "nombreProducto": "Inka Cola 1lt",
        "cantidad": "",
        "precio": 9.50
    },
    {
        "nombreProducto": "Anticucho",
        "cantidad": "",
        "precio": 18.00
    },
    {
        "nombreProducto": "Mollejita",
        "cantidad": "",
        "precio": 12.50
    },
    {
        "nombreProducto": "Brocheta de pollo",
        "cantidad": "",
        "precio": 15.00
    },
    {
        "nombreProducto": "Rachi",
        "cantidad": "",
        "precio": 10.50
    },
];


productos.forEach((producto) => {
    tablaProducto.innerHTML += `
    <tr >
        <th><button class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></th>
        <td>${producto.nombreProducto}</td>
        <td><button class="btn btn-secondary">+</button> 1 <button class="btn btn-secondary">-</button></td>
        <td>${producto.precio}</td>
        <td><button class="btn btn-warning"><i class="bi bi-pencil-fill"></i></button></td>
    </tr>
    `;

})




