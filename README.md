# ⚙️ React Utils

> A collection of handy utilities for React.

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [🔧 Installation](#-installation)
- [🕹 Usage](#%F0%9F%95%B9-usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 🔧 Installation

```
npm install --save @helpscout/react-utils
```

This library has a `peerDependencies` listing of `react` (version `15` or `16`).

## 🕹 Usage

This library comes with a handful of useful functions. Below is an example of how you can use the `getDocumentFromComponent` function to retrieve the actual `document` the component is mounted to (rather than assuming `window.document`).

```jsx
import React from 'react'
import getDocumentFromComponent from '@helpscout/react-utils/getDocumentFromComponent'

class Napolean extends React.Component {
  ...
  componentDidMount () {
    this.doc = getDocumentFromComponent(this)
    // document
  }
  ...
}
```

Check out **[the documentation](./docs/)** for more details.
