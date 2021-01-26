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

<img  alt="Twitter: Sarve\_\_\_tanvesh"  src="https://img.shields.io/twitter/follow/Sarve\_\_\_tanvesh.svg?style=social" />

</a>

</p>

> React Component Library for the minimalist

### 🏠 [Homepage](https://github.com/tanvesh01/react-essentials)

## Prerequisites

- node >=10

## Install

```sh

npm install notion-components

```

### Simple `Button` rendered with a Dropdown

[![buttonDropdownNeural.gif](https://s2.gifyu.com/images/buttonDropdownNeural.gif)](https://gifyu.com/image/Uvr8)

Renders a `Button` with a dropdown. We have to pass an array of `options` with two properties, `value` and `function` like in the example below.

```jsx
import React from 'react'
import { Button } from 'notion-components'
import 'notion-components/dist/index.css'

const App = () => {
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
    <Button top='100%' left='30px' options={options} onClick={() => onPress()}>
      New
    </Button>
  )
}
export default App
```

### Simple `Button` rendered without a Dropdown

```jsx
import React from 'react'
import { Button } from 'notion-components'
import 'notion-components/dist/index.css'

const App = () => {
  const onPress = () => {
    console.log('Did you just click me?!')
  }
  return <Button onClick={() => onPress()}>New</Button>
}
export default App
```

### Simple `Button` props

| Attribute |    Type    |    Default    | Description                                                                                    |
| :-------- | :--------: | :-----------: | :--------------------------------------------------------------------------------------------- |
| onClick   | `function` |    `null`     | Default click/press function                                                                   |
| disabled  |   `bool`   |    `false`    | Should render a disabled button                                                                |
| options   |  `array`   | `Empty array` | An array of objects with properties .If empty array is passed, Dropdown button will not render |
| top       |  `string`  |    `"80%"`    | Controls the `top` css property for the Dropdown                                               |
| left      |  `string`  |    `"0px"`    | Controls the `left` css property for the Dropdown                                              |
| width     |  `string`  |    `null`     | Controls the `width` css property for the Dropdown                                             |

## Author

👤 **tanvesh01**

- Website: tanvesh.vercel.app

- Twitter: [@Sarve\_\_\_tanvesh](https://twitter.com/Sarve___tanvesh)

- Github: [@tanvesh01](https://github.com/tanvesh01)

- LinkedIn: [@tanvesh01](https://linkedin.com/in/tanvesh01)

## Show your support

Give a ⭐️ if this project helped you!

---
