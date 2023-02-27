const products = [
    {
      name: 'Mlýnek na kávu',
      price: 520,
      currency: 'Kč',
    },
    {
      name: 'Varná konvice',
      price: 670,
      currency: 'Kč',
    },
    {
      name: 'Sada hrničků',
      price: 1020,
      currency: 'Kč',
    },
    {
      name: 'Kávovar',
      price: 5800,
      currency: 'Kč',
    },
  ];

const Product = (prop) => {
    return `
        <div class="product">
            <h2 class="product__name">${prop.name}</h2>
            <p class="product__price">Cena: ${prop.price} ${prop.currency}</p>
        </div>
    `
}

const renderProducts = (products) => {
    const productList = document.querySelector('#products-section');
    productList.innerHTML += products.map((product) => Product(product)).join('');
}

renderProducts(products);