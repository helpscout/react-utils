# getCustomProps

Filters out and returns custom non-React-safe props.

## Arguments

| Argument | Type | Description |
| :--- | :--- | :--- |
| `props` | `Object` | An prop-object of key-value pairs. |

## Returns

`Object`: Filtered custom, non-React-safe props.

## Examples

```jsx
import React from 'react'
import getCustomProps from '@helpscout/react-utils/dist/getCustomProps'

class UncleRico extends React.Component {
  ...
  render () {
    const customProps = {getCustomProps(this.props)}

    const { throwSteak } = customProps

    return throwSteak ? (<div />) : null
  }
}
```

