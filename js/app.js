const header = document.querySelector('header');
const navVenta = document.querySelector('.navVenta');

header.innerHTML = `
<div class="container_header">
<div class="logo_menu">
    <figure class="figure">
        <img class="logo_figure" src="./img/logo.png" alt="logotipo del restaurane">
    </figure>
    
    <nav class="nav_header mt-4">
        <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="ventas.html"><i class="bi bi-cart-fill me-2"></i><span class="">ventas</span></a></li>
            <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-archive-fill me-2"></i><span>productos</span></a></li>
            <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-box-fill me-2"></i><span>insumos</span></a></li>
            <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-graph-up-arrow me-2"></i><span>reportes</span></a></li>
        </ul>
    </nav>
</div>

<div class="btn-login">
    <a  href="./login.html" type="button" class="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right"  data-bs-content="Right popover"><i class="bi bi-person-fill "></i>
        <span>cuenta</span> 
    </a>
</div>
</div> 
`;

navVenta.innerHTML = `
<div class="container-fluid separacion">
<ul class="nav nav-underline">
    <li class="nav-item">
      <a class="nav-link efecto mesa"  href="./mesa.html">Mesa</a>
    </li>
    <li class="nav-item">
      <a class="nav-link efecto ventas" href="./ventas.html">Ventas</a>
    </li>
  </ul>
</div>
`;

const cardMesa = document.querySelector(".mesas");


const datos = [
    {
      "title": "Mesa 1",
      "inicia": "2024-06-08T09:00:00",
      "numero_de_persona": 4,
      "precio": 50.30
    },
    {
      "title": "Mesa 2",
      "inicia": "2024-06-09T10:30:00",
      "numero_de_persona": 6,
      "precio": 60.50
    },
    {
      "title": "Mesa 3",
      "inicia": "2024-06-10T14:00:00",
      "numero_de_persona": 2,
      "precio": 40.40
    },
    {
      "title": "Mesa 4",
      "inicia": "2024-06-11T16:45:00",
      "numero_de_persona": 3,
      "precio": 35.23
    },
    {
      "title": "Mesa 5",
      "inicia": "2024-06-12T08:00:00",
      "numero_de_persona": 8,
      "precio": 75.12
    }
];

// Iterar sobre los datos y generar el HTML dinámicamente
datos.forEach((mesa) => {
    cardMesa.innerHTML += `
        <div class="col-4 mb-4">
            <div class="card border-warning" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-center bold">${mesa.title}</h5>
                    <p class="card-text fs-6">Inicio: ${mesa.inicia}</p>
                    <p class="card-text fs-6">N° personas: ${mesa.numero_de_persona}</p>
                    <button class="btn btn-warning btn-sm">S/${mesa.precio}</button> 
                </div>
            </div>
        </div>
    `;
});

cardMesa.innerHTML += `
    <div class="col-4 mb-4">
        <div class="card border-warning" style="width: 18rem; ">
            <div class="card-body text-center">
                <a class="btn  btn-lg" href="./generarMesa.html">
                    <img src="../img/add.svg" alt="Agregar nueva mmesa"> 
                </a> 
            </div>
        </div>
    </div>
`;
