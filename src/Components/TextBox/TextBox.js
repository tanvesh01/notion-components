import React from 'react'
import styles from './TextBox.module.css'

const TextBox = ({ onChange, value }) => {
  const getSelectionText = () => {
    let newSpan = document.createElement('span')
    let selectedDiv = document.getElementById('demo')

    let text = ''
    if (window.getSelection) {
      text = window.getSelection().toString()
      console.log(window.getSelection().anchorNode)
    } else if (document.selection && document.selection.type != 'Control') {
      text = document.selection.createRange().text
    }
    console.log(text)
    // adding span
    // let currentText = selectedDiv.innerText
    // currentText = currentText.replace(text, '')
    // selectedDiv.innerText = currentText
    // // inserting text
    // newSpan.innerText = text
    // newSpan.style.color = 'grey'
    // selectedDiv.appendChild(newSpan)
  }

  return (
    <div
      data-gramm='false'
      id='demo'
      className={styles.root}
      onSelect={() => getSelectionText()}
      onChange={() => onChange(e)}
      contentEditable='true'
    >
      Notes hey! I can write
    </div>
    // <input
    //   spellcheck='false'
    //   value={value}
    //   onSelect={() => getSelectionText()}
    //   onChange={(e) => {
    //     onChange(e)
    //   }}
    //   aria-errormessage={false}
    //   type='text'
    //   className={styles.root}
    // />
  )
}

export default TextBox
