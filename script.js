// Sample product data
const products = [
    {
        id: 1,
        name: "Organic Apples",
        price: 120,
        originalPrice: 150,
        discount: "20% OFF",
        image: "🍎",
        category: "Fruits"
    },
    {
        id: 2,
        name: "Fresh Milk",
        price: 45,
        originalPrice: 50,
        discount: "10% OFF",
        image: "🥛",
        category: "Dairy"
    },
    {
        id: 3,
        name: "Whole Wheat Bread",
        price: 35,
        originalPrice: 40,
        discount: "12% OFF",
        image: "🍞",
        category: "Bakery"
    },
    {
        id: 4,
        name: "Tomatoes",
        price: 30,
        originalPrice: 40,
        discount: "25% OFF",
        image: "🍅",
        category: "Vegetables"
    },
    {
        id: 5,
        name: "Bananas",
        price: 60,
        originalPrice: 70,
        discount: "14% OFF",
        image: "🍌",
        category: "Fruits"
    },
    {
        id: 6,
        name: "Pepsi Can",
        price: 30,
        originalPrice: 35,
        discount: "14% OFF",
        image: "🥤",
        category: "Beverages"
    },
    {
        id: 7,
        name: "Potato",
        price: 25,
        originalPrice: 30,
        discount: "17% OFF",
        image: "🥔",
        category: "Vegetables"
    },
    {
        id: 8,
        name: "Cheese Block",
        price: 120,
        originalPrice: 140,
        discount: "14% OFF",
        image: "🧀",
        category: "Dairy"
    }
];

// Cart array to store items
let cart = [];

// DOM Elements
const productsContainer = document.querySelector('.products-container');
const cartIcon = document.querySelector('.cart-icon');
const cartSidebar = document.querySelector('.cart-sidebar');
const closeCart = document.querySelector('.close-cart');
const overlay = document.querySelector('.overlay');
const cartItems = document.querySelector('.cart-items');
const subtotalAmount = document.querySelector('.subtotal-amount');
const discountAmount = document.querySelector('.discount-amount');
const totalAmount = document.querySelector('.total-amount');
const cartCount = document.querySelector('.cart-count');
const checkoutBtn = document.querySelector('.checkout-btn');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartUI();
    
    // Add event listeners
    cartIcon.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartSidebar);
    overlay.addEventListener('click', closeCartSidebar);
    checkoutBtn.addEventListener('click', checkout);
});

// Render products to the page
function renderProducts() {
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-price">₹${product.price} 
                    <span class="product-original-price">₹${product.originalPrice}</span>
                    <span class="product-discount">${product.discount}</span>
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (product) {
        // Check if product already exists in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        updateCartUI();
        showNotification(`${product.name} added to cart!`);
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update item quantity in cart
function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
    }
}

// Update cart UI
function updateCartUI() {
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}">✕</button>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners to quantity buttons and remove buttons
        document.querySelectorAll('.quantity-btn.minus').forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const input = this.nextElementSibling;
                let quantity = parseInt(input.value);
                updateQuantity(id, quantity - 1);
            });
        });
        
        document.querySelectorAll('.quantity-btn.plus').forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const input = this.previousElementSibling;
                let quantity = parseInt(input.value);
                updateQuantity(id, quantity + 1);
            });
        });
        
        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const quantity = parseInt(this.value);
                updateQuantity(id, quantity);
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                removeFromCart(id);
            });
        });
    }
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = Math.floor(subtotal * 0.1); // 10% discount on total
    const total = subtotal - discount;
    
    // Update totals display
    subtotalAmount.textContent = `₹${subtotal}`;
    discountAmount.textContent = `₹${discount}`;
    totalAmount.textContent = `₹${total}`;
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Open cart sidebar
function openCart() {
    cartSidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close cart sidebar
function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    alert('Order placed successfully! Redirecting to payment...');
    cart = [];
    updateCartUI();
    closeCartSidebar();
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 1002;
        animation: slideIn 0.3s, fadeOut 0.5s 2.5s;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after animation
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);