import React from 'react'
import { Button } from 'notion-components'
import classes from './App.module.css'
import 'notion-components/dist/index.css'

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
  const onPress = () => {
    console.log('Did you just click me?!')
  }
  const options = [
    {
      value: 'Started from the bottom',
      function: first
    },
    {
      value: 'Sometimes its the journey',
      function: second
    },
    {
      value: 'Trust the process',
      function: third
    }
  ]
  return (
    <>
      <div className={classes.Layout}>
        <Button top='100%' left='30px' onClick={() => onPress()}>
          New
        </Button>
      </div>
    </>
  )
}

export default App
