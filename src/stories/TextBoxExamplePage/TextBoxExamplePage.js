import React, { useState } from 'react'
import classes from './TextBoxExamplePage.module.css'
import TextBox from '../../Components/TextBox/TextBox'
const TextBoxExamplePage = ({
  placeholder = 'Untitled',
  disabled = false,
  placeholderColor = '#e1e1e0'
}) => {
  const [text, setText] = useState('')

  const onChange = (value) => {
    setText(value)
  }
  // Layout here to show the TextBox
  // then on TextBox.stories.js, export that component with secondary
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}></div>
      <div className={classes.headingConatiner}>
        <div className={classes.emoji}>🤠</div>
        <TextBox
          onChangeHandler={onChange}
          className={classes.heading}
          placeholder={placeholder}
          initialValue='Meeting Notes'
          placeholderColor={placeholderColor}
          disabled={disabled}
        />
      </div>
      <div className={classes.descConatiner}>
        <TextBox
          className={classes.desc}
          initialValue='Use this template to capture notes from all meetings in one accessible spot.
Notes can be tagged by meeting type to make them easy to find.
See when each meeting took place and who was there.'
          placeholder='Add a Description'
        />
      </div>
      <div className={classes.toolbar}></div>
      <div className={classes.placeHolderContainer}>
        <div className={classes.col}></div>
        <div className={classes.col}></div>
        <div className={classes.col}></div>
        <div className={classes.col}></div>
        <div className={classes.col}></div>
      </div>
    </div>
  )
}

export default TextBoxExamplePage
