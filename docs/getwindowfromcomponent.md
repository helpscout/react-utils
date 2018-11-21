# getWindowFromComponent

Retrieves the `window` where the Component was mounted to.

## Arguments

| Argument | Type | Description |
| :--- | :--- | :--- |
| `Component` | `React.Component` | The React component. |

## Returns

`Window`: The target window.

## Examples

```jsx
import React from 'react'
import getWindowFromComponent from '@helpscout/react-utils/dist/getWindowFromComponent'

class Napoleon extends React.Component {
  ...
  componentDidMount () {
    this.win = getWindowFromComponent(this)
    // window
  }
  ...
}
```

