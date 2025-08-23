
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

const style = document.createElement('style');
style.textContent = `
    .toggle-header {
        cursor: pointer;
        user-select: none;
    }
    .toggle-header:hover {
        color: indianred;
        text-decoration: underline;
    }
`;
document.head.appendChild(style);
