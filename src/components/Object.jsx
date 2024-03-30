import React from "react";
import {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls} from "@react-three/drei";


export default function BoxObject({src}) {

  function Model(props){
    const {scene} = useGLTF(src);
    return <primitive object={scene} {...props} /> 
  }

  return (
    <div className="object-box">
        <Canvas className="canvas-img" dpr={[1,2]} shadows camera={{fav: 55}}>
          <color attach='background' args={['#101010']} />
          <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={null}>
              <Model scale={0.01} />
            </Stage>
          </PresentationControls>
        </Canvas>
    </div>
  );
}