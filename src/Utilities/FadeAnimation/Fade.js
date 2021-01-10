import React, { useEffect, useState, Fragment } from 'react'
import './styles.css'
const Fade = ({ show, children }) => {
  const [render, setRender] = useState(show)
  const mountedStyle = {
    animation: 'inAnimation 500ms ease-out',
    transformOrigin: '50% bottom',
    top: '103%',
    position: 'absolute'
  }
  const unmountedStyle = {
    animation: 'outAnimation 500ms ease-out',
    transformOrigin: '50% bottom',
    top: '103%',
    position: 'absolute'
  }
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
          onAnimationEnd={onAnimationEnd}
          key='123'
        >
          {children}
        </div>
        <style>
          {`

            @keyframes inAnimation {
              from {
                opacity: 0;
                transform: scale(0.2);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes outAnimation {
              from {
                opacity: 1;
                transform: scale(1);
              }
              to {
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
