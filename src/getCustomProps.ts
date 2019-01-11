import isPropValid from './isPropValid'

/**
 * Filters out default React props.
 *
 * @param {Object} props The React props to filter.
 * @returns {Object} Custom non-default React props.
 */
function getCustomProps(props: Object | any): any {
  return Object.keys(props).reduce((customProps, prop) => {
    if (!isPropValid(prop)) {
      customProps[prop] = props[prop]
    }

    return customProps
  }, {})
}

export default getCustomProps
