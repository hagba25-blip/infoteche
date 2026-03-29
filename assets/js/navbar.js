document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function() {
    menu.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach(slider => {
    let index = 0;
    const images = slider.querySelectorAll("img");

    // afficher la première image
    images[index].classList.add("active");

    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 2000); // toutes les 2 secondes
  });
});
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  // Récupérer les valeurs du formulaire
  const name = e.target.name.value;
  const email = e.target.email.value;
  const phone = e.target.phone.value;
  const subject = e.target.subject.value;
  const message = e.target.message.value;

  // Afficher pop-up succès
  const popup = document.getElementById("successPopup");
  popup.style.display = "flex";
  setTimeout(() => { popup.style.display = "none"; }, 3000);

  // Construire le message WhatsApp
  const whatsappMessage = `Bonjour, je suis ${name}.%0AEmail: ${email}%0ATéléphone: ${phone}%0ASujet: ${subject}%0AMessage: ${message}`;

  // Rediriger vers WhatsApp
  window.open(`https://wa.me/22899315092?text=${whatsappMessage}`, "_blank");
});