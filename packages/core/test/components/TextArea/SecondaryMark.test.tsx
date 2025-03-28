import React from 'react';
import { shallow } from 'enzyme';
import SecondaryMark from '../../../src/components/TextArea/Proofreader/SecondaryMark';

describe('<SecondaryMark />', () => {
  it('renders a mark', () => {
    const wrapper = shallow(
      <SecondaryMark alwaysHighlight selected={false} onSelect={() => {}}>
        Word
      </SecondaryMark>,
    )
      .dive()
      .dive();

    expect(wrapper.find('mark')).toHaveLength(1);
  });
});
