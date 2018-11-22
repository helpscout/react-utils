# getOwnerDisplayName

Retrieves the name of a parent/owner React component.

## Arguments

| Argument    | Type              | Description        |
| :---------- | :---------------- | :----------------- |
| `Component` | `React.Component` | A React component. |

## Returns

`string`: The name of a parent/owner React component.

## Examples

```jsx
import React from 'react'
import getOwnerDisplayName from '@helpscout/react-utils/dist/getOwnerDisplayName'

class App extends React.Component {
  render () {
    <Rex>
      <KwanDo />
    </Rex>
  }
}

class KwanDo extends React.Component {
  ...
  componentDidMount() {
    getOwnerDisplayName(KwanDo)
    // Rex
  }
  ...
}
```
