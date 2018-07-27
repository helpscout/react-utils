import isPropValid from './isPropValid'

/**
 * Filters our custom non-default React props.
 *
 * @param {Object} props The React props to filter.
 * @returns {Object} React-safe props.
 */
function getValidProps(props: Object): Object {
  return Object.keys(props).reduce((validProps, prop) => {
    if (isPropValid(prop)) {
      validProps[prop] = props[prop]
    }

    return validProps
  }, {})
}

export default getValidProps
