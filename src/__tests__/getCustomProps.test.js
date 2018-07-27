import getCustomProps from '../getCustomProps'

test('Filters out valid React props', () => {
  const props = {
    className: 'a',
    id: 'b',
    'data-yes': 'c',
    title: 'd',
    'aria-role': 'e',
    disabled: true,
    onClick: true,
    onFocus: true,
    onBlur: true
  }

  const customProps = getCustomProps(props)

  expect(Object.keys(props).length).not.toBe(Object.keys(customProps).length)

  expect(Object.keys(customProps).length).toBe(0)
})

test('Keeps custom props only', () => {
  const props = {
    className: 'a',
    id: 'b',
    'data-yes': 'c',
    title: 'd',
    'aria-role': 'e',
    disabled: true,
    // Custom props
    customProp: true,
    omg: 'yiss',
  }

  const customProps = getCustomProps(props)

  expect(Object.keys(props).length).not.toBe(Object.keys(customProps).length)

  expect(Object.keys(customProps).length).toBe(2)
  expect(customProps.customProp).toBe(true)
  expect(customProps.omg).toBe('yiss')
})
