import getShallowDiffs from '../getShallowDiffs'

test('Can detect diffs between previous/next', () => {
  const one = []

  const previous = { one, two: { a: 'nope' } }
  const next = { one, two: { a: 'ok' } }

  const results = getShallowDiffs(previous, next)

  expect(results.diffs.length).toBe(1)
  expect(results.previous.two).toEqual({ a: 'nope' })
  expect(results.next.two).toEqual({ a: 'ok' })
})

test('Can detect diffs between previous/next, even if values are the same', () => {
  const one = []
  const two = { a: 'ok' }

  const previous = { one, two }
  const next = { one, two: { ...two } }

  const results = getShallowDiffs(previous, next)

  expect(results.diffs.length).toBe(1)
  expect(results.previous.two).toBeTruthy()
  expect(results.next.two).toBeTruthy()
})

test('Returns no diff, if previous/next contain the same key/values', () => {
  const one = []
  const two = { a: 'ok' }

  const previous = { one, two }
  const next = { one, two }

  const results = getShallowDiffs(previous, next)

  expect(results.diffs.length).toBe(0)
  expect(results.previous.two).toBeFalsy()
  expect(results.next.two).toBeFalsy()
})
