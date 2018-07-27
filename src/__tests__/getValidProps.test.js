import React from 'react'
import {mount} from 'enzyme'
import getValidProps from '../getValidProps'

test('Retrieves valid React props', () => {
  const props = {
    className: 'a',
    id: 'b',
    'data-yes': 'c',
    title: 'd',
    'aria-role': 'e',
    disabled: true,
    onClick: true,
    onFocus: true,
    onBlur: true
  }

  const restProps = getValidProps(props)

  expect(Object.keys(props).length).toBe(Object.keys(restProps).length)

  Object.keys(props).forEach(prop => {
    expect(props[prop]).toBe(restProps[prop])
  })
})

test('Filters out custom props', () => {
  const props = {
    className: 'a',
    id: 'b',
    'data-yes': 'c',
    title: 'd',
    'aria-role': 'e',
    disabled: true,
    // Custom props
    customProp: true,
    omg: 'yiss',
  }

  const restProps = getValidProps(props)

  expect(Object.keys(props).length).not.toBe(Object.keys(restProps).length)

  expect(restProps.omg).toBeFalsy()
  expect(restProps.customProp).toBeFalsy()
  expect(restProps.disabled).toBe(props.disabled)
})

test('Can render React component with valid props', () => {
  const UncleRico = (props) => {
    return <div {...getValidProps(props)} id='UncleRico' />
  }
  const wrapper = mount(<UncleRico id='Rico' throwSteak='atNapolean' distance='quarterMile' />)

  const el = wrapper.find('div')

  expect(el.props().id).toBe('UncleRico')
  expect(el.props().throwSteak).toBe(undefined)
  expect(el.props().distance).toBe(undefined)
})
