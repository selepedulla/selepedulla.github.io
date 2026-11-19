// A. Modo oscuro / claro
const btnTema = document.getElementById("btn-tema");
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
  const esOscuro = document.body.classList.contains("oscuro");
  btnTema.textContent = esOscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
});

// B. Navbar sticky que cambia al hacer scroll
const navbar = document.getElementById("navbar");
window.onscroll = () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

// C. Validación del formulario sin alert()
const form = document.getElementById("form-contacto");
const errorMsg = document.getElementById("error-form");

form.addEventListener("submit", (e) => {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (nombre.length < 2) {
    e.preventDefault();
    errorMsg.textContent = "Por favor, ingresá tu nombre.";
    return;
  }

  if (!emailValido) {
    e.preventDefault();
    errorMsg.textContent = "Por favor, ingresá un correo electrónico válido.";
    return;
  }

  if (mensaje.length < 10) {
    e.preventDefault();
    errorMsg.textContent = "El mensaje debe tener al menos 10 caracteres.";
    return;
  }

  errorMsg.textContent = "";
});

// D. Animación de tarjetas al hacer scroll con IntersectionObserver
const tarjetas = document.querySelectorAll(".revelar");
const observador = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

tarjetas.forEach((tarjeta) => observador.observe(tarjeta));