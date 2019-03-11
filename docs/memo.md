# memo(Component, areEqual, lifecycleHooks)

A higher-order component that memoizes and prevents re-renders of components if the props are unchanged.

For additional documentation, check out [React.memo](https://reactjs.org/docs/react-api.html#reactmemo)

## Arguments

| Argument         | Type                             | Description                               |
| :--------------- | :------------------------------- | :---------------------------------------- |
| `Component`      | `React.Component`                | The React component.                      |
| `areEqual`       | `Function(prevProps, nextProps)` | Comparison function. Returns a `boolean`. |
| `lifecycleHooks` | `Object`                         | Class-like lifecycle callback hooks       |

## Returns

`React.Component`: The React component.

## Examples

```jsx
import React from 'react'
import memo from '@helpscout/react-utils/dist/memo'

const Kip = props => <div {...props} />
const MemoizedKip = memo(Kip)
```

Alternatively...

```jsx
import React from 'react'
import memo from '@helpscout/react-utils/dist/memo'

const MemoizedKip = memo(function Kip(props) {
  return <div {...props} />
})
```

## Lifecycle hooks

### componentDidUpdate(prevProps, nextProps)

This callback hook fires if the memoized component updates.
