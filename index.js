
document.querySelectorAll('.toggle-header').forEach(header => {
    header.addEventListener('click', function() {
        const foldableTargetID = this.getAttribute('data-target');
        const foldableContainer = document.getElementById(foldableTargetID);
        console.log(foldableTargetID);

        if (foldableContainer.style.display === 'none') {
            foldableContainer.style.display = 'block'; // or 'block' depending on your layout
            console.log("1");
        } else {
            foldableContainer.style.display = 'none';
            console.log("2");
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
