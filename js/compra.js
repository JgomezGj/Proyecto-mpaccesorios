// compra.js

document.addEventListener('DOMContentLoaded', function () {
    //Botones de categoría
    const categoryButtons = document.querySelectorAll('.category-btn');
  
    //contenedores de categoría
    const productCategories = document.querySelectorAll('.product-category');
  
    //manejador de eventos a cada botón de categoría
    categoryButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Oculta contenedores de categoría
        productCategories.forEach(function (category) {
          category.style.display = 'none';
        });
  
        // Muestra el contenedor de la categoría seleccionada
        const selectedCategory = button.getAttribute('data-category');
        const selectedCategoryContainer = document.getElementById(selectedCategory);
        if (selectedCategoryContainer) {
          selectedCategoryContainer.style.display = 'flex'; // Puedes ajustar el estilo de visualización según tu diseño
        }
      });
    });
  
    // Obtiene todos los botones de compra
    const buyButtons = document.querySelectorAll('.btn.small');
  
    // Agrega un manejador de eventos a cada botón de compra
    buyButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
  
        // mostrar un mensaje de éxito.
        alert('¡Producto agregado al carrito!');
      });
    });
  });