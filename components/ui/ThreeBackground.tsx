'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30

    // Particles
    const count = 2000
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)

    const colors = [
      [0.49, 0.43, 0.98],
      [0.98, 0.43, 0.55],
      [0.43, 0.98, 0.80],
    ]

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40
      const c = colors[Math.floor(Math.random() * colors.length)]
      col[i * 3] = c[0]; col[i * 3 + 1] = c[1]; col[i * 3 + 2] = c[2]
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3))

    const mat = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geo, mat)
    scene.add(points)

    // Floating wireframe shapes
    const shapes: { mesh: THREE.Mesh; speed: number }[] = []
    const geoms = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(0.8, 0),
      new THREE.TetrahedronGeometry(0.9, 0),
    ]

    for (let i = 0; i < 6; i++) {
      const g = geoms[i % geoms.length]
      const m = new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? 0x7c6dfa : i % 3 === 1 ? 0xfa6d8f : 0x6dfacc,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      })
      const mesh = new THREE.Mesh(g, m)
      mesh.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20
      )
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
      shapes.push({ mesh, speed: Math.random() * 0.003 + 0.001 })
      scene.add(mesh)
    }

    let mouseX = 0, mouseY = 0
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5
    }
    document.addEventListener('mousemove', handleMouseMove)

    let scrollY = 0
    const handleScroll = () => { scrollY = window.scrollY }
    window.addEventListener('scroll', handleScroll)

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = Date.now() * 0.0005

      points.rotation.y = t * 0.05 + mouseX * 0.3
      points.rotation.x = mouseY * 0.2

      shapes.forEach(({ mesh, speed }) => {
        mesh.rotation.x += speed
        mesh.rotation.y += speed * 0.7
        mesh.position.y += Math.sin(t + mesh.position.x) * 0.005
      })

      camera.position.y = -scrollY * 0.02
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none',
      }}
    />
  )
}
