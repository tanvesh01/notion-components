import React from 'react'

import Button from '../Components/Button/Button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Example/Button with a Dropdown',
  component: Button,
  argTypes: {
    disabled: {
      description: 'When true, Should render a disabled button',
      control: 'boolean',
      table: {
        type: {
          summary: 'something short',
          detail: 'something really really long'
        }
      }
    },
    options: {
      control: 'array'
    },
    left: {
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

Secondary.storyName = 'Button with dropdown'

// import React from 'react'

// import { Button } from './Button'

// export default {
//   title: 'Example/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' }
//   }
// }

// const Template = (args) => <Button {...args} />

// export const Primary = Template.bind({})
// Primary.args = {
//   primary: true,
//   label: 'Button'
// }

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button'
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button'
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button'
// }
