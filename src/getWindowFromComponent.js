// @flow
import type {ReactComponent} from './typings/index'
import getDocumentFromComponent from './getDocumentFromComponent'

/**
 * Retrieves the window where the React Component has been
 * mounted to.
 *
 * @param   {React.Component} Component A React.Component.
 * @returns {Window} The closest window.
 */
function getWindowFromDocument(Component: ReactComponent): window {
  return getDocumentFromComponent(Component).defaultView
}

export default getWindowFromDocument
