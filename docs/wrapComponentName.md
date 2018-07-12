# `wrapComponentName(Component)`

Wraps the name of a React component.

#### Arguments

| Argument    | Type              | Description        |
| ----------- | ----------------- | ------------------ |
| `Component` | `React.Component` | A React component. |

#### Returns

`string`: The wrapped name of a React component.

#### Examples

```jsx
import React from 'react'
import wrapComponentName from '@helpscout/react-utils/wrapComponentName'

class Napolean extends React.Component {
  ...
}

wrapComponentName(Napolean, 'withSkills')
// withSkills(Napolean)
```
