// script.js

document.addEventListener('DOMContentLoaded', () => {
    const modelViewer = document.querySelector('model-viewer');

    if (modelViewer) {
        modelViewer.addEventListener('load', () => {
            console.log('Model loaded successfully!');
            // Optional: Auto-rotate can be toggled via JS if needed
            // modelViewer.autoRotate = true;
        });

        modelViewer.addEventListener('error', (error) => {
            console.error('Error loading model:', error);
            handleError();
        });
    }

    const toggleRotateBtn = document.getElementById('toggle-rotate');
    if (toggleRotateBtn && modelViewer) {
        toggleRotateBtn.addEventListener('click', () => {
            if (modelViewer.autoRotate) {
                modelViewer.autoRotate = false;
                toggleRotateBtn.textContent = 'Enable Rotation';
            } else {
                modelViewer.autoRotate = true;
                toggleRotateBtn.textContent = 'Disable Rotation';
            }
        });
    }
});

function handleError() {
    const container = document.querySelector('main');
    const warning = document.createElement('div');
    warning.style.position = 'absolute';
    warning.style.top = '50%';
    warning.style.left = '50%';
    warning.style.transform = 'translate(-50%, -50%)';
    warning.style.color = '#ff6b6b';
    warning.style.textAlign = 'center';
    warning.style.background = 'rgba(0,0,0,0.8)';
    warning.style.padding = '20px';
    warning.style.borderRadius = '10px';
    warning.innerHTML = `
        <h2>Model Not Found</h2>
        <p>Please ensure <code>model.glb</code> is in the root directory.</p>
    `;
    container.appendChild(warning);
}
