import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { nodes } from './nodes.reducer';

const rootReducer = combineReducers({
  authentication,
  nodes
});

export default rootReducer;