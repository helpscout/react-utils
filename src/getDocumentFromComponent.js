// @flow
import type {ReactComponent} from './typings/index'
import isReactComponent from './isReactComponent'

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
  if (Component._reactInternalFiber) {
    return (
      Component._reactInternalFiber.return &&
      Component._reactInternalFiber.return.stateNode &&
      Component._reactInternalFiber.return.stateNode.ownerDocument
    )
  }
  // React 15.x
  /* istanbul ignore else */
  if (Component._reactInternalInstance) {
    return (
      Component._reactInternalInstance._context &&
      Component._reactInternalInstance._context.document
    )
  }
  /* istanbul ignore next */
  return document
}

export default getDocumentFromComponent
