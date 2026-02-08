import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Shoe({ color, ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/air_jordan_1.glb')

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Scene || nodes.scene || Object.values(nodes)[0]} />
    </group>
  )
}

useGLTF.preload('/air_jordan_1.glb')
