
<h1 color="red">Welcome to notion-components 👋</h1>

<p>

<a  href="https://www.npmjs.com/package/notion-components"  target="_blank">

<img  alt="Version"  src="https://img.shields.io/npm/v/notion-components.svg">

</a>

<img  src="https://img.shields.io/badge/node-%3E%3D10-blue.svg" />

<a  href="#"  target="_blank">

<img  alt="License: MIT"  src="https://img.shields.io/badge/License-MIT-yellow.svg" />

</a>

<a  href="https://twitter.com/Sarve\_\_\_tanvesh"  target="_blank">

<img  alt="Twitter: Sarve\_\_\_tanvesh"  src="https://img.shields.io/twitter/follow/Sarve___tanvesh?label=Follow%20me%21&style=social" />

</a>

</p>

> React Component Library for the minimalist
## Prerequisites



- node >=10



## Install



```sh

npm install notion-components

```

> When importing a component make sure to import the css file too. Like this
 ```jsx
 import  'notion-components/dist/index.css'
 ```

### Simple `TextBox` Component
[![TextBoxDemo.gif](https://s4.gifyu.com/images/TextBoxDemo.gif)](https://gifyu.com/image/akA2)

Renders an *Invisible* `TextBox`. In the above gif, There are two `TextBox` components. One is the heading, beside the emoji. Another one is the description, with a Lot of Text.

The Component itself is customizable with your css, So you have to set things like, `font-size` and `font-weight` to layout the `TextBox` accordingly.

`App.js` :
   ```jsx
   import  React, { useState }  from  'react'
import { TextBox } from  'notion-components'
import  'notion-components/dist/index.css'

import './App.css'

const App = () => {
const [text, setText] =  useState('Meeting Notes')

const  onChangeHandler  = (value) => {
		setText(value)
}
return (
		<TextBox
			onChangeHandler={onChangeHandler}
			placeholder='Untitled'
			initialValue={text}
			customClassName="textbox"
		/>
	);
}
export default App
```

`App.css` :
```css
.textbox{
	font-size: 4rem;
	font-weight: 700;
}
```

### Simple `Button` props
| Attribute |    Type    |  Default  | Description
| :-------- | :--------: | :-------: | :------------------------------------------------------------------------------------------------------- |
| placeholder     |  `string`  | `empty string` | Renders when the `TextBox` is empty
| disabled  |   `bool`   |  `false`  | Should render a disabled `TextBox`, if set to `true`                                           |
| className   |   `string`   |  `null`   | Pass your css className here. Works with `css modules` too.                                                                           |
| onChangeHandler    |   `function`   |  `null`  | A function that gets `value` inside TextBox as an argument at every keypress                                                                                                               |
| placeholderColor     |  `string | css color`  |  `'#e1e1e0'`   | Css color that sets the placeholder color|
| initialValue    |  `string`  |  `null`   |  The value inside the `TextBox` before the initial render |



### Simple `Button` rendered with a Dropdown

[![buttonDropdownNeural.gif](https://s2.gifyu.com/images/buttonDropdownNeural.gif)](https://gifyu.com/image/Uvr8)

Renders a `Button` with a dropdown. We have to pass an array of `options` with two properties, `value` and `function` like in the example below.
   ```jsx
   import  React  from  'react'
import { Button } from  'notion-components'
import  'notion-components/dist/index.css'

const  App  = () => {
		const  first  = () => {
				console.log('1st option was clicked')
		}
		const  second  = () => {
				console.log('2nd option was clicked')
		}
		const  third  = () => {
				console.log('3rd option was clicked')
		}
		const  onPress  = () => {
				console.log('Did you just click me?!')
		}

		const  options  = [
				{
					value: 'Started from the bottom',
					function: first
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

		return (
				<Button  top='100%'  left='30px'  options={options}  onClick={() =>  onPress()}>
					New
				</Button>
		);
}
export  default  App
```
### Simple `Button` rendered without a Dropdown

![Button without a dropdown](https://s2.gifyu.com/images/buttonMost.gif)

Renders a `Button` without a dropdown. If the `option` prop's length is found to be 0 or if its value is `null`, then the deopdown will not render at all.

   ```jsx
   import  React  from  'react'
import { Button } from  'notion-components'
import  'notion-components/dist/index.css'

const  App  = () => {
		const  onPress  = () => {
				console.log('Did you just click me?!')
		}
		return (
				<Button onClick={() =>  onPress()}>
					New
				</Button>
		);
}
export  default  App
```

### Simple `Button` props
| Attribute |    Type    |  Default  | Description
| :-------- | :--------: | :-------: | :------------------------------------------------------------------------------------------------------- |
| onClick     |  `function`  | `null` | Default click/press function
| disabled  |   `bool`   |  `false`  | Should render a disabled button                                                                          |
| options   |   `array`   |  `null`   | An array of objects with properties  .If empty array is passed, Dropdown button will not render                                                                            |
| top    |   `string`   |  `"80%"`  | Controls the `top` css property for the Dropdown                                                                                                                                         |
| left     |  `string`  |  `"0px"`   | Controls the `left` css property for the Dropdown|
| width    |  `string`  |  `null`   |  Controls the `width` css property for the Dropdown  |



## Author

👤 **tanvesh01**


* Website: [tanvesh.vercel.app](https://tanvesh.vercel.app/)

* Twitter: [@Sarve\_\_\_tanvesh](https://twitter.com/Sarve\_\_\_tanvesh)

* Github: [@tanvesh01](https://github.com/tanvesh01)

* LinkedIn: [@tanvesh01](https://linkedin.com/in/tanvesh01)

## Show your support
Please Give a ⭐️ if this project helped you! It will motivate me to keep working on this!
## License
 MIT. Copyright (c) 2021 Tanvesh Sarve.
