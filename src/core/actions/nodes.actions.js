import { nodesService } from '../services/nodes.service';
import { nodesConstants } from '../constants';

const success = (nodes, type) => ({ type: nodesConstants[`${type}_SUCCESS`], nodes });
const failure = (error, type) => ({ type: nodesConstants[`${type}_FAILURE`], error });

const getNodes = (username, password) => {
    return dispatch => {
        nodesService.getNodes(username, password)
            .then(
                nodes => {
                    dispatch(success(nodes, 'GET_NODES'));
                    console.log('Success in getNodes: ', nodes);
                },
                error => {
                    dispatch(success(failure, 'GET_NODES'));
                    console.log('Error in getNodes: ', error);
                }
            );
    };
}

const addNode = (nodeInfo) => {
    return dispatch => {
        nodesService.addNode(nodeInfo)
            .then(
                node => {
                    dispatch(success(node, 'ADD_NODE'));
                    console.log('Success in addNode: ', node);
                },
                error => {
                    dispatch(success(failure, 'ADD_NODE'));
                    console.log('Error in addNode: ', error);
                }
            );
    };
};

export const nodesActions = {
    getNodes,
    addNode,
};