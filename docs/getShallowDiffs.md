# getShallowDiffs

Plucks out the diffs between two sets of Objects. Very handy in spotting the prop or state changes.

## Arguments

| Argument   | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `previous` | `Object` | The first, or "previous", Object. |
| `next`     | `Object` | The second, or "next", Object.    |

## Returns

`Object`: Showcases the diffs (if any) between the provided objects

## Examples

```jsx
import React from 'react'
import getShallowDiffs from '@helpscout/react-utils/dist/getShallowDiffs'

class Napoleon extends React.Component {
  ...
  componentDidUpdate (prevProps) {
    console.log(getShallowDiffs(prevProps, this.props))
    // {
    //   diffs: ['propName'],
    //   previous: { propName: 'a' },
    //   next: { propName: 'b' },
    // }
  }
  ...
}
```
