// @flow
/**
 * Tiny implementation of the classnames library.
 *
 * @param   {any} classes Argument (array) of classNames.
 * @returns {string} The compiled className.
 */
function classNames(...classes: Array<any>): string {
  return classes
    .filter((name: string | boolean) => name && typeof name !== 'boolean')
    .join(' ')
}

export default classNames
