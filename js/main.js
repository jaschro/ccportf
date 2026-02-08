// This script runs when the page loads
window.addEventListener('DOMContentLoaded', () => {
    console.log("The minimalist portfolio is live.");
    
    // A tiny bit of magic: fade in the heading
    const title = document.querySelector('h1');
    title.style.opacity = '0';
    
    setTimeout(() => {
        title.style.opacity = '1';
    }, 500);
});