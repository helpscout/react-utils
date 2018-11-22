import getOwnerDisplayName from '../getOwnerDisplayName'

test('Can get the owner name from a React (15) component', () => {
  const MockComponent = {
    _reactInternalInstance: {
      _currentElement: {
        _owner: {
          getName: () => 'Napoleon',
        },
      },
    },
  }

  expect(getOwnerDisplayName(MockComponent)).toEqual('Napoleon')
})

test('Returns empty string, if cannot get owner name', () => {
  const MockComponent = {
    _reactInternalInstance: {
      _currentElement: {
        _owner: {
          nope: true,
        },
      },
    },
  }

  expect(getOwnerDisplayName()).toEqual('')
  expect(getOwnerDisplayName({})).toEqual('')

  expect(getOwnerDisplayName({ _reactInternalInstance: false })).toEqual('')
  expect(getOwnerDisplayName({ _reactInternalInstance: {} })).toEqual('')

  expect(
    getOwnerDisplayName({ _reactInternalInstance: { _currentElement: false } })
  ).toEqual('')

  expect(
    getOwnerDisplayName({
      _reactInternalInstance: { _currentElement: { _owner: false } },
    })
  ).toEqual('')

  expect(getOwnerDisplayName(MockComponent)).toEqual('')
})
