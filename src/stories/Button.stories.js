import React from 'react'

import Button from '../Components/Button/Button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    disabled: {
      description: 'When true, Should render a disabled button',
      control: 'boolean'
    },
    options: {
      table: {
        disable: true
      }
    },
    left: {
      table: {
        disable: true
      }
    },
    top: {
      table: {
        disable: true
      }
    },
    width: {
      table: {
        disable: true
      }
    }
  }
}

export const Primary = (args) => (
  <Button onClick={action('Did you just click me?!')} {...args}>
    Button
  </Button>
)

Primary.storyName = 'Simple Button'

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
