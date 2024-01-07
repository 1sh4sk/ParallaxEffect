// import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import moon from './moon.png'
import land from './land.png'
import cat from './cat.gif'
import { useRef } from 'react'

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={window.innerWidth < 768 ? 2 : 4} ref={ref} className='parallax'
      >

        <ParallaxLayer
          offset={0} speed={1} factor={window.innerWidth < 768 ? 1 : 2}
          className='moon'
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={window.innerWidth < 768 ? 1 : 2} speed={1} factor={window.innerWidth < 768 ? 1 : 4}
          className='land'
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          sticky={window.innerWidth < 768 ? { start: 0.3, end: 1 } : { start: 0.8, end: 2.5 }} className='cat'
        >
          <img src={cat} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={window.innerWidth < 768 ? 0.2 : 0.3} className='welcome'
          speed={0.05}
          onClick={window.innerWidth < 768 ? () => ref.current.scrollTo(1) : () => ref.current.scrollTo(3)}>
          <h2>Welcome to my Website!</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={window.innerWidth < 768 ? 1.5 : 3.4} className='hello'
          speed={2}
          onClick={() => ref.current.scrollTo(0)}>
          <h2>Hello Fellow Developers!</h2>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App
