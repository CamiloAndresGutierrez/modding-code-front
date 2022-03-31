import Adapter from 'enzyme-adapter-react-16';
global.fetch = require('jest-fetch-mock');

jest.setMock('jest-fetch-mock', global.fetch);
require('enzyme').configure({ adapter: new Adapter() });
