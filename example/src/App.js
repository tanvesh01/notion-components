import React from 'react'
import classes from './App.module.css'
import { Button } from 'notion-components'
import 'notion-components/dist/index.css'
// "notion-components": "file:.."

const App = () => {
  const first = () => {
    console.log('1st option was clicked')
  }
  const second = () => {
    console.log('2nd option was clicked')
  }
  const third = () => {
    console.log('3rd option was clicked')
  }
  const Click = () => {
    console.log('hrey')
  }
  const options = [
    {
      value: 'Option 1',
      function: first
    },
    {
      value: 'Option 2',
      function: second
    },
    {
      value: 'Option 3',
      function: third
    }
  ]
  return (
    <>
      <div className={classes.Layout}>
        <Button options={options} onClick={Click}>
          New
        </Button>
      </div>
    </>
  )
}

export default App
