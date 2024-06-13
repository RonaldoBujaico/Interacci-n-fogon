/*SCRIPT PARA PRODUCTO E INSUMO*/
document.addEventListener("DOMContentLoaded", function () {

    
    const form = document.getElementById('formProducto');
    const tablaProductos = document.getElementById('tablaProductos').querySelector('tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const nombre = document.getElementById('nombreProducto').value;
        const precio = document.getElementById('precioProducto').value;
        const cantidad = document.getElementById('cantidadProducto').value;
        const categoria = document.getElementById('categoriaProducto').value;
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${categoria}</td>     
            <td>
                <i class="bi bi-three-dots"></i>
            </td>
        `;

        tablaProductos.appendChild(newRow);
        form.reset();
        var modal = bootstrap.Modal.getInstance(document.getElementById('modalProducto'));
        modal.hide();
    });

    tablaProductos.addEventListener('click', function (event) {
        if (event.target.classList.contains("bi-three-dots")) {
            document.getElementById("modalBorrar").style.display = "flex";
        }

        document.getElementById("btnCancelar").addEventListener("click", function() {
            document.getElementById("modalBorrar").style.display = "none";
        });

        document.getElementById("btnEliminar").addEventListener("click", function() {
            event.target.closest("tr").remove();
            document.getElementById("modalBorrar").style.display = "none";
        });


    });

});

function mostrarImagen(event) {
    var imagenInput = event.target;
    var imagenPreview = document.getElementById('imagenPreview');
    
    if (imagenInput.files && imagenInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var imagen = document.createElement('img');
            imagen.src = e.target.result;
            imagen.classList.add('img-fluid', 'mt-2');
            imagenPreview.innerHTML = ''; 
            imagenPreview.appendChild(imagen);
        }
        reader.readAsDataURL(imagenInput.files[0]);
    }
}

/*SCRIPT PARA LAS CATEGORIAS*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('formProducto');
    const tablaProductos = document.getElementById('tablaProductos').querySelector('tbody');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nombre = document.getElementById('nombreProducto').value;
        const categoria = document.getElementById('categoriaProducto').value;
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${nombre}</td>
            <td>${categoria}</td>
            <td>
                <i class="bi bi-three-dots"></i>
            </td>
        `;
        tablaProductos.appendChild(newRow);
        form.reset();
        var modal = bootstrap.Modal.getInstance(document.getElementById('modalProducto'));
        modal.hide();
    });

    tablaProductos.addEventListener('click', function (event) {
        if (event.target.classList.contains("bi-three-dots")) {
            document.getElementById("modalBorrar").style.display = "flex";
        }

        document.getElementById("btnCancelar").addEventListener("click", function() {
            document.getElementById("modalBorrar").style.display = "none";
        });

        document.getElementById("btnEliminar").addEventListener("click", function() {
            event.target.closest("tr").remove();
            document.getElementById("modalBorrar").style.display = "none";
        });
    });
});
