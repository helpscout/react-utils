import isReactComponent from './isReactComponent'

function getOwnerDisplayName(Component: ReactComponent): string {
  let ownerName = ''

  if (!isReactComponent(Component)) return ownerName

  // React 16.x
  if (Component._reactInternalFiber) {
    try {
      ownerName =
        Component._reactInternalInstance.return.return.stateNode.constructor
          .name
    } catch (err) {
      ownerName = ''
    }

    return ownerName
  }

  // React 15.x
  if (Component._reactInternalInstance) {
    try {
      ownerName = Component._reactInternalInstance._currentElement._owner.getName()
    } catch (err) {
      ownerName = ''
    }

    return ownerName
  }

  return ownerName
}

export default getOwnerDisplayName
