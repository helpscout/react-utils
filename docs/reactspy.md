# reactSpy(options)(WrappedComponent)

Higher-order component that logs the mount/unmount/render cycles of a React component. Useful for debugging performance!

Inspired by React's performance tools and [`react-performance`](https://github.com/amsul/react-performance).

## Arguments

| Argument           | Type        | Description              |
| :----------------- | :---------- | :----------------------- |
| `options`          | `Object`    | Options for ReactSpy.    |
| `WrappedComponent` | `Component` | The component to spy on. |

## Options

| Argument | Type     | Description                        |
| :------- | :------- | :--------------------------------- |
| `id`     | `string` | A name to be used in console logs. |

## Examples

```jsx
import React from 'react'
import reactSpy from '@helpscout/react-utils/dist/reactSpy'

class Napoleon extends React.Component {
  ...
}

export const reactSpy()(Napoleon)
```

Potential logs:

```
Napoleon Mounted

Napoleon Rendered
Changes: ['votedForPedro']
Previous: { votedForPedro: false }
Next: { votedForPedro: true }

Napoleon Unmounted
```
