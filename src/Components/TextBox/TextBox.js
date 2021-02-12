import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const TextBox = ({
  initialValue = '',
  placeholder = '',
  onChangeHandler = null,
  customClassName = '',
  disabled = false
}) => {
  const textBox = useRef('')
  const onChange = (e) => {
    onChangeHandler(e.target.innerText)
  }
  useEffect(() => {
    if (initialValue.length > 0) {
      textBox.current.innerText = initialValue
    }
  }, [])
  return (
    <div
      ref={textBox}
      onInput={(e) => onChange(e)}
      disabled={true}
      contentEditable={!disabled}
      placeholder={placeholder}
      style={
        initialValue.length === 0
          ? {
              color: '#e1e1e0'
            }
          : null
      }
      className={`${customClassName} `}
      data-gramm='false'
    ></div>
  )
}

TextBox.propTypes = {
  initialValue: PropTypes.string,
  disabled: PropTypes.bool,
  customClassName: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func
}

export default TextBox
