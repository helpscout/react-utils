// @flow
type Callback = (args?: ?any) => void

/**
 * Reliably enhances a React component method. An example of when this might
 * be used would be within a React.Children map.
 *
 * @param {Object} child The React.Children child.
 * @param {string} method The name of the method to enhance.
 * @param {function} callback The enhanced callback function.
 */
const enhanceComponentMethod = (child: Object, method: string) => (
  callback?: ?Callback,
) => (...args: any) => {
  /* istanbul ignore next */
  // Super fail-safe checks. Should be caught by Flow.
  if (!child || !method) return
  /* istanbul ignore next */
  // Super fail-safe checks. Should be caught by Flow.
  if (!child.props || !child.props[method]) return

  if (callback && typeof callback === 'function') {
    callback(...args)
  }

  return child.props[method](...args)
}

export default enhanceComponentMethod
