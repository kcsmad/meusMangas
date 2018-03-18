import React from 'react';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MangaList from '../components/manga-list';

configure({  adapter: new Adapter() });

describe('Manga List Test', () => {
   it('renders the component', () => {
       const wrapper = render(<MangaList />);

       expect(wrapper).toBeTruthy();
   });
});