import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as MangaList from '../components/manga-list';

configure({  adapter: new Adapter() });

describe('Manga List Test', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<MangaList />);
    
    expect(wrapper).toBeTruthy();
  });
});