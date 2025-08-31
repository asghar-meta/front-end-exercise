// Utility functions for the frontend
document.addEventListener('DOMContentLoaded', function() {
    // Any initialization code can go here
});

// Toast notification function
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s;
    `;
    
    if (type === 'success') toast.style.background = '#38a169';
    else if (type === 'error') toast.style.background = '#e53e3e';
    else toast.style.background = '#3182ce';
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => toast.style.opacity = 1, 10);
    
    // Animate out and remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = 0;
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}