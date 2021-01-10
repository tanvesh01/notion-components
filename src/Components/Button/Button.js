import React, { Fragment } from 'react'
import styles from './Button.module.css'
import Fade from '../../Utilities/FadeAnimation/Fade'
const Button = ({ children, options, onClick }) => {
  const [display, setDisplay] = React.useState(false)
  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          onClick ? onClick() : null
        }}
        style={
          options
            ? null
            : { borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }
        }
        className={` ${styles.mainButton} ${styles.root}`}
      >
        {children}
      </button>
      {options && options.length > 0 ? (
        <Fragment>
          <button
            onClick={() => setDisplay(!display)}
            className={`${styles.root} ${styles.dropDownButton}`}
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
          <Fade show={display}>
            <div className={styles.dropdown}>
              <div className={styles.headingContainer}>
                <p className={styles.heading}>Simple Dropdown</p>
              </div>
              <ul className={styles.listContainer}>
                {options.map((item) => {
                  return (
                    <li
                      onClick={() => {
                        item.function()
                        setDisplay(false)
                      }}
                      className={styles.items}
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

export default Button
