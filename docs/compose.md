# `compose(...fn)`

Apply functions to a React component. Abstracted from [recompose](https://github.com/acdlite/recompose/blob/master/src/packages/recompose/compose.js).

#### Arguments

| Argument | Type              | Description            |
| -------- | ----------------- | ---------------------- |
| `...fn`  | `Array<Function>` | Enhancement functions. |

#### Returns

`Function`: The enhaned component.

#### Examples

```jsx
import React from 'react'
import compose from '@helpscout/react-utils/compose'

class Napolean extends React.Component {...}

const enhancedNapolean = compose(
  nunchuckSkills,
  computerHackingSkills,
  bowHuntingSkills
)(Napolean)
```
