# `isReactComponent(Component)`

Determines if the provided Object is a valid React component.

#### Arguments

| Argument    | Type              | Description            |
| ----------- | ----------------- | ---------------------- |
| `Component` | `React.Component` | The "React component". |

#### Returns

`boolean`: Whether the provided object was a React component or not.

#### Examples

```jsx
import React from 'react'
import isReactComponent from '@helpscout/react-utils/isReactComponent'

class Kip extends React.Component {...}

isReactComponent(Kip)
// true
```
