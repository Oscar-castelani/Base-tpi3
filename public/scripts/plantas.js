// public/scripts/plantas.js

document.addEventListener('DOMContentLoaded', () => {
  try {
    fetch('http://localhost:3000/api/products/plantas')
      .then(response => response.json())
      .then(products => {
        const productList = document.getElementById('product-list');

        products.forEach(product => {
          const listItem = document.createElement('div');
          listItem.classList.add('col-lg-3', 'col-sm-6', 'my-3');

          listItem.innerHTML = `
            <div class="col-12 text-center h-100 product-item">
              <div class="row h-100">

                <div class="col-12 p-0 mb-3">
                  <img src="${product.urlImg}" class="img-fluid" alt="${product.name}">
                </div>

                <div class="col-12 mb-3">
                  <span class="product-name">${product.name}</span>
                </div>

                <div class="col-12 mb-2 product-description">
                  ${product.description}
                </div>

                <div class="col-12 mb-3">
                  <span class="product-price">$${product.price}</span>
                </div>
                <button class="btn-carrito-tiendi">
                <i class="fas fa-shopping-cart"></i>
                </button>

              </div>
            </div>
          `;

          productList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error cargando plantas:', error);
      });
  } catch (e) {
    console.error('Error en plantas.js', e);
  }
});
