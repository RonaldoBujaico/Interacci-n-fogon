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
