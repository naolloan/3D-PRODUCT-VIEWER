import { camera, controls } from './initScene.js';

let autoRotate = true;
let rotationSpeed = 0.5; // degrees per frame
let angle = 0;
const radius = 5;
const height = 2;

export function setupCameraAnimation() {
    // Allow user to override auto-rotation
    controls.addEventListener('start', () => {
        autoRotate = false;
    });
    
    controls.addEventListener('end', () => {
        // Resume auto-rotation after 5 seconds of inactivity
        setTimeout(() => {
            autoRotate = true;
        }, 5000);
    });
}

export function updateCamera(deltaTime) {
    if (autoRotate) {
        angle += rotationSpeed * deltaTime;
        if (angle > 360) angle -= 360;
        
        // Calculate new camera position
        const radians = THREE.MathUtils.degToRad(angle);
        camera.position.x = radius * Math.sin(radians);
        camera.position.z = radius * Math.cos(radians);
        camera.position.y = height;
        camera.lookAt(0, 0.5, 0);
    }
}