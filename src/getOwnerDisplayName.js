import isReactComponent from './isReactComponent'

function getOwnerDisplayName(Component: ReactComponent): string {
  if (!isReactComponent(Component)) return ''
  // Currently only tested with React 15
  // React 16 (Fibre)'s _reactInternalInstance shape is very different.
  /* istanbul ignore if */
  if (!Component._reactInternalInstance) return ''
  if (!Component._reactInternalInstance._currentElement) return ''
  if (!Component._reactInternalInstance._currentElement._owner) return ''
  if (!Component._reactInternalInstance._currentElement._owner.getName)
    return ''

  return Component._reactInternalInstance._currentElement._owner.getName()
}

export default getOwnerDisplayName
