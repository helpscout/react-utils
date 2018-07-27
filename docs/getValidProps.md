# `getValidProps(props)`

Filters out and returns valid React-safe props.

#### Arguments

| Argument    | Type              | Description        |
| ----------- | ----------------- | ------------------ |
| `props` | `Object` | An prop-object of key-value pairs. |

#### Returns

`Object`: Filtered React-safe props.

#### Alias

`restProps(props)`

#### Examples

```jsx
import React from 'react'
import getValidProps from '@helpscout/react-utils/dist/getValidProps'

class UncleRico extends React.Component {
  ...
  render () {
    const rest = {getValidProps(this.props)}
    return (<div {...rest} />}
  }
}
```
