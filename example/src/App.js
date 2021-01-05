import React from 'react'
import classes from './App.module.css'
import { TextBox, Button } from 'notion-components'
import 'notion-components/dist/index.css'

const App = () => {
  const [value, setValue] = React.useState('')
  const onChangeHandler = (e) => {
    setValue(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <div className={classes.Layout}>
        <Button>New</Button>
        {/* <TextBox value={value} onChange={onChangeHandler} /> */}
      </div>
    </>
  )
}

export default App
