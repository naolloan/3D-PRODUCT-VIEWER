// Import all necessary modules
import { initScene, scene, camera, renderer, controls } from './initScene.js';
import { createProduct, productParts } from './createProduct.js';
import { addLighting } from './addLighting.js';
import { setupInteraction } from './interaction.js';
import { setupCameraAnimation, updateCamera } from './cameraAnimation.js';

// Initialize the application
function init() {
    initScene();
    createProduct();
    addLighting();
    setupInteraction();
    setupCameraAnimation();
    
    // Start animation loop
    animate();
}

// Animation loop
let clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    
    const deltaTime = clock.getDelta();
    
    // Update camera animation
    updateCamera(deltaTime);
    
    // Update controls if needed
    controls.update();
    
    renderer.render(scene, camera);
}

// Start the app when all is ready
window.addEventListener('DOMContentLoaded', init);