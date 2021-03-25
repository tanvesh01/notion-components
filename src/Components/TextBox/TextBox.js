import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const TextBox = ({
  initialValue = '',
  placeholder = '',
  onChangeHandler,
  className = '',
  disabled = false,
  placeholderColor = '#e1e1e0',
  ...props
}) => {
  const textBox = useRef('')
  console.log(props)
  const [value, setValue] = useState('')

  const onChange = (e) => {
    if (onChangeHandler) {
      onChangeHandler(e.target.innerText)
    }
    setValue(e.target.innerText)
    // console.log(textBox.current.innerText)
  }
  useEffect(() => {
    if (initialValue.length > 0) {
      textBox.current.innerText = initialValue
      setValue(initialValue)
    }
  }, [])
  return (
    <div
      {...props}
      ref={textBox}
      onInput={(e) => onChange(e)}
      disabled={true}
      contentEditable={!disabled}
      placeholder={placeholder}
      style={
        value === ''
          ? {
              color: placeholderColor
            }
          : null
      }
      className={`${className} `}
      data-gramm='false'
    ></div>
  )
}

TextBox.propTypes = {
  initialValue: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func,
  placeholderColor: PropTypes.string
}

export default TextBox
