# 🌀 React Utils

[![npm version](https://badge.fury.io/js/%40helpscout%2Freact-utils.svg)](https://badge.fury.io/js/%40helpscout%2Freact-utils) [![Build Status](https://travis-ci.org/helpscout/react-utils.svg?branch=master)](https://travis-ci.org/helpscout/react-utils) [![Coverage Status](https://coveralls.io/repos/github/helpscout/react-utils/badge.svg?branch=master)](https://coveralls.io/github/helpscout/react-utils?branch=master) [![npm version](https://badge.fury.io/js/%40helpscout%2Fblue.svg)](https://badge.fury.io/js/%40helpscout%2Fblue) ![node](https://img.shields.io/badge/node-8.11.3-blue.svg) ![npm](https://img.shields.io/badge/npm-5.6.0-blue.svg)

> A collection of handy utilities for React.

## Table of contents

* [🔧 Installation](./#-installation)
* [🕹 Usage](./#🕹-usage)

## 🔧 Installation

```text
npm install --save @helpscout/react-utils
```

This library has a `peerDependencies` listing of `react` \(version `15` or `16`\).

## 🕹 Usage

This library comes with a handful of useful functions. Below is an example of how you can use the `getDocumentFromComponent` function to retrieve the actual `document` the component is mounted to \(rather than assuming `window.document`\).

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

Check out [**the documentation**](docs/) for more details.

