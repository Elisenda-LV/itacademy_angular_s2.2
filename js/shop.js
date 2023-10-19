// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'Cooking Oil',
        price: 10.50,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant Mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up',
        price: 20.50,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

var productCount = 0;

function updateCartBadge() {
  // Actualiza el contenido del badge con la cantidad de productos en el carrito
  const badgeElement = document.getElementById("count_product");
  badgeElement.textContent = productCount;
}

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart.
   const productAdd = products.find(products => products.id === id); 
   
   // 2. Add found product to the cartList array
   if(!productAdd){
        alert("El producto seleccionado no existe");
        console.log("El producto seleccionado no existe");
   }else{
        cartList.push({ ...productAdd});
        console.table(cartList);
   }

   const existingProduct = cart.find(product => product.id === id);

   if (existingProduct) {
       existingProduct.quantity++;
   } else {
       cart.push({ ...productAdd, quantity: 1 });
   }

   console.table(cart);
   applyPromotionsCart();
   productCount ++;
   updateCartBadge();
   alert("Producto añadido a la cesta correctamente");

}


// Exercise 2
function cleanCart() {
    total = 0;
    cartList.length = 0;
    cart = [];
    printCart();
    
    productCount = 0;
    updateCartBadge();
    
    console.log("El carrito se ha vaciado correctamente.");
    console.table(cartList);
    console.table(cart);
    alert("El carrito se ha vaciado correctamente.");
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    var total = 0;
    for (const item of cart){
        total += item.price * item.quantity;
        console.log(total);
    }
    return total;
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
        var total = 0;
        for (const item of cart) {
            // Comprueba si se cumple la primera promoción: 3 o más ampolles d'oli
            if (item.id === 1 && item.quantity >= 3) {
                const discountAmount = item.price * 0.2; // 20% de descuento
                item.subtotalWithDiscount = (item.price - discountAmount) * item.quantity;
            }
            // Comprueba si se cumple la segunda promoción: 10 o más productes per a fer pastissos
            else if (item.id === 3 && item.quantity >= 10) {
                const discountAmount = item.price * 0.3; // 30% de descuento
                item.subtotalWithDiscount = (item.price - discountAmount) * item.quantity;
            }
            // Si no se cumple ninguna promoción, no se aplica descuento
            else {
                item.subtotalWithDiscount = item.price * item.quantity;
            }
            
            total += item.subtotalWithDiscount; // Agrega el subtotal con descuento al total
    
        }
        return total;
    }



// Exercise 5
function printCart() {
   
    let tabla = document.querySelector('.table');
    let tbody = document.getElementById("cart_list");

    tbody.innerHTML = "";
    let total = 0;

    cart.forEach(function (products) {
        const fila = document.createElement("tr");
        
        
        const nameProduct = document.createElement("th");
        nameProduct.classList.add("fw-light");
        nameProduct.textContent = products.name;
        
        const priceProduct = document.createElement("td");
        priceProduct.classList.add("text-end", "fw-light");
        priceProduct.textContent = products.price + "€";

        const qtyProduct = document.createElement("td");
        qtyProduct.classList.add("text-center", "fw-light");
        qtyProduct.textContent = products.quantity;

        const buttonRest = document.createElement("button");
        buttonRest.classList.add("btn", "btn-outline-danger", "ms-0", "text-danger","fw-bolder");
        buttonRest.textContent = "-";
        buttonRest.addEventListener('click', function () {
            removeFromCart(products.id); 
        });
        

        const totalProducts = document.createElement("td");
        totalProducts.classList.add("text-center", "fw-light");
        totalProducts.textContent = products.subtotalWithDiscount.toFixed(2) + "€";

        fila.appendChild(nameProduct);
        fila.appendChild(priceProduct);
        fila.appendChild(qtyProduct);
        fila.appendChild(buttonRest);
        fila.appendChild(totalProducts);

       
        tbody.appendChild(fila);
        total += products.subtotalWithDiscount;
    });

    document.getElementById("total_price").innerHTML = total.toFixed(2);
    
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

   
// 1. Loop for to the array products to get the item to add to cart.
    const productRemove = cartList.find(cartList => cartList.id === id); 
    
// 2. Remove found product to the cartList array
    cartList.splice(productRemove);
    console.table(cartList);

    const removedProduct = cart.find(cart => cart.id === id);
    if(removedProduct.quantity > 1){
        removedProduct.quantity--;
    }else{
        cart.splice(removedProduct,1);
    } 
    
    applyPromotionsCart();
    printCart();
    productCount --;
    updateCartBadge();
    alert("Producto eliminado de la cesta correctamente");
    console.table(cart);
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}