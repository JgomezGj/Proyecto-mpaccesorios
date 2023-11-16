// compra.js

document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los botones de categoría
    const categoryButtons = document.querySelectorAll('.category-btn');
  
    // Obtén todos los contenedores de categoría
    const productCategories = document.querySelectorAll('.product-category');
  
    // Agrega un manejador de eventos a cada botón de categoría
    categoryButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Oculta todos los contenedores de categoría
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
  
    // Obtén todos los botones de compra
    const buyButtons = document.querySelectorAll('.btn.small');
  
    // Agrega un manejador de eventos a cada botón de compra
    buyButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
  
        // Puedes realizar acciones adicionales aquí, como agregar productos al carrito,
        // mostrar un mensaje de éxito, etc.
        alert('¡Producto agregado al carrito!');
      });
    });
  });