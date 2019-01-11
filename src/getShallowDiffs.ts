type ShallowDiffsResults = {
  diffs: Array<any>
  previous: any
  next: any
}

/**
 * Pluck out the differences between previous/next props/state.
 * Useful for debugging component update/renders.
 *
 * @param {Object} previous prevProps/prevState
 * @param {Object} next nextProps/nextState
 * @returns {Object} The differences
 */
function getShallowDiffs(previous: Object, next: Object): ShallowDiffsResults {
  const diffs = Object.keys(previous).filter(key => previous[key] !== next[key])

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
