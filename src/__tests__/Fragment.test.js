import * as React from 'react'
import Fragment from '../Fragment'
import { mount } from 'enzyme'

describe('Fragment', () => {
  test('It can render a child component', () => {
    const Comp = () => <div className="comp" />
    const wrapper = mount(
      <Fragment>
        <Comp />
      </Fragment>
    )

    const el = wrapper.find('.comp')

    expect(el.length).toBeTruthy()
  })

  test('It can render multiple child components', () => {
    const Comp = () => <span className="comp" />
    const wrapper = mount(
      <Fragment>
        <span />
        <Comp />
        <span />
      </Fragment>
    )

    const el = wrapper.find('.comp')

    expect(wrapper.find('span').length).toBe(3)
    expect(el.length).toBeTruthy()
  })
})
