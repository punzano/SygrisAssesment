import { nodesConstants } from '../constants';

const initialState = {
  list: []
};

export const nodes = (state = initialState, action) => {
  switch (action.type) {
    case nodesConstants.GET_NODES_SUCCESS:
      return {
        list: action.nodes
      };
    case nodesConstants.GET_NODES_FAILURE:
      return [];
    case nodesConstants.ADD_NODE_SUCCESS:
      return {
        list: action.node
      };
    case nodesConstants.ADD_NODE_FAILURE:
      return [];
    default:
      return state
  }
}