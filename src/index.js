import React from 'react'
import './styles.css'

export { default as Button } from './Components/Button/Button'
// export { default as TextBox } from './Components/TextBox/TextBox'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
