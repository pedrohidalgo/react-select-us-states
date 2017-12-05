import React from 'react';
import {mount} from 'enzyme';
import SelectUSState from '../src';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

test('SelectUSState renders correctly', () => {
  configure({adapter: new Adapter()});

  const id = 'myId';
  const className = 'myClassName';
  const onChangeEvent = () => {};

  const wrapper = mount(<SelectUSState id={id} className={className} onChange={onChangeEvent()}/>);

  expect(wrapper.hasClass(className)).toEqual(true);
  expect(wrapper.find('select').prop('id')).toEqual(id);
});