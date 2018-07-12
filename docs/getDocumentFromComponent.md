# `getDocumentFromComponent(Component)`

Retrieves the `document` where the Component was mounted to.

#### Arguments

| Argument    | Type              | Description          |
| ----------- | ----------------- | -------------------- |
| `Component` | `React.Component` | The React component. |

#### Returns

`Document`: The target Document.

#### Examples

```jsx
import React from 'react'
import getDocumentFromComponent from '@helpscout/react-utils/getDocumentFromComponent'

class Napolean extends React.Component {
  ...
  componentDidMount () {
    this.doc = getDocumentFromComponent(this)
    // document
  }
  ...
}
```
