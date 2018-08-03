# getComponentName

Retrieves the name of a React component.

## Arguments

| Argument | Type | Description |
| :--- | :--- | :--- |
| `Component` | `React.Component` | A React component. |

## Returns

`string`: The name of a React component.

## Examples

```jsx
import React from 'react'
import getComponentName from '@helpscout/react-utils/dist/getComponentName'

class UncleRico extends React.Component {
  ...
}

getComponentName(UncleRico)
// UncleRico
```

