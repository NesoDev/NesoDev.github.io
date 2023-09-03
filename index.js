// JavaScript para aplicar la animación cuando se hace scroll hasta section_2
document.addEventListener("DOMContentLoaded", function () {
    var section2 = document.getElementById("section_2");
    var textSup2 = document.getElementById("text_sup_2");
    var textSup1 = document.getElementById("text_sup_1");
    var brain = document.getElementById("brain");
    var buttonArticles = document.getElementById("articulos")
    var textSect1 = document.getElementById("text_inf");
    var hasAnimated = false;
    var loader = document.getElementById("loader");
  
    function checkScroll() {
      if (isInViewport(section2) && !hasAnimated) {
        // Elemento section_2 está en el viewport y la animación no se ha aplicado aún
        textSup2.style.animation = "slideLeft 2s ease"; // Aplicar la animación
        textSup1.style.animation = "slideUp 1s ease";
        brain.style.animation = "slideUp 2s ease";
        buttonArticles.style.animation = "fadeIn 2s ease";
        textSect1.style.animation = ""
        hasAnimated = true; // Marcar que la animación se ha aplicado
      }
    }



  
    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    }
    
    window.addEventListener("load", function () {
      loader.style.display = "none";
    });
    // Escuchar eventos de scroll para verificar cuando se hace scroll hacia section_2
    window.addEventListener("scroll", checkScroll);
    
    // Llamar a checkScroll inicialmente para verificar si ya está en la vista en la carga de la página
    checkScroll();
  });
  