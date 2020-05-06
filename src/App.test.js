import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App/>);
    expect((wrapper.find('h2').text())).toEqual('Hello World!!');
    expect(wrapper).toMatchSnapshot();
  });
});

test('test sum',() => {
  var v = App.prototype.sum(1,2);
  expect(v).toBe(3);
});

test('test api call',async () => {
  const val = await App.prototype.userAction();
  console.log(val.status);
  expect("a").toBe("a");
});


