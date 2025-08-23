
document.querySelectorAll('.toggle-header').forEach(header => {
    header.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const container = document.getElementById(targetId);
        
        if (container.style.display === 'none') {
            container.style.display = 'flex'; // or 'block' depending on your layout
        } else {
            container.style.display = 'none';
        }
    });
});

// Optional: Add cursor pointer to make headers look clickable
const style = document.createElement('style');
style.textContent = `
    .toggle-header {
        cursor: pointer;
        user-select: none;
    }
    .toggle-header:hover {
        color: #0066cc;
        text-decoration: underline;
    }
`;
document.head.appendChild(style);
