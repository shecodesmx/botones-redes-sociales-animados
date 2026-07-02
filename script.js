document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 60;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        const colors = [
            'rgba(59, 89, 152, 0.4)',
            'rgba(225, 48, 108, 0.4)',
            'rgba(29, 161, 242, 0.4)',
            'rgba(255, 0, 0, 0.4)',
            'rgba(37, 211, 102, 0.4)',
            'rgba(114, 137, 218, 0.4)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        particle.style.animation = `float ${duration}s linear ${delay}s infinite`;
        
        particlesContainer.appendChild(particle);
    }
});