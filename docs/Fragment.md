# Fragment

A tiny polyfill for [React.Fragment](https://reactjs.org/docs/fragments.html).

It will render a native `React.Fragment` if supported. Otherwise, it will
wrap the `children` within a selector. Default is `div`.

## Props

| Props      | Type     | Description                          |
| :--------- | :------- | :----------------------------------- |
| `selector` | `string` | A selector to render. Default `div`. |

## Returns

`React.Component`: A "Fragment" wrapped React component

## Examples

```jsx
import Fragment from '@helpscout/react-utils/dist/Fragment'

const Pedro = () => (
  <Fragment>
    <Napoleon />
    <Debra />
  </Fragment>
)
```
