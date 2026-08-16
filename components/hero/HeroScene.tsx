'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '@/lib/useReducedMotion';

interface HeroSceneProps {
  mouseX?: number;
  mouseY?: number;
  scrollProgress?: number;
}

export function HeroScene({
  mouseX = 0,
  mouseY = 0,
  scrollProgress = 0,
}: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();

  // Mouse & Scroll references for the animation frame loop
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    mouseRef.current.targetX = mouseX;
    mouseRef.current.targetY = mouseY;
  }, [mouseX, mouseY]);

  useEffect(() => {
    scrollRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    if (isReducedMotion || !containerRef.current) return;

    const container = containerRef.current;
    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer | null = null;

    // Check WebGL availability safely
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      // WebGL not available on this device
      return;
    }

    // SCENE SETUP
    const scene = new THREE.Scene();

    // CAMERA SETUP
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // RENDERER CONFIGURATION
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0x0d1627, 2.0);
    scene.add(ambientLight);

    const primaryLight = new THREE.PointLight(0x4f8cff, 4.0, 20);
    primaryLight.position.set(4, 3, 5);
    scene.add(primaryLight);

    const secondaryLight = new THREE.PointLight(0x9f5cff, 3.5, 20);
    secondaryLight.position.set(-4, -3, -2);
    scene.add(secondaryLight);

    const cyanRimLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    cyanRimLight.position.set(0, 5, -3);
    scene.add(cyanRimLight);

    // MASTER 3D OBJECT GROUP
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. OUTER GEOMETRIC WIREFRAME CAGE (Icosahedron)
    const isMobile = window.innerWidth < 768;
    const cageGeometry = new THREE.IcosahedronGeometry(2.0, 1);
    const cageMaterial = new THREE.MeshStandardMaterial({
      color: 0x4f8cff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      roughness: 0.2,
      metalness: 0.8,
    });
    const cageMesh = new THREE.Mesh(cageGeometry, cageMaterial);
    coreGroup.add(cageMesh);

    // 2. GLOWING VERTEX NODES ON CAGE
    const vertexPointsGeo = new THREE.BufferGeometry();
    const positionAttribute = cageGeometry.attributes.position;
    vertexPointsGeo.setAttribute('position', positionAttribute);

    const vertexPointsMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const vertexPoints = new THREE.Points(vertexPointsGeo, vertexPointsMat);
    coreGroup.add(vertexPoints);

    // 3. INNER SOLID NUCLEUS (Octahedron)
    const nucleusGeometry = new THREE.OctahedronGeometry(1.0, 0);
    const nucleusMaterial = new THREE.MeshStandardMaterial({
      color: 0x080e1a,
      roughness: 0.3,
      metalness: 0.9,
      flatShading: true,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    coreGroup.add(nucleusMesh);

    const nucleusWireMaterial = new THREE.MeshBasicMaterial({
      color: 0x9f5cff,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const nucleusWire = new THREE.Mesh(nucleusGeometry, nucleusWireMaterial);
    nucleusWire.scale.set(1.05, 1.05, 1.05);
    coreGroup.add(nucleusWire);

    // 4. CONCENTRIC ORBITAL RINGS
    const ring1Geo = new THREE.TorusGeometry(2.6, 0.015, 16, 80);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x4f8cff,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.0, 0.012, 16, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x9f5cff,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    coreGroup.add(ring2);

    // 5. ORBITING DATA NODES
    const nodeCount = isMobile ? 3 : 6;
    const nodes: THREE.Mesh[] = [];
    const nodeGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
    });

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      coreGroup.add(node);
      nodes.push(node);
    }

    // 6. AMBIENT DATA PARTICLES CLOUD
    const particleCount = isMobile ? 35 : 100;
    const particleGeo = new THREE.BufferGeometry();
    const particleCoords = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particleCoords[i] = (Math.random() - 0.5) * 10;
      particleCoords[i + 1] = (Math.random() - 0.5) * 10;
      particleCoords[i + 2] = (Math.random() - 0.5) * 6;
    }

    particleGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(particleCoords, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0x64748b,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particleCloud = new THREE.Points(particleGeo, particleMat);
    scene.add(particleCloud);

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // ANIMATION TICK LOOP
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Mouse Parallax Lerping (Damping)
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Base idle rotation + interactive mouse influence
      coreGroup.rotation.y = elapsedTime * 0.2 + mouse.x * 0.6;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.15 - mouse.y * 0.5;

      // Counter-rotation on rings
      ring1.rotation.z = elapsedTime * 0.3;
      ring2.rotation.z = -elapsedTime * 0.25;

      // Inner nucleus opposite rotation
      nucleusMesh.rotation.y = -elapsedTime * 0.4;
      nucleusMesh.rotation.x = elapsedTime * 0.3;
      nucleusWire.rotation.y = -elapsedTime * 0.4;
      nucleusWire.rotation.x = elapsedTime * 0.3;

      // Update Orbiting Nodes around Ring 1 & Ring 2
      nodes.forEach((node, i) => {
        const angle = elapsedTime * 0.8 + (i * Math.PI * 2) / nodeCount;
        const radius = i % 2 === 0 ? 2.6 : 3.0;
        if (i % 2 === 0) {
          node.position.x = Math.cos(angle) * radius;
          node.position.y = Math.sin(angle) * radius * Math.cos(ring1.rotation.x);
          node.position.z = Math.sin(angle) * radius * Math.sin(ring1.rotation.x);
        } else {
          node.position.x = Math.sin(angle) * radius * Math.cos(ring2.rotation.y);
          node.position.y = Math.cos(angle) * radius;
          node.position.z = Math.sin(angle) * radius * Math.sin(ring2.rotation.y);
        }
      });

      // Subtle particle cloud drift
      particleCloud.rotation.y = elapsedTime * 0.03;
      particleCloud.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

      // Scroll Progress Binding
      const scroll = scrollRef.current;
      const scrollScale = Math.max(0.7, 1 - scroll * 0.4);
      coreGroup.scale.set(scrollScale, scrollScale, scrollScale);
      coreGroup.position.y = scroll * 1.5;
      camera.position.z = 7.5 + scroll * 1.8;

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    // CLEANUP ON UNMOUNT
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);

      if (renderer && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      cageGeometry.dispose();
      cageMaterial.dispose();
      nucleusGeometry.dispose();
      nucleusMaterial.dispose();
      nucleusWireMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      vertexPointsGeo.dispose();
      vertexPointsMat.dispose();
      if (renderer) {
        renderer.dispose();
      }
    };
  }, [isReducedMotion]);

  // FALLBACK COMPONENT (Rendered if reduced motion is enabled)
  if (isReducedMotion) {
    return (
      <div className="relative w-full h-full min-h-[380px] sm:min-h-[480px] flex items-center justify-center pointer-events-none select-none">
        {/* Ambient Glows */}
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#4F8CFF]/15 blur-3xl" />
        <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#9F5CFF]/15 blur-3xl" />

        {/* Abstract SVG Geometric Core */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            aria-hidden="true"
          >
            {/* Outer Ring */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="#4F8CFF"
              strokeWidth="0.75"
              strokeDasharray="4 6"
              opacity="0.5"
            />
            {/* Inner Ring */}
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="#9F5CFF"
              strokeWidth="0.75"
              strokeDasharray="2 4"
              opacity="0.6"
            />
            {/* Geometric Hexagonal Cage */}
            <polygon
              points="100,25 165,62 165,138 100,175 35,138 35,62"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="1"
              opacity="0.7"
            />
            <polygon
              points="100,45 147,72 147,128 100,155 53,128 53,72"
              fill="#0D1627"
              stroke="#4F8CFF"
              strokeWidth="0.75"
              opacity="0.8"
            />
            {/* Connecting Diagonal Lines */}
            <line x1="100" y1="25" x2="100" y2="175" stroke="#4F8CFF" strokeWidth="0.5" opacity="0.3" />
            <line x1="35" y1="62" x2="165" y2="138" stroke="#4F8CFF" strokeWidth="0.5" opacity="0.3" />
            <line x1="35" y1="138" x2="165" y2="62" stroke="#4F8CFF" strokeWidth="0.5" opacity="0.3" />

            {/* Orbiting Nodes */}
            <circle cx="100" cy="25" r="3" fill="#38BDF8" />
            <circle cx="165" cy="138" r="3" fill="#9F5CFF" />
            <circle cx="35" cy="138" r="3" fill="#4F8CFF" />
          </svg>

          {/* Central Technical Pulse Core */}
          <div className="absolute w-16 h-16 rounded-xl bg-[#080E1A] border border-[#4F8CFF]/40 flex items-center justify-center shadow-lg shadow-[#4F8CFF]/20">
            <div className="w-8 h-8 rounded-lg bg-[#4F8CFF]/20 border border-[#4F8CFF]/60 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[500px] lg:h-[620px] cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D Geometric Systems Visualization"
    />
  );
}
