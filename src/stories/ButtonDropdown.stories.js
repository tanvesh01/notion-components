import React from 'react'

import Button from '../Components/Button/Button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Example/Button with a Dropdown',
  component: Button,
  argTypes: {
    disabled: {
      description: 'When true, Should render a disabled button',
      control: 'boolean'
    },
    options: {
      description:
        'An array of objects with properties .If empty array is passed, Dropdown button will not render',
      control: 'array'
    },
    left: {
      description: 'Controls the left css property for the Dropdown',
      control: 'text'
    },
    top: {
      description: 'Controls the top css property for the Dropdown',
      control: 'text'
    },
    width: {
      description: 'Controls the width css property for the Dropdown',
      control: 'text'
    }
  }
}

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
    function: action('Started from the bottom')
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

export const Secondary = (args) => (
  <Button
    onClick={action('Did you just click me?!')}
    {...args}
    options={options}
  >
    Button
  </Button>
)

Secondary.storyName = 'Button with a dropdown'
