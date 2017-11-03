import React from 'react';
import rootApp from './rootApp'
import {shallow} from 'enzyme';
//testea la existencia de rootApp
it('render without crashing',()=>{
  shallow(<rootApp/>);
});
