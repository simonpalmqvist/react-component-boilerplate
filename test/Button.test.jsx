import React from 'react'
import { mount, shallow, render } from 'enzyme'
import sinon from 'sinon'
import {expect} from 'chai'

import Button from '../src/Button';

describe('Button component', function () {
  it('should show title', function () {
    const wrapper = render(<Button title='Test button'/>)
    expect(wrapper.text()).to.contain("Test button");
  })

  it('should handle clicks', function () {
    const onClick = sinon.spy()
    const wrapper = shallow(<Button title='ti' onClick={onClick} />)

    wrapper.find('button').simulate('click')

    expect(onClick).to.have.property('callCount', 1)
  })
})
