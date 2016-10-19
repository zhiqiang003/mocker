import { combineReducers } from 'redux';
import testData from './testData';
import project from './project';

const App = combineReducers({
  testData,
  project
});

export default App;
