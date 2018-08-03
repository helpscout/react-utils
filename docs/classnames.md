# classNames

A tiny implementation of the [classnames](https://github.com/JedWatson/classnames) library.

## Arguments

| Argument | Type | Description |
| :--- | :--- | :--- |
| `...classes` | `string` | A list of classNames |

## Returns

`string`: Valid classNames, joined as a single string.

## Examples

```jsx
import classNames from '@helpscout/react-utils/dist/classNames'

const isFeelingHot = true

const className = classNames('pedro', isFeelingHot && 'shave-head')
// 'pedro shave-head'
```

