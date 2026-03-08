// ============================================
// NAVIGATION BAR TOGGLE
// ============================================

// Function to toggle the visibility of the navigation bar
function toggleNavBar() {
    // Get the first element with class 'navbar'
    const navBar = document.getElementsByClassName('navbar')[0];
    
    // Log the toggle action
    console.log('Toggling navigation menu');

    // Toggle display between 'block' and 'none'
    if(navBar.style.display === 'none') {
        navBar.style.display = 'block';
    } else {
        navBar.style.display = 'none';
    }
}

// Attach click event listener to hamburger menu icon
document.querySelector('.hamburger').addEventListener('click', toggleNavBar);

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

// Add smooth scroll behavior for all navbar links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Get the href attribute of the clicked link
        const targetId = this.getAttribute('href');
        
        // Check if the href is an anchor link (starts with #)
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault(); // Prevent default jump behavior
            
            // Find the target element by ID
            const targetElement = document.querySelector(targetId);
            
            // Scroll smoothly to the target element if it exists
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ============================================
// PROJECT FILTERING
// ============================================

// Add click event listeners to filter buttons for project filtering
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Get the filter category from data attribute
        const filterValue = button.getAttribute('data-filter');
        
        // Remove 'active' class from all filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        button.classList.add('active');
        
        // Filter and display project cards based on selected category
        document.querySelectorAll('.project-card').forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ============================================
// LIGHTBOX FUNCTIONALITY
// ============================================

// Create and configure lightbox element
const projectImages = document.querySelectorAll('.project-card img');
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <div class="lightbox-content">
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-image" src="" alt="">
    </div>
`;
document.body.appendChild(lightbox);

// Open lightbox on image click
projectImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.querySelector('.lightbox-image').src = img.src;
        lightbox.querySelector('.lightbox-image').alt = img.alt;
        lightbox.style.display = 'flex';
    });
});

// Close lightbox on close button click
lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Close lightbox on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightbox.style.display = 'none';
    }
});

// ============================================
// FORM VALIDATION
// ============================================

// Get contact form element
const contactForm = document.querySelector('.contact-form');

// Validate and submit form
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form input elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    let isValid = true;
    
    // Validate name field
    if (nameInput.value.trim() === '') {
        nameInput.style.borderColor = 'red';
        alert('Please enter your name');
        isValid = false;
    } else {
        nameInput.style.borderColor = '';
    }
    
    // Validate email field with regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.style.borderColor = 'red';
        alert('Please enter a valid email address');
        isValid = false;
    } else {
        emailInput.style.borderColor = '';
    }
    
    // Validate message field
    if (messageInput.value.trim() === '') {
        messageInput.style.borderColor = 'red';
        alert('Please enter a message');
        isValid = false;
    } else {
        messageInput.style.borderColor = '';
    }
    
    // Submit form if all validations pass
    if (isValid) {
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});