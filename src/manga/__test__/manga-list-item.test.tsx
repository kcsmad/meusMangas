import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as MangaListItem from '../components/manga-list-item';

configure({ adapter: new Adapter() });

describe('MangaListItem Test', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<MangaListItem />);
    
    expect(wrapper).toBeTruthy();
  });
});