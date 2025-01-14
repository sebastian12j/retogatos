document.addEventListener('DOMContentLoaded', () => {
    const sliderHandle = document.getElementById('sliderHandle');
    const sliderContainer = document.querySelector('.slider-container');
    let isDragging = false;

    sliderHandle.addEventListener('mousedown', (e) => {
        isDragging = true;
        sliderContainer.classList.add('active');
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            let newRight = sliderContainer.offsetWidth - (e.clientX - sliderContainer.offsetLeft) - sliderHandle.offsetWidth / 2;
            if (newRight < 0) newRight = 0;
            if (newRight > sliderContainer.offsetWidth - sliderHandle.offsetWidth) newRight = sliderContainer.offsetWidth - sliderHandle.offsetWidth;
            sliderHandle.style.right = newRight + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            if (parseInt(sliderHandle.style.right) <= 0) {
                window.location.href = 'http://127.0.0.1:5500/adotp.html'; // Cambia esta URL por la página a la que quieres redirigir
            } else {
                sliderHandle.style.right = '0';
                sliderContainer.classList.remove('active');
            }
        }
    });
});



//objetos gatos

const gatos = [
  {
    NombreDueño: "Nick Factural",
    Tienda: "pet star shop",
    sexo: "female",
    raza: "bengal",
    color: "brown",
    img: "img/usuariosParaAdopcion/Gatoprincipal2.png", // Coloca la ruta de la imagen del gato aquí
    imgTienda: "img/usuariosParaAdopcion/Ellipse5.png", // Coloca la ruta de la imagen de la tienda aquí
    nombreDeGato: "Oakley",
    info: "Hola, soy Oakley. Soy un gato amigable y cariñoso."
  },
  {
    NombreDueño: "Hans Gfaina",
    Tienda: "pet owner",
    sexo: "male",
    raza: "persian",
    color: "brown",
    img: "img/usuariosParaAdopcion/Gatoprincipal.png", // Coloca la ruta de la imagen del gato aquí
    imgTienda: "img/usuariosParaAdopcion/Ellipse7.png", // Coloca la ruta de la imagen de la tienda aquí
    nombreDeGato: "Whiskers",
    info: "Hola, soy Whiskers. Me encanta jugar y soy muy curioso."
  }
];


  const container = document.getElementById('gatos-container');

gatos.forEach(gato => {
  const card = document.createElement('div');
  card.className = 'pet-card';

  card.innerHTML = `<div class="infoArriba">
    
 
    <div class="info">
       <img src="${gato.imgTienda}" alt="${gato.Tienda}">
      <h5>${gato.NombreDueño}</h5>
      <p>${gato.Tienda}</p>
       
   

   <div class="tags">
   <img src="${gato.img}" alt="${gato.raza}" onclick="verGato('${gato.NombreDueño}', '${gato.Tienda}', '${gato.imgTienda}', '${gato.img}', '${gato.sexo}', '${gato.raza}', '${gato.color}', '${gato.nombreDeGato}', '${gato.info}')">

        <h5>${gato.NombreDueño}</h5>>
   
    
      <span class="sexo">${gato.sexo}</span>
      <span class="raza">${gato.raza}</span>
      <span class="color">${gato.color}</span>
    </div>
  `;

  container.appendChild(card);
});




