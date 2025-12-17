// public/scripts/main.js
class llamarServerProducts {

    /***
     * obtiene un endpoint y añade dentro del container cada uno de los productos
     */
    fetchApi(endpoint,container) {
        fetch(`http://localhost:3000/api/${endpoint}`)
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const listItem = document.createElement('div');
                listItem.classList.add('col-lg-3','col-sm-6','my-3');
                listItem.innerHTML = 
                                    `
                                        <div class='col-12  text-center h-100 product-item'>
                                            <div class='row h-100'>
                                                <div class='col-12 p-0 mb-3'>
                                                    <a href="#">
                                                        <img src="${product.urlImg}" class="img-fluid">
                                                    </a>
                                                </div>
                                                <div class="col-12 mb-3">
                                                    <a href="#" class="product-name">${product.name}</a>
                                                </div>
                                                   
                                                <div class="col-12 mb-2 product-description">
                                                 ${product.description}
                                                 </div>

                                                <div class="col-12 mb-3">
                                                    <span class="product-price">
                                                    $${product.price}
                                                    </span>
                                                    
                                                </div>
                                                <button class="btn-carrito-tiendi">
                                                <i class="fas fa-shopping-cart"></i>
                                                </button>
                                                
                                            </div>
                                            
                                        </div>
                                    `;
                container.appendChild(listItem);
            });
        })
    }

}

document.addEventListener('DOMContentLoaded', () => {
    try {
        const productList = document.getElementById('product-list');
        llamarServerProducts.fetchApi("products",productList)
    }catch (e) {
        console.log('hay un error durante la carga de productos\n detalles: ')
        console.log(e)
    }
});