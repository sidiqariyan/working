import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Globe({ size = 220, color = 0x5D6BFF }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
    camera.position.z = 4
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(size, size)
    el.appendChild(renderer.domElement)

    const geom = new THREE.SphereGeometry(1.4, 32, 32)
    const mat = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.35 })
    const sphere = new THREE.Mesh(geom, mat)
    scene.add(sphere)

    const onResize = () => {
      const w = size, h = size
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    let raf
    const tick = () => {
      sphere.rotation.y += 0.003
      sphere.rotation.x += 0.001
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); el.removeChild(renderer.domElement); renderer.dispose() }
  }, [size, color])

  return <div ref={ref} style={{ width: size, height: size, margin: '0 auto' }} />
}
