import * as React from 'react'

function Fragment(props: any): any {
  const { className, children, selector } = props

  if (React.Fragment) {
    return <React.Fragment>{children}</React.Fragment>
  } else {
    return React.createElement(selector, { className }, children)
  }
}

Fragment.defaultProps = {
  className: 'ReactUtilsFragment'
  selector: 'div'
}

export default Fragment
