# renderSpy(options)(WrappedComponent)

Higher-order component that logs the mount/unmount/render cycles of a React component. Useful for debugging performance!

Inspired by React's performance tools and [`react-performance`](https://github.com/amsul/react-performance).

## Arguments

| Argument           | Type        | Description              |
| :----------------- | :---------- | :----------------------- |
| `options`          | `Object`    | Options for renderSpy.   |
| `WrappedComponent` | `Component` | The component to spy on. |

## Options

| Argument    | Type      | Default | Description                                 |
| :---------- | :-------- | :------ | :------------------------------------------ |
| `id`        | `string`  |         | A name to be used in console logs.          |
| `collapsed` | `boolean` | `true`  | How the `console` displays the information. |

## Examples

```jsx
import React from 'react'
import renderSpy from '@helpscout/react-utils/dist/renderSpy'

class Napoleon extends React.Component {
  ...
}

export const renderSpy()(Napoleon)
```

Potential logs:

```
Mounted Napoleon  (in 0.16ms)

Rendered Napoleon (in 0.34ms)
Previous   : { votedForPedro: false }
Changes    : ['votedForPedro']
Next       : { votedForPedro: true }

Unmounted Napoleon
```
