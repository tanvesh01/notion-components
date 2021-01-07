import React from 'react'
import styles from './Button.module.css'
import Fade from '../../Utilities/FadeAnimation/Fade'
const Button = ({ children }) => {
  const [display, setDisplay] = React.useState(false)
  // console.log(display)
  return (
    <div className={styles.container}>
      <button className={` ${styles.mainButton} ${styles.root}`}>
        {children}
      </button>
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
            <li className={styles.items}>Option A</li>
            <li className={styles.items}>Option B</li>
            <li className={styles.items}>Option C</li>
          </ul>
        </div>
      </Fade>
    </div>
  )
}

export default Button
