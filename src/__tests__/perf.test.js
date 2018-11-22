import perf from '../perf'
import renderSpy from '../renderSpy'

test('Is an alias for renderSpy', () => {
  expect(perf).toBe(renderSpy)
})
