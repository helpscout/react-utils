import React from 'react'
import { mount } from 'enzyme'
import renderSpy from '../renderSpy'

beforeEach(() => {
  console.group = jest.fn()
  console.groupEnd = jest.fn()
  console.log = jest.fn()
})

afterEach(() => {
  console.group.mockClear()
  console.groupEnd.mockClear()
  console.log.mockClear()
})

test('Creates a wrapped displayName', () => {
  const Napoleon = () => <div />
  Napoleon.displayName = 'Napoleon'
  const NapoleonSpy = renderSpy()(Napoleon)

  expect(NapoleonSpy.displayName).toContain('withRenderSpy(Napoleon)')
})

test('Renders WrappedComponent with props', () => {
  const Napoleon = ({ title }) => <div className="Napoleon">{title}</div>
  const NapoleonSpy = renderSpy()(Napoleon)

  const wrapper = mount(<NapoleonSpy title="Dynamite" />)
  const el = wrapper.find('div.Napoleon')

  expect(el.length).toBeTruthy()
  expect(el.text()).toContain('Dynamite')
})

test('Logs on mount', () => {
  const Napoleon = () => <div />
  Napoleon.displayName = 'Napoleon'
  const NapoleonSpy = renderSpy()(Napoleon)

  mount(<NapoleonSpy />)

  expect(console.group).toHaveBeenCalledWith('Napoleon Mounted')
})

test('Logs on unmount', () => {
  const Napoleon = () => <div />
  Napoleon.displayName = 'Napoleon'
  const NapoleonSpy = renderSpy()(Napoleon)

  const wrapper = mount(<NapoleonSpy />)
  wrapper.unmount()

  expect(console.group).toHaveBeenCalledWith('Napoleon Mounted')
  expect(console.group).toHaveBeenCalledWith('Napoleon Unmounted')
})

test('Logs on prop changes', () => {
  const Napoleon = () => <div />
  Napoleon.displayName = 'Napoleon'
  const NapoleonSpy = renderSpy()(Napoleon)

  const wrapper = mount(<NapoleonSpy title="Nope" />)
  wrapper.setProps({ title: 'Dynamite' })

  expect(console.group).toHaveBeenCalledWith('Napoleon Rendered')
  expect(console.log).toHaveBeenCalledWith('Changes', ['title'])
  expect(console.log).toHaveBeenCalledWith('Previous', { title: 'Nope' })
  expect(console.log).toHaveBeenCalledWith('Next', { title: 'Dynamite' })
})

test('Logs a custom name, if provided', () => {
  const Napoleon = () => <div />
  Napoleon.displayName = 'Napoleon'
  const NapoleonSpy = renderSpy({ id: 'VoteForPedro' })(Napoleon)

  mount(<NapoleonSpy />)

  expect(console.group).toHaveBeenCalledWith('VoteForPedro Mounted')
})
