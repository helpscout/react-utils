import {getComponentName, getDocumentFromComponent} from '../index'

describe('Index', () => {
  test('Contains proper exports', () => {
    expect(getComponentName).toBeTruthy()
    expect(getDocumentFromComponent).toBeTruthy()
  })
})
