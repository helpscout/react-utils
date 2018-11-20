/**
 * Pluck out the differences between previous/next props/state.
 * Useful for debugging component update/renders.
 *
 * @param {Object} previous previousProps/previousState
 * @param {Object} next nextProps/nextState
 * @returns {Object} The differences
 */
function getShallowDiffs(previous: Object, next: Object): Object {
  const diffs = Object.keys(previous).reduce((diffs, key) => {
    if (previous[key] !== next[key]) {
      return [...diffs, key]
    }
    return diffs
  }, [])

  const previousProps = diffs.reduce((previousProps, key) => {
    previousProps[key] = previous[key]
    return previousProps
  }, {})

  const nextProps = diffs.reduce((nextProps, key) => {
    nextProps[key] = next[key]
    return nextProps
  }, {})

  return { diffs, previous: previousProps, next: nextProps }
}

export default getShallowDiffs
