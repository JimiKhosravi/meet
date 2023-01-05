import React, { Component } from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents />', () => {

  let NumberOfEventsWrapper, noeInput;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    noeInput = NumberOfEventsWrapper.find('input.noe-input');
  });

  test('<NumberOfEvents /> and noe-input are both rendered', () => {
    expect(NumberOfEventsWrapper).toBeDefined();
    expect(noeInput).toBeDefined();
  });

  test('noe-input is 10 (number type) by default', () => {
    expect(NumberOfEventsWrapper.find('input.noe-input').prop('type')).toBe('number');
    expect(NumberOfEventsWrapper.state('noe')).toBe(10);
  })

  test("the input should have the value given in the noe prop", () => {
    const NumberOfEventsWrapperWithProp = shallow(
      <NumberOfEvents noe={20} updateNumberOfEvents={() => { }} />
    );
    expect(NumberOfEventsWrapperWithProp.state("noe")).toBe(20);
  });
})