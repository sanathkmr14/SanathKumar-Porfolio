// Theme Switcher
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        const initialTheme = prefersDarkScheme.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', initialTheme);
    }

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});