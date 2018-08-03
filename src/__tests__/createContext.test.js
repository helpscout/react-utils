import React from 'react'
import { mount } from 'enzyme'
import createContext from '../createContext'

describe('createContext', () => {
  test('Can create context using the React 16 API', () => {
    // https://reactjs.org/docs/context.html
    const ThemeContext = createContext('light')

    function Toolbar(props) {
      return (
        <div>
          <ThemedButton />
        </div>
      );
    }

    function ThemedButton(props) {
      return (
        <ThemeContext.Consumer>
          {theme => <Button {...props} theme={theme} />}
        </ThemeContext.Consumer>
      );
    }

    function Button(props) {
      const { theme, ...rest } = props
      return (
        <button
          style={{ background: theme === 'dark' ? 'black' : 'white' }}
          {...rest}
        />
      )
    }

    const wrapper = mount(
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
    const el = wrapper.find('button')

    expect(el.props().style.background).toBe('black')

    wrapper.setProps({ value: 'light' })

    expect(el.props().style.background).toBe('white')
  })
})