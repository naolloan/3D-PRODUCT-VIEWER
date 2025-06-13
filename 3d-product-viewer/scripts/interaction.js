import { scene, camera, renderer } from './initScene.js';
import { productParts } from './createProduct.js';

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let currentIntersect = null;
const infoPanel = document.getElementById('info-panel');
const partNameElement = document.getElementById('part-name');

export function setupInteraction() {
    // Mouse move event for hover effect
    window.addEventListener('mousemove', onMouseMove);
    
    // Click event for part selection
    window.addEventListener('click', onClick);
}

function onMouseMove(event) {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children, true);

    // Reset previous highlight
    if (currentIntersect) {
        currentIntersect.object.material.emissive.setHex(currentIntersect.object.userData.prevEmissive);
    }

    if (intersects.length > 0) {
        const firstIntersect = intersects[0];
        
        // Store original emissive color
        if (!firstIntersect.object.userData.prevEmissive) {
            firstIntersect.object.userData.prevEmissive = firstIntersect.object.material.emissive.getHex() || 0x000000;
        }
        
        // Set highlight
        firstIntersect.object.material.emissive.setHex(0x888888);
        currentIntersect = firstIntersect;
    } else {
        currentIntersect = null;
    }
}

function onClick(event) {
    if (currentIntersect) {
        // Show info panel
        partNameElement.textContent = currentIntersect.object.name;
        infoPanel.classList.remove('hidden');
        
        // Animate the clicked part
        const clickedObject = currentIntersect.object;
        const originalScale = clickedObject.scale.clone();
        
        // Scale animation
        clickedObject.scale.multiplyScalar(1.2);
        
        // Reset after delay
        setTimeout(() => {
            clickedObject.scale.copy(originalScale);
            
            // Hide info panel after 3 seconds
            setTimeout(() => {
                infoPanel.classList.add('hidden');
            }, 3000);
        }, 300);
    }
}