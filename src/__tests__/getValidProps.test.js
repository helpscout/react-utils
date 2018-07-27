import getValidProps from '../getValidProps'

test('Retrieves valid React props', () => {
  const props = {
    className: 'a',
    id: 'b',
    'data-yes': 'c',
    title: 'd',
    'aria-role': 'e',
    disabled: true,
  }

  const restProps = getValidProps(props)

  expect(Object.keys(props).length).toBe(Object.keys(restProps).length)
})
