import React from 'react'
import TextBox from '../Components/TextBox/TextBox'
import TextBoxExamplePage from './TextBoxExamplePage/TextBoxExamplePage'
import classes from './TextBoxExamplePage/TextBoxExamplePage.module.css'
export default {
  title: 'Example/TextBox',
  component: TextBox
}

export const Primary = (args) => (
  <TextBox
    className={classes.heading}
    {...args}
    placeholder='Hey!👋, start typing here'
  />
)

Primary.storyName = 'Simple TextBox'

export const Secondary = (args) => <TextBoxExamplePage {...args} />

Secondary.storyName = 'TextBox example in notion UI'
