# wrapComponentName

Wraps the name of a React component.

## Arguments

| Argument | Type | Description |
| :--- | :--- | :--- |
| `Component` | `React.Component` | A React component. |

## Returns

`string`: The wrapped name of a React component.

## Examples

```jsx
import React from 'react'
import wrapComponentName from '@helpscout/react-utils/dist/wrapComponentName'

class Napoleon extends React.Component {
  ...
}

wrapComponentName(Napoleon, 'withSkills')
// withSkills(Napoleon)
```

