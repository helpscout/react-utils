# 🌀 React Utils [![npm version](https://badge.fury.io/js/%40helpscout%2Freact-utils.svg)](https://badge.fury.io/js/%40helpscout%2Freact-utils) [![Build Status](https://travis-ci.org/helpscout/react-utils.svg?branch=master)](https://travis-ci.org/helpscout/react-utils) [![Coverage Status](https://coveralls.io/repos/github/helpscout/react-utils/badge.svg?branch=master)](https://coveralls.io/github/helpscout/react-utils?branch=master)

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
import getDocumentFromComponent from '@helpscout/react-utils/dist/getDocumentFromComponent'

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
