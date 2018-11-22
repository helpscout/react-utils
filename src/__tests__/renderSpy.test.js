import React from 'react'
import { mount } from 'enzyme'
import renderSpy from '../renderSpy'

beforeEach(() => {
  console.group = jest.fn()
  console.groupCollapsed = jest.fn()
  console.groupEnd = jest.fn()
  console.log = jest.fn()
  console.table = jest.fn()
})

afterEach(() => {
  console.group.mockClear()
  console.groupCollapsed.mockClear()
  console.groupEnd.mockClear()
  console.log.mockClear()
  console.table.mockClear()
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

  expect(console.groupCollapsed.mock.calls[0][0]).toContain('Mounted')
})

test('Logs on unmount', () => {
  const Napoleon = () => <div />
  Napoleon.displayName = 'Napoleon'
  const NapoleonSpy = renderSpy()(Napoleon)

  const wrapper = mount(<NapoleonSpy />)
  wrapper.unmount()

  expect(console.groupCollapsed.mock.calls[0][0]).toContain('Mounted')
  expect(console.groupCollapsed.mock.calls[1][0]).toContain('Unmounted')
})

test('Logs on prop changes', () => {
  const Napoleon = () => <div />
  Napoleon.displayName = 'Napoleon'
  const NapoleonSpy = renderSpy()(Napoleon)

  const wrapper = mount(<NapoleonSpy title="Nope" />)
  wrapper.setProps({ title: 'Dynamite' })

  expect(console.groupCollapsed.mock.calls[0][0]).toContain('Mounted')
  expect(console.groupCollapsed.mock.calls[1][0]).toContain('Rendered')

  expect(console.log.mock.calls[0][0]).toContain('Previous')
  expect(console.log.mock.calls[0][2]).toEqual({ title: 'Nope' })

  expect(console.log.mock.calls[1][0]).toContain('Changes')
  expect(console.log.mock.calls[1][2]).toEqual(['title'])

  expect(console.log.mock.calls[2][0]).toContain('Next')
  expect(console.log.mock.calls[2][2]).toEqual({ title: 'Dynamite' })
})

test('Logs wasted renders if no prop changes', () => {
  const Napoleon = () => <div />
  Napoleon.displayName = 'Napoleon'
  const NapoleonSpy = renderSpy()(Napoleon)

  const wrapper = mount(<NapoleonSpy title="Dynamite" />)
  wrapper.setProps({ title: 'Dynamite' })

  expect(console.groupCollapsed.mock.calls[0][0]).toContain('Mounted')
  expect(console.groupCollapsed.mock.calls[1][0]).toContain('Rendered')
  expect(console.groupCollapsed.mock.calls[1][0]).toContain('Wasted')

  expect(console.table.mock.calls[0][0]).toBeTruthy()
  expect(
    console.table.mock.calls[0][0][0]['Wasted renders (Total)']
  ).toBeTruthy()
})

test('Logs a custom name, if provided', () => {
  const Napoleon = () => <div />
  Napoleon.displayName = 'Napoleon'
  const NapoleonSpy = renderSpy({ id: 'VoteForPedro' })(Napoleon)

  mount(<NapoleonSpy />)

  expect(console.groupCollapsed.mock.calls[0][0]).toContain('Mounted')
  expect(console.groupCollapsed.mock.calls[0][0]).toContain('VoteForPedro')
})

test('Can log renders uncollapsed, if specified', () => {
  const Napoleon = () => <div />
  Napoleon.displayName = 'Napoleon'
  const NapoleonSpy = renderSpy({ collapsed: false })(Napoleon)

  const wrapper = mount(<NapoleonSpy title="Dynamite" />)
  wrapper.setProps({ title: 'Dynamite' })

  expect(console.groupCollapsed.mock.calls[0][0]).toContain('Mounted')
  expect(console.group.mock.calls[0][0]).toContain('Rendered')
  expect(console.group.mock.calls[0][0]).toContain('Wasted')

  expect(console.table.mock.calls[0][0]).toBeTruthy()
  expect(
    console.table.mock.calls[0][0][0]['Wasted renders (Total)']
  ).toBeTruthy()
})
