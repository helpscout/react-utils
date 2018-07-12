import getDocumentFromComponent from '../getDocumentFromComponent'

test('Can retrieve the document from a React component (15)', () => {
  const mockDocument = 'doc'
  const mockComponent = {
    _reactInternalInstance: {
      _context: {
        document: mockDocument,
      },
    },
  }

  expect(getDocumentFromComponent(mockComponent)).toBe(mockDocument)
})

test('Can retrieve the document from a React component (16)', () => {
  const mockDocument = 'doc'
  const mockComponent = {
    _reactInternalFiber: {
      return: {
        stateNode: {
          ownerDocument: mockDocument,
        },
      },
    },
  }

  expect(getDocumentFromComponent(mockComponent)).toBe(mockDocument)
})

test('Fallsback to window.document, if React document cannot be retrieved', () => {
  const mockDocument = 'doc'
  const mockComponent = {
    nope: {
      ownerDocument: mockDocument,
    },
  }

  expect(getDocumentFromComponent(mockComponent)).toEqual(document)
})
