import restProps from '../restProps'

test('Retrieves valid React props', () => {
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

  const theRestProps = restProps(props)

  expect(Object.keys(props).length).toBe(Object.keys(theRestProps).length)

  Object.keys(props).forEach(prop => {
    expect(props[prop]).toBe(theRestProps[prop])
  })
})

test('Filters out custom props', () => {
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

  const theRestProps = restProps(props)

  expect(Object.keys(props).length).not.toBe(Object.keys(theRestProps).length)

  expect(theRestProps.omg).toBeFalsy()
  expect(theRestProps.customProp).toBeFalsy()
  expect(theRestProps.disabled).toBe(props.disabled)
})
