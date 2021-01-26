import React, { Fragment } from 'react'
import classes from './Button.module.css'
import Fade from '../../Utilities/FadeAnimation/Fade'
import PropTypes from 'prop-types'
// right top
const Button = ({ children, options, onClick, left, top, width, disabled }) => {
  const [display, setDisplay] = React.useState(false)
  return (
    <div className={classes.container}>
      <button
        disabled={disabled ? disabled : false}
        onClick={() => {
          onClick ? onClick() : null
        }}
        style={
          options
            ? null
            : { borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }
        }
        className={`${classes.mainButton} ${classes.root}`}
      >
        {children}
      </button>
      {display ? (
        <div
          onClick={() => setDisplay(false)}
          className={classes.overlay}
        ></div>
      ) : null}

      {options && options.length > 0 ? (
        <Fragment>
          <button
            disabled={disabled ? disabled : false}
            onClick={() => setDisplay(!display)}
            className={`${classes.root} ${classes.dropDownButton}`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1rem'
              height='1rem'
              fill='white'
              viewBox='0 0 24 24'
            >
              <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
            </svg>
          </button>
          <Fade left={left} top={top} show={display}>
            <div
              className={classes.dropdown}
              style={width ? { width: width } : null}
            >
              <div className={classes.headingContainer}>
                <p className={classes.heading}> Dropdown</p>
              </div>
              <ul className={classes.listContainer}>
                {options.map((item) => {
                  return (
                    <li
                      onClick={() => {
                        item.function()
                        setDisplay(false)
                      }}
                      className={classes.items}
                    >
                      {item.value}
                    </li>
                  )
                })}
              </ul>
            </div>
          </Fade>{' '}
        </Fragment>
      ) : null}
    </div>
  )
}

Button.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,
  width: PropTypes.string,
  options: PropTypes.array
}

export default Button
