document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".nivel-btn");
  const jugarBtn = document.getElementById("jugar-btn");
  const nivelContainer = document.getElementById("nivel-container");
  let nivelSeleccionado = null;

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      // Remueve la clase "active" de todos los botones
      botones.forEach(b => b.classList.remove("active"));
      
      // Agrega la clase "active" al botón seleccionado y guarda el nivel
      boton.classList.add("active");
      nivelSeleccionado = boton.getAttribute("data-nivel");

      // Habilita el botón "Jugar"
      jugarBtn.disabled = false;
    });
  });

  jugarBtn.addEventListener("click", () => {
    if (nivelSeleccionado) {
      // Muestra la imagen del nivel seleccionado
      nivelContainer.innerHTML = `<img src="NIVELES/nivel${nivelSeleccionado}.jpg" alt="Nivel ${nivelSeleccionado}">`;
      nivelContainer.style.display = "block";
      
      // Oculta el menú
      document.querySelector('.menu').style.display = 'none';
    }
  });
});
