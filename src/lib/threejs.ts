import * as THREE from 'three';

export const createStudioLights = () => {
  const key = new THREE.DirectionalLight('#ffffff', 2.6);
  key.position.set(4, 5, 6);
  const fill = new THREE.DirectionalLight('#f5f1e8', 1.3);
  fill.position.set(-4, 2, 3);
  const back = new THREE.DirectionalLight('#d4af37', 1.9);
  back.position.set(0, 4, -5);
  return { key, fill, back };
};

export const createGemMaterial = () =>
  new THREE.MeshPhysicalMaterial({
    color: '#d4af37',
    roughness: 0.12,
    metalness: 0.92,
    clearcoat: 1,
    transmission: 0.18
  });
