import isPropValid from '../isPropValid'

test('Filters out other stray props', () => {
  const props = ['action']

  props.forEach(prop => {
    expect(isPropValid(prop)).toBeFalsy()
  })
})
