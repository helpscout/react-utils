import get from 'dash-get'
import { ReactComponent } from './typings/index'
import isReactComponent from './isReactComponent'
import { isReact16, isReact15 } from './reactVersion'

/**
 * Retrieves the document where the React Component has been
 * mounted to.
 *
 * @param   {React.Component} Component A React.Component.
 * @returns {document} The closest document.
 */
function getDocumentFromComponent(Component: ReactComponent): Document {
  if (!isReactComponent(Component)) return document

  // React 16.x
  if (isReact16(Component)) {
    const levelOneCheck = get(
      Component,
      '_reactInternalFiber.return.stateNode.ownerDocument'
    )
    const levelTwoCheck = get(
      Component,
      '_reactInternalFiber._debugOwner.return.stateNode.ownerDocument'
    )
    const levelThreeCheck = get(
      Component,
      '_reactInternalFiber._debugOwner._debugOwner.return.stateNode.ownerDocument'
    )

    return levelOneCheck || levelTwoCheck || levelThreeCheck || document
  }
  // React 15.x
  /* istanbul ignore else */
  if (isReact15(Component)) {
    return get(Component, '_reactInternalInstance._context.document', document)
  }
  /* istanbul ignore next */
  return document
}

export default getDocumentFromComponent
