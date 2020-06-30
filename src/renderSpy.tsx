import * as React from 'react'
import hoistNonReactStatics from './hoistNonReactStatics'
import getShallowDiffs from './getShallowDiffs'
import getComponentName from './getComponentName'
import wrapComponentName from './wrapComponentName'
import getOwnerDisplayName from './getOwnerDisplayName'
import { createUniqueIDFactory } from './utils'

const defaultOptions = {
  collapsed: true,
}

const uniqueId = createUniqueIDFactory('renderSpy')

// Use this to globally collect all the wasted renders from our spies
const renderSpyWastedRenderCollection = {}

function renderSpy(options) {
  return function(WrappedComponent) {
    const mergedOptions = { ...defaultOptions, ...options }
    const { collapsed, id } = mergedOptions
    const displayName = id || getComponentName(WrappedComponent)

    class ReactRenderSpy extends React.Component {
      internalId = uniqueId()
      performanceTimer: number = 0
      ownerDisplayName = ''

      UNSAFE_componentWillMount() {
        this.ownerDisplayName = getOwnerDisplayName(this)
        this.startTimer()
      }

      componentDidMount() {
        const renderTime = this.getRenderTime()
        this.consoleGroup('Mounted', renderTime, true)
        console.groupEnd()
      }

      UNSAFE_componentWillUpdate() {
        this.startTimer()
      }

      componentDidUpdate(prevProps) {
        const changes = getShallowDiffs(prevProps, this.props)
        const { diffs, previous, next } = changes
        const renderTime = this.getRenderTime()

        // Track and log out wasted render :(...
        if (!diffs.length) {
          this.consoleGroup('Rendered', renderTime, collapsed, 'Wasted')
          // Describe what a "wasted" render means
          console.log(
            '%cWasted render: %cNo props were changed for this render.',
            'color: gray; font-weight: bold;',
            'color: gray; font-weight: normal;',
          )
          console.log(
            `%cBelow is a collection of wasted renders we've seen so far:`,
            'color: #bbb',
          )

          // Add to the internal wasted render collection (:sob:)
          addToWastedRenderCollection({
            renderSpyWastedRenderCollection,
            id: this.internalId,
            displayName,
            ownerDisplayName: this.ownerDisplayName,
            renderTime,
          })

          // Log it out, but after prettifying the data
          printWastedRenderCollection(renderSpyWastedRenderCollection)
        }
        // Log out a render with changes :)...
        else {
          this.consoleGroup('Rendered', renderTime, collapsed)
          // Display the diffs redux-logger style \m/
          console.log(
            '%cPrevious  ',
            'color: grey; font-weight: bold;',
            previous,
          )
          console.log(
            '%cChanges   ',
            'color: dodgerblue; font-weight: bold;',
            diffs,
          )
          console.log('%cNext      ', 'color: green; font-weight: bold;', next)
        }
        console.groupEnd()
      }

      componentWillUnmount() {
        this.consoleGroup('Unmounted', null, true)
        console.groupEnd()
      }

      consoleGroup = (
        action: string,
        renderTime: any,
        collapsed: boolean,
        extra?: any,
      ) => {
        const hasRenderTime = renderTime !== undefined && renderTime !== null
        let message = `%c${action} %c${displayName}`

        if (hasRenderTime) {
          message += ` %c(in ${renderTime.toFixed(2)}ms)`
        }

        if (extra) {
          message += ` %c(${extra})`
        }

        const logMessage = [
          message,
          'color: gray; font-weight: normal',
          'color: black',
          hasRenderTime ? 'color: gray; font-weight: normal' : '',
          extra ? 'color: gray; font-weight: normal' : '',
        ]

        if (collapsed) {
          console.groupCollapsed(...logMessage)
        } else {
          console.group(...logMessage)
        }
      }

      getRenderTime = () => {
        const start = this.performanceTimer
        const end = window.performance.now()
        const renderTime = end - start
        // Reset the internal timer
        this.performanceTimer = 0

        return renderTime
      }

      startTimer = () => {
        // Set the internal timer
        this.performanceTimer = window.performance.now()
      }

      render() {
        return <WrappedComponent {...this.props} />
      }
    }

    const EnhancedComponent = hoistNonReactStatics(
      ReactRenderSpy,
      WrappedComponent,
    )

    EnhancedComponent.displayName = wrapComponentName(
      WrappedComponent,
      'withRenderSpy',
    )

    return EnhancedComponent
  }
}

export function addToWastedRenderCollection({
  renderSpyWastedRenderCollection,
  id,
  displayName,
  ownerDisplayName,
  renderTime,
}) {
  // Add to collection, if it doesn't exist
  /* istanbul ignore else */
  if (!renderSpyWastedRenderCollection[id]) {
    renderSpyWastedRenderCollection[id] = {
      component: displayName,
      ownerDisplayName,
      wastedRenders: 0,
      renderTime,
    }
  }

  // Update the data in the collection
  const componentData = renderSpyWastedRenderCollection[id]
  componentData.wastedRenders = componentData.wastedRenders + 1
  componentData.renderTime = renderTime
}

export function printWastedRenderCollection(renderSpyWastedRenderCollection) {
  const data = Object.values(renderSpyWastedRenderCollection)
    // Order by wasted renders
    .sort(
      /* istanbul ignore next */
      // @ts-ignore
      (a, b) => b.wastedRenders - a.wastedRenders,
    )
    // Make the data pretty for printing
    .map(item => {
      // @ts-ignore
      const { component, ownerDisplayName, wastedRenders, renderTime } = item
      const ownerComponentValue = ownerDisplayName.length
        ? /* istanbul ignore next */
          `${ownerDisplayName} > ${component}`
        : /* istanbul ignore next */
          component

      return {
        'Owner > Component': ownerComponentValue,
        'Wasted renders (Total)': wastedRenders,
        'Latest render time (ms)': renderTime,
      }
    })

  // Log it!
  console.table(data)
}

export default renderSpy
