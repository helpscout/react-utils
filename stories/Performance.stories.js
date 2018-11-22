import React from 'react'
import { storiesOf } from '@storybook/react'
import renderSpy from '../src/renderSpy'

const stories = storiesOf('Performance', module)

const withRenderSpy = Component => {
  const ClonedComponent = Object.create(Component)

  Component.prototype.render = function() {
    console.log('hai')
    return <div />
  }
}

stories.add('Example', () => {
  class Napoleon extends React.Component {
    render() {
      return <div>Thing</div>
    }
  }

  const EnhancedNapoleon = renderSpy()(Napoleon)

  class App extends React.Component {
    state = {
      clicks: 0,
    }

    increment = () => {
      this.setState({
        clicks: this.state.clicks + 1,
      })
    }

    render() {
      return (
        <div>
          <EnhancedNapoleon clicks={this.state.clicks} />
          <EnhancedNapoleon />
          <button onClick={this.increment}>Click</button>
        </div>
      )
    }
  }

  return <App />
})
