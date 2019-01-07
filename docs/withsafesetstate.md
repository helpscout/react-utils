# withSafeSetState()(WrappedComponent)

Enhances the WrappedComponent's `setState` method to only work if the Component is mounted.

## Arguments

| Argument           | Type              | Description        |
| :----------------- | :---------------- | :----------------- |
| `WrappedComponent` | `React.Component` | A React component. |

## Returns

`React.Component`: The enhanced React component.

## Additional Methods

### `isComponentMounted()`

**Returns**: `boolean`

The component is also provided with the method `.isComponentMounted()`.

Note: This is different then React's native `.isMounted()` method, which they are [deprecating](https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html).

## Examples

```jsx
import React from 'react'
import withSafeSetState from '@helpscout/react-utils/dist/withSafeSetState'

class Napoleon extends React.Component {
  ...
  componentWillUnmount() {
    setTimeout(() => {
      console.log('Tina, eat!')
      this.setState({
        feedTina: true
      })
    }, 1000)
  }
  ...
}

const EnhancedNapolean = withSafeSetState()(Napoleon)

// When EnhancedNapolean unmounts, the setState() method with feedTina will
// not be called. No warnings or errors will be thrown.
```
