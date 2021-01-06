import React, { useEffect, useState, Fragment } from 'react'
import './styles.css'
const Fade = ({ show, children }) => {
  const [render, setRender] = useState(show)
  const mountedStyle = { animation: 'inAnimation 500ms ease-in' }
  const unmountedStyle = { animation: 'outAnimation 510ms ease-in' }
  useEffect(() => {
    if (show) setRender(true) // if show true the render true
  }, [show])

  const onAnimationEnd = () => {
    if (!show) setRender(false) // if show false then render false
  }
  console.log(render)
  return (
    render && (
      <Fragment>
        <div
          style={show ? mountedStyle : unmountedStyle}
          // onAnimationEnd={onAnimationEnd}
          // onAnimationEndCapture={onAnimationEnd}
          // onAnimationStart={() => console.log('start')}
          onAnimationEnd={onAnimationEnd}
          key='123'
        >
          {children}
        </div>
        <style>
          {`

           @keyframes inAnimation {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    60% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes outAnimation {
    20% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
          `}
        </style>
      </Fragment>
    )
  )
}

export default Fade
