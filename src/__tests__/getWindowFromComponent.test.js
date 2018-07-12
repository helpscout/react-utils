import getWindowFromComponent from '../getWindowFromComponent'

test('Can retrieve the document from a React component (15)', () => {
  const mockWindow = 'win'
  const mockDocument = {
    defaultView: mockWindow,
  }
  const mockComponent = {
    _reactInternalInstance: {
      _context: {
        document: mockDocument,
      },
    },
  }

  expect(getWindowFromComponent(mockComponent)).toEqual(mockWindow)
})

test('Can retrieve the document from a React component (16)', () => {
  const mockWindow = 'win'
  const mockDocument = {
    defaultView: mockWindow,
  }
  const mockComponent = {
    _reactInternalFiber: {
      return: {
        stateNode: {
          ownerDocument: mockDocument,
        },
      },
    },
  }

  expect(getWindowFromComponent(mockComponent)).toEqual(mockWindow)
})

test('Fallsback to window.document, if React document cannot be retrieved', () => {
  const mockWindow = 'win'
  const mockDocument = {
    defaultView: mockWindow,
  }
  const mockComponent = {
    nope: {
      ownerDocument: mockDocument,
    },
  }

  expect(getWindowFromComponent(mockComponent)).toEqual(window)
})
