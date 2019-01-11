import { ReactComponent } from './typings/index'
import isReactComponent from './isReactComponent'
import get from 'dash-get'
import { isReact16, isReact15 } from './reactVersion'

function getOwnerDisplayName(Component: any): string {
  let ownerName = ''

  if (!isReactComponent(Component)) return ownerName

  // React 16.x
  if (isReact16(Component)) {
    return get(
      Component,
      '_reactInternalInstance.return.return.stateNode.constructor.name',
      ''
    )
  }

  // React 15.x
  if (isReact15(Component)) {
    try {
      // @ts-ignore
      ownerName = Component._reactInternalInstance._currentElement._owner.getName()
    } catch (err) {
      ownerName = ''
    }

    return ownerName
  }

  return ownerName
}

export default getOwnerDisplayName
