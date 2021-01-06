import React, { useEffect, useState } from 'react'
import './styles.css'
const Fade = ({ show, children }) => {
  const [render, setRender] = useState(show)

  useEffect(() => {
    if (show) setRender(true) // if show true the render true
  }, [show])

  const onAnimationEnd = () => {
    if (!show) setRender(false) // if show false then render false
  }
  console.log(render)
  return (
    render && (
      <div
        style={{ animation: `${show ? 'fadeIn' : 'fadeOut'} 1s` }}
        // onAnimationEnd={onAnimationEnd}
        // onAnimationEndCapture={onAnimationEnd}
        onAnimationEnd={() => console.log('heello')}
        key='123'
      >
        {children}
      </div>
    )
  )
}

export default Fade
