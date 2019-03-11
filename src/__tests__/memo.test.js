import React from 'react'
import { mount } from 'enzyme'
import memo from '../memo'

describe('memo', () => {
  describe('Wrapping', () => {
    test('Can wrap a SFC', () => {
      const Compo = props => <div {...props} />
      const MemoCompo = memo(Compo)

      const wrapper = mount(<MemoCompo>Hello</MemoCompo>)

      expect(Compo).not.toEqual(MemoCompo)
      expect(wrapper.text()).toBe('Hello')
    })

    test('Can wrap a React.PureComponent', () => {
      class Compo extends React.PureComponent {
        render() {
          return <div {...this.props} />
        }
      }
      const MemoCompo = memo(Compo)

      const wrapper = mount(<MemoCompo>Hello</MemoCompo>)

      expect(Compo).not.toEqual(MemoCompo)
      expect(wrapper.text()).toBe('Hello')
    })

    test('Can wrap a React.Component', () => {
      class Compo extends React.Component {
        render() {
          return <div {...this.props} />
        }
      }
      const MemoCompo = memo(Compo)

      const wrapper = mount(<MemoCompo>Hello</MemoCompo>)

      expect(Compo).not.toEqual(MemoCompo)
      expect(wrapper.text()).toBe('Hello')
    })
  })

  describe('Statics', () => {
    test('Hoists statics from the wrapped component', () => {
      const Compo = props => <div {...props} />
      Compo.Sub = props => <div {...props} />
      const MemoCompo = memo(Compo)

      const wrapper = mount(<MemoCompo.Sub>Hello</MemoCompo.Sub>)

      expect(wrapper.text()).toBe('Hello')
    })

    test('Uses displayName, if defined', () => {
      const Compo = props => <div {...props} />
      Compo.displayName = 'Hello'
      const MemoCompo = memo(Compo)

      const wrapper = mount(<MemoCompo>Hello</MemoCompo>)

      expect(wrapper.find('Hello').length).toBeTruthy()
    })
  })

  describe('Memoize', () => {
    test('Does not re-render component if prop does not change', () => {
      const spy = jest.fn()
      const Compo = props => <div {...props} />
      const MemoCompo = memo(Compo, null, {
        componentDidUpdate: spy,
      })
      MemoCompo.displayName = 'Memo'

      const wrapper = mount(<MemoCompo title="Hello">Hello</MemoCompo>)
      const initialComponent = wrapper.find('Memo')

      expect(wrapper.text()).toBe('Hello')
      expect(spy).toHaveBeenCalledTimes(1)

      wrapper.setProps({ title: 'Hello' })
      wrapper.setProps({ children: 'Hello' })
      expect(spy).toHaveBeenCalledTimes(1)

      expect(initialComponent).toEqual(wrapper.find('Memo'))
    })

    test('Re-renders component on prop change', () => {
      const spy = jest.fn()
      const Compo = props => <div {...props} />
      const MemoCompo = memo(Compo, null, {
        componentDidUpdate: spy,
      })
      MemoCompo.displayName = 'Memo'

      const wrapper = mount(<MemoCompo title="Hello">Hello</MemoCompo>)
      const initialComponent = wrapper.find('Memo')

      expect(wrapper.text()).toBe('Hello')
      expect(spy).toHaveBeenCalledTimes(1)

      wrapper.setProps({ title: 'Hello' })
      wrapper.setProps({ title: 'There' })
      expect(spy).toHaveBeenCalledTimes(2)

      expect(initialComponent).not.toEqual(wrapper.find('Memo'))
    })

    test('Re-renders component if new prop value existed previously', () => {
      const spy = jest.fn()
      const Compo = props => <div {...props} />
      const MemoCompo = memo(Compo, null, {
        componentDidUpdate: spy,
      })

      const wrapper = mount(<MemoCompo title="Hello">Hello</MemoCompo>)

      expect(wrapper.text()).toBe('Hello')
      expect(spy).toHaveBeenCalledTimes(1)

      wrapper.setProps({ title: 'There' })
      expect(spy).toHaveBeenCalledTimes(2)

      wrapper.setProps({ title: 'There' })
      expect(spy).toHaveBeenCalledTimes(2)

      wrapper.setProps({ title: 'Hello' })
      expect(spy).toHaveBeenCalledTimes(3)
    })
  })
})
