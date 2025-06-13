import { scene } from './initScene.js';

// Robot parts collection
export const productParts = {
    head: null,
    body: null,
    arms: [],
    legs: [],
    antenna: null,
    eye: null
};

// Create a robot from basic geometries
export function createProduct() {
    // Robot body (box)
    const bodyGeometry = new THREE.BoxGeometry(1.5, 2, 1);
    const bodyMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x3498db, // Blue
        roughness: 0.4,
        metalness: 0.3
    });
    productParts.body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    productParts.body.position.y = 1;
    productParts.body.name = "Robot Body";
    productParts.body.castShadow = true;
    scene.add(productParts.body);

    // Robot head (sphere)
    const headGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const headMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xe74c3c, // Red
        roughness: 0.1,
        metalness: 0.7
    });
    productParts.head = new THREE.Mesh(headGeometry, headMaterial);
    productParts.head.position.set(0, 2.8, 0);
    productParts.head.name = "Robot Head";
    productParts.head.castShadow = true;
    scene.add(productParts.head);

    // Robot eye (small sphere)
    const eyeGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x2ecc71, // Green
        emissive: 0x00ff00,
        emissiveIntensity: 0.5
    });
    productParts.eye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    productParts.eye.position.set(0.3, 2.8, 0.7);
    productParts.eye.name = "Robot Eye";
    scene.add(productParts.eye);

    // Robot arms (cylinders)
    const armGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.5, 16);
    const armMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xf1c40f, // Yellow
        roughness: 0.3,
        metalness: 0.5
    });

    // Left arm
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-1.2, 1.8, 0);
    leftArm.rotation.z = Math.PI / 4;
    leftArm.name = "Left Arm";
    leftArm.castShadow = true;
    productParts.arms.push(leftArm);
    scene.add(leftArm);

    // Right arm
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(1.2, 1.8, 0);
    rightArm.rotation.z = -Math.PI / 4;
    rightArm.name = "Right Arm";
    rightArm.castShadow = true;
    productParts.arms.push(rightArm);
    scene.add(rightArm);

    // Robot legs (cylinders)
    const legGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1.2, 16);
    const legMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x9b59b6, // Purple
        roughness: 0.2,
        metalness: 0.6
    });

    // Left leg
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.5, -0.7, 0);
    leftLeg.name = "Left Leg";
    leftLeg.castShadow = true;
    productParts.legs.push(leftLeg);
    scene.add(leftLeg);

    // Right leg
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.5, -0.7, 0);
    rightLeg.name = "Right Leg";
    rightLeg.castShadow = true;
    productParts.legs.push(rightLeg);
    scene.add(rightLeg);

    // Antenna (cylinder + sphere)
    const antennaBaseGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 16);
    const antennaBaseMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x95a5a6, // Gray
        metalness: 0.8,
        roughness: 0.2
    });
    const antennaBase = new THREE.Mesh(antennaBaseGeometry, antennaBaseMaterial);
    antennaBase.position.set(0, 3.3, 0);
    antennaBase.rotation.x = Math.PI / 2;
    antennaBase.name = "Antenna Base";
    scene.add(antennaBase);

    const antennaBallGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const antennaBallMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xe67e22, // Orange
        emissive: 0xff8800,
        emissiveIntensity: 0.3
    });
    productParts.antenna = new THREE.Mesh(antennaBallGeometry, antennaBallMaterial);
    productParts.antenna.position.set(0, 3.55, 0);
    productParts.antenna.name = "Antenna Ball";
    scene.add(productParts.antenna);
}