// Función para redirigir a la página con el parámetro de raza
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const raza = card.getAttribute('data-raza');
      const currentUrl = new URL(window.location.href);
      const currentRaza = currentUrl.searchParams.get('raza');
  
      if (currentRaza === raza) {
        // Si la raza seleccionada es la misma que la actual, eliminar el filtro
        currentUrl.searchParams.delete('raza');
      } else {
        // Si es una raza diferente, actualizar el parámetro de raza
        currentUrl.searchParams.set('raza', raza);
      }
  
      window.location.href = currentUrl.toString();
    });
  });
  
  
  // Función para filtrar y mostrar los gatos en adotp.html
  function mostrarGatos() {
    const params = new URLSearchParams(window.location.search);
    const raza = params.get('raza');
  
    const container = document.getElementById('gatos-container');
    container.innerHTML = ''; // Limpiar el contenedor
  
    const filteredGatos = raza ? gatos.filter(gato => gato.raza === raza) : gatos;
  
    filteredGatos.forEach(gato => {
      const card = document.createElement('div');
      card.className = 'pet-card';
  
      card.innerHTML = `
       
        
 

   <div class="info">
  <div class="pet-card">
   
    <div class="prueba">
      <img src="${gato.imgTienda}" alt="${gato.Tienda}" class="img-tienda" onclick="verInfo('${gato.NombreDueño}', '${gato.Tienda}', '${gato.imgTienda}', '${gato.img}', '${gato.sexo}', '${gato.raza}', '${gato.color}', '${gato.nombreDeGato}', '${gato.info}')">

      <h5 class="h5titu">${gato.NombreDueño}</h5>
      <p>${gato.Tienda}</p>

      <button class="favoritos" onclick="agregarAFavoritos('${gato.NombreDueño}', '${gato.Tienda}', '${gato.imgTienda}', '${gato.img}', '${gato.sexo}', '${gato.raza}', '${gato.color}', '${gato.nombreDeGato}', '${gato.info}')">
  <svg class="empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
    <path fill="none" d="M0 0H24V24H0z"></path>
    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
  </svg>
  <svg class="filled" height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H24V24H0z" fill="none"></path>
    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
  </svg>
</button>


    </div>
    <img src="${gato.img}" alt="${gato.raza}" onclick="verInfo('${gato.NombreDueño}', '${gato.Tienda}', '${gato.imgTienda}', '${gato.img}', '${gato.sexo}', '${gato.raza}', '${gato.color}', '${gato.nombreDeGato}', '${gato.info}')">
    <div class="tags">
      <span class="sexo">${gato.sexo}</span>
      <span class="raza">${gato.raza}</span>
      <span class="color">${gato.color}</span>
    </div>
  </div>
</div>


      `;
  
      container.appendChild(card);
    });
  }
  
  // Llamar a la función para mostrar los gatos si estamos en adotp.html
  if (window.location.pathname.endsWith('adotp.html')) {
    mostrarGatos();
  }




  //PRUEBA FAVO
  function agregarAFavoritos(nombre, tienda, imgTienda, img, sexo, raza, color, nombreDeGato, info) {
    const gatoSeleccionado = {
      nombre: nombre,
      tienda: tienda,
      imgTienda: imgTienda,
      img: img,
      sexo: sexo,
      raza: raza,
      color: color,
      nombreDeGato: nombreDeGato,
      info: info
    };
  
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  
    // Verificar si el gato ya está en la lista de favoritos
    const index = favoritos.findIndex(gato => 
      gato.nombre === gatoSeleccionado.nombre && 
      gato.tienda === gatoSeleccionado.tienda &&
      gato.imgTienda === gatoSeleccionado.imgTienda &&
      gato.img === gatoSeleccionado.img &&
      gato.sexo === gatoSeleccionado.sexo &&
      gato.raza === gatoSeleccionado.raza &&
      gato.color === gatoSeleccionado.color &&
      gato.nombreDeGato === gatoSeleccionado.nombreDeGato &&
      gato.info === gatoSeleccionado.info
    );
  
    if (index === -1) {
      // Si no está en favoritos, agregarlo
      favoritos.push(gatoSeleccionado);
    } else {
      // Si ya está en favoritos, eliminarlo
      favoritos.splice(index, 1);
    }
  
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }
  

  function verInfo(nombreDueño, tienda, imgTienda, img, sexo, raza, color, nombreDeGato, info) {
    const gatoSeleccionado = {
      nombreDueño,
      tienda,
      imgTienda,
      img,
      sexo,
      raza,
      color,
      nombreDeGato,
      info
    };
  
    // Guarda la información del gato en el almacenamiento local
    localStorage.setItem('gatoSeleccionado', JSON.stringify(gatoSeleccionado));
  
    // Redirige a info.html
    window.location.href = 'http://127.0.0.1:5500/info.html';
  }
        

  document.addEventListener('DOMContentLoaded', () => {
    const infoGatoDiv = document.getElementById('info-gato');
    const gatoSeleccionado = JSON.parse(localStorage.getItem('gatoSeleccionado'));
  
    if (gatoSeleccionado) {
      infoGatoDiv.innerHTML = `
        <div class="pet-card">
          <img src="${gatoSeleccionado.imgTienda}" alt="${gatoSeleccionado.tienda}" class="img-tienda">
          <h5 class="h5titu">${gatoSeleccionado.nombreDueño}</h5>
          <p>${gatoSeleccionado.tienda}</p>
          <img src="${gatoSeleccionado.img}" alt="${gatoSeleccionado.raza}">
          <div class="tags">
            <span class="sexo">${gatoSeleccionado.sexo}</span>
            <span class="raza">${gatoSeleccionado.raza}</span>
            <span class="color">${gatoSeleccionado.color}</span>
          </div>
          <div>
            <h2 class="nombreDegato">${gatoSeleccionado.nombreDeGato}</h2>
            <p class="infoGato">${gatoSeleccionado.info}</p>
          </div>
        </div>
      `;
    } else {
      infoGatoDiv.innerHTML = '<p>No se encontró información del gato.</p>';
    }
  
    const adoptarButton = document.querySelector('.adoptar');
    const customAlert = document.getElementById('custom-alert');
    const closeAlertButton = document.getElementById('close-alert');
  
    adoptarButton.addEventListener('click', () => {
      customAlert.classList.remove('hidden');
    });
  
    closeAlertButton.addEventListener('click', () => {
      customAlert.classList.add('hidden');
      localStorage.setItem('gatoSeleccionado', JSON.stringify(gatoSeleccionado));
      window.location.href = 'http://127.0.0.1:5500/profile.html';
    });
  });
  
  
  

    
  document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('results');
    const modal = document.getElementById('searchModal');
    const span = document.getElementsByClassName('close')[0];

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase();
        const filteredGatos = gatos.filter(gato => 
            gato.nombreDeGato.toLowerCase().includes(query) ||
            gato.raza.toLowerCase().includes(query) ||
            gato.color.toLowerCase().includes(query) ||
            gato.info.toLowerCase().includes(query) ||
            gato.sexo.toLowerCase().includes(query)
        );
        displayResults(filteredGatos);
        modal.style.display = "block";
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function displayResults(gatos) {
        resultsContainer.innerHTML = '';
        if (gatos.length === 0) {
            resultsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
        } else {
            gatos.forEach(gato => {
                const gatoElement = document.createElement('div');
                gatoElement.classList.add('gato');
                gatoElement.innerHTML = `
                    <img src="${gato.img}" alt="${gato.nombreDeGato}">
                    <h3>${gato.nombreDeGato}</h3>
                    <p>${gato.info}</p>
                `;
                resultsContainer.appendChild(gatoElement);
            });
            resultsContainer.innerHTML += '<p>¡Sí tenemos! Te invitamos a buscarlo en la página Adopt.</p>';
        }
    }
});