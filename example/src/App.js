import React, { useEffect, useState } from 'react'
import { TextBox } from 'notion-components'
import classes from './App.module.css'
import 'notion-components/dist/index.css'

const App = () => {
  const [text, setText] = useState('Tanvesh')

  const onChangeHandler = (value) => {
    setText(value)
  }

  useEffect(() => {
    // document.getElementById('content').addEventListener('input', (e) => {
    //   console.log(e.target.value)
    //   console.log()
    // })
  }, [])
  return (
    <>
      <div className={classes.Layout}>
        <TextBox
          onChangeHandler={onChangeHandler}
          placeholder='Untitled'
          initialValue={text}
          customClassName={classes.textbox}
          onKeyPress={(e) => {
            e.persist()
            console.log(e.key)
          }}
          // disabled
        />
      </div>
    </>
  )
}

export default App
// "start": "node ../node_modules/react-scripts/bin/react-scripts.js start",
//     "build": "node ../node_modules/react-scripts/bin/react-scripts.js build",
//     "test": "node ../node_modules/react-scripts/bin/react-scripts.js test",
//     "eject": "node ../node_modules/react-scripts/bin/react-scripts.js eject",
