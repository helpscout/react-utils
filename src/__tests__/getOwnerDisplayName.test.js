import getOwnerDisplayName from '../getOwnerDisplayName'

describe('React 16', () => {
  test('Can get the owner name from a React (16) component', () => {
    const MockComponent = {
      _reactInternalFiber: {},
      _reactInternalInstance: {
        return: {
          return: {
            stateNode: {
              constructor: {
                name: 'Napoleon',
              },
            },
          },
        },
      },
    }

    expect(getOwnerDisplayName(MockComponent)).toEqual('Napoleon')
  })

  test('Returns empty string, if cannot get owner name', () => {
    const MockComponent = {
      _reactInternalFiber: {},
      _reactInternalInstance: {
        return: {
          name: 'Napoleon',
        },
      },
    }

    expect(getOwnerDisplayName()).toEqual('')
    expect(getOwnerDisplayName({})).toEqual('')
    expect(getOwnerDisplayName(() => {})).toEqual('')
    expect(getOwnerDisplayName(MockComponent)).toEqual('')
  })
})

describe('React 15', () => {
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
    expect(getOwnerDisplayName(MockComponent)).toEqual('')
  })
})
