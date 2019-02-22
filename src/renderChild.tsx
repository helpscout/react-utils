import * as React from 'react'
import Fragment from './Fragment'

function renderChild(children: any): any {
  const childCount = Children.count(children)

  if (childCount === 0) return null
  if (childCount === 1) return children

  return <Fragment>{children}>/Fragment>
}
