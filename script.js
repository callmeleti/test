// Loading Screen
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('loading-screen').style.display = 'none';
        }, 800);
    }, 2500); // Increased loading time for better effect
});

// Page Navigation
const pages = {
    'home': document.getElementById('home-page'),
    'dashboard': document.getElementById('dashboard-page'),
    'materials': document.getElementById('materials-page')
};

// Show a specific page and hide others with animation
function showPage(pageId) {
    Object.keys(pages).forEach(key => {
        if (key === pageId) {
            pages[key].style.display = 'block';
            // Reset animation
            pages[key].style.animation = 'none';
            void pages[key].offsetWidth; // Trigger reflow
            pages[key].style.animation = 'fadeInUp 0.6s ease forwards';
        } else {
            pages[key].style.display = 'none';
        }
    });
    
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Navigation Event Listeners
document.getElementById('home-link').addEventListener('click', function(e) {
    e.preventDefault();
    showPage('home');
});

// Initialize - show home page
showPage('home');