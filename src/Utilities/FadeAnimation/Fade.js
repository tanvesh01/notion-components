import React, { useEffect, useState, Fragment } from 'react'
const Fade = ({ show, children, left, top }) => {
  const [render, setRender] = useState(show)
  const mountedStyle = {
    animation: 'inAnimation 300ms ease-out',
    transformOrigin: '50% bottom',
    top: top ? top : '80%',
    left: left ? left : '0px',
    position: 'absolute'
  }
  const unmountedStyle = {
    animation: 'outAnimation 200ms ease-out',
    transformOrigin: '50% bottom',
    top: top ? top : '80%',
    left: left ? left : '0px',
    position: 'absolute'
  }
  useEffect(() => {
    if (show) setRender(true) // if show true then render true
  }, [show])

  const onAnimationEnd = () => {
    if (!show) setRender(false) // if show false then render false
  }
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
                opacity: 0.4;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes outAnimation {
              from {
                opacity: 1;
              }
              to {
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
