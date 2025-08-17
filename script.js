// Sample recipe data
const recipes = [
    {
        id: 1,
        title: "Butter Chicken",
        author: "Chef Priya",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        rating: 4.9,
        time: "45 min",
        category: "north-indian",
        tags: ["Chicken", "Creamy", "Spicy"],
        description: "A rich and creamy Indian curry made with tender chicken pieces in a tomato-based sauce."
    },
    {
        id: 2,
        title: "Masala Dosa",
        author: "Chef Rajesh",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        rating: 4.7,
        time: "30 min",
        category: "south-indian",
        tags: ["Vegetarian", "Breakfast", "Crispy"],
        description: "Crispy fermented rice and lentil crepe filled with spiced potato mixture."
    },
    {
        id: 3,
        title: "Pani Puri",
        author: "Chef Meera",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        rating: 4.8,
        time: "20 min",
        category: "street-food",
        tags: ["Street Food", "Spicy", "Quick"],
        description: "Crispy hollow puris filled with spiced potato and tangy tamarind water."
    },
    {
        id: 4,
        title: "Gulab Jamun",
        author: "Chef Anjali",
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        rating: 4.6,
        time: "40 min",
        category: "desserts",
        tags: ["Dessert", "Sweet", "Traditional"],
        description: "Soft and spongy milk-solid balls soaked in rose-flavored sugar syrup."
    },
    {
        id: 5,
        title: "Palak Paneer",
        author: "Chef Vikram",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        rating: 4.5,
        time: "35 min",
        category: "vegetarian",
        tags: ["Vegetarian", "Healthy", "Spinach"],
        description: "Fresh spinach curry with homemade cottage cheese cubes."
    },
    {
        id: 6,
        title: "Masala Chai",
        author: "Chef Deepak",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        rating: 4.4,
        time: "10 min",
        category: "beverages",
        tags: ["Tea", "Spiced", "Warm"],
        description: "Traditional Indian spiced tea with milk and aromatic spices."
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('.search-btn');
const recipesGrid = document.getElementById('recipesGrid');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const contactForm = document.getElementById('contactForm');
const categoryCards = document.querySelectorAll('.category-card');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Search functionality
let currentSearchTerm = '';
let currentCategory = '';

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    currentSearchTerm = searchInput.value.toLowerCase().trim();
    filterAndDisplayRecipes();
}

// Category filtering
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        currentCategory = card.dataset.category;
        filterAndDisplayRecipes();
        
        // Scroll to recipes section
        document.getElementById('recipes').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

function filterAndDisplayRecipes() {
    let filteredRecipes = recipes;
    
    // Filter by search term
    if (currentSearchTerm) {
        filteredRecipes = filteredRecipes.filter(recipe => 
            recipe.title.toLowerCase().includes(currentSearchTerm) ||
            recipe.author.toLowerCase().includes(currentSearchTerm) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(currentSearchTerm)) ||
            recipe.description.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    // Filter by category
    if (currentCategory) {
        filteredRecipes = filteredRecipes.filter(recipe => 
            recipe.category === currentCategory
        );
    }
    
    displayRecipes(filteredRecipes);
}

function displayRecipes(recipesToShow) {
    if (recipesToShow.length === 0) {
        recipesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3 style="color: #666; margin-bottom: 0.5rem;">No recipes found</h3>
                <p style="color: #999;">Try adjusting your search terms or browse our categories</p>
            </div>
        `;
        return;
    }
    
    recipesGrid.innerHTML = recipesToShow.map(recipe => `
        <div class="recipe-card" onclick="openRecipeDetail(${recipe.id})">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-author">By ${recipe.author}</p>
                <div class="recipe-meta">
                    <div class="recipe-rating">
                        ${generateStars(recipe.rating)}
                        <span>${recipe.rating}</span>
                    </div>
                    <span class="recipe-time">${recipe.time}</span>
                </div>
                <div class="recipe-tags">
                    ${recipe.tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Load more recipes functionality
function loadMoreRecipes() {
    // In a real application, this would load more recipes from a server
    showToast('Loading more recipes...', 'info');
    
    // Simulate loading delay
    setTimeout(() => {
        showToast('More recipes loaded!', 'success');
    }, 1500);
}

// Modal functionality
function openLoginModal() {
    loginModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openSignupModal() {
    signupModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeSignupModal() {
    signupModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function switchToSignup() {
    closeLoginModal();
    openSignupModal();
}

function switchToLogin() {
    closeSignupModal();
    openLoginModal();
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        closeLoginModal();
    }
    if (e.target === signupModal) {
        closeSignupModal();
    }
});

// Form submissions
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Login functionality would be implemented here!', 'info');
    closeLoginModal();
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Sign up functionality would be implemented here!', 'info');
    closeSignupModal();
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
        showToast('Thank you for your message! We\'ll get back to you soon.', 'success');
        contactForm.reset();
    } else {
        showToast('Please fill in all fields.', 'error');
    }
});

// Toast notification system
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas ${getToastIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

function getToastIcon(type) {
    switch (type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'info': return 'fa-info-circle';
        default: return 'fa-info-circle';
    }
}

// Recipe detail functionality
function openRecipeDetail(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    // In a real application, this would navigate to a recipe detail page
    showToast(`Opening ${recipe.title} recipe...`, 'info');
    
    // For demo purposes, show recipe info in a modal-like format
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px; margin-bottom: 1rem;">
            <h2>${recipe.title}</h2>
            <p style="color: #666; margin-bottom: 1rem;">By ${recipe.author}</p>
            <div style="display: flex; gap: 2rem; margin-bottom: 1rem;">
                <div class="recipe-rating">
                    ${generateStars(recipe.rating)}
                    <span>${recipe.rating}</span>
                </div>
                <span class="recipe-time">${recipe.time}</span>
            </div>
            <p style="line-height: 1.6; margin-bottom: 1rem;">${recipe.description}</p>
            <div class="recipe-tags">
                ${recipe.tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.category-card, .recipe-card, .feature');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize with some recipes
    displayRecipes(recipes.slice(0, 6));
});

// Search suggestions (simple implementation)
searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    if (value.length > 2) {
        const suggestions = recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(value) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(value))
        ).slice(0, 3);
        
        // In a real application, you would show these suggestions in a dropdown
        if (suggestions.length > 0) {
            console.log('Search suggestions:', suggestions.map(s => s.title));
        }
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        if (loginModal.style.display === 'block') {
            closeLoginModal();
        }
        if (signupModal.style.display === 'block') {
            closeSignupModal();
        }
    }
});

// Performance optimization: Debounce search
let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        if (e.target.value.length > 2) {
            performSearch();
        }
    }, 300);
});

// Add loading states
function setLoadingState(element, isLoading) {
    if (isLoading) {
        element.disabled = true;
        element.innerHTML = '<span class="loading"></span> Loading...';
    } else {
        element.disabled = false;
        element.innerHTML = element.dataset.originalText || 'Search';
    }
}

// Initialize search button original text
searchBtn.dataset.originalText = searchBtn.innerHTML;

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to category cards
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to buttons
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 