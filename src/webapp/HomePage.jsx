import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { nodesActions } from '../core/actions';

const HomePage = (props) => {
    const { dispatch, user, nodes } = props;

    useEffect(() => {
        dispatch(nodesActions.getNodes());
    }, [dispatch]);

    const onAddNode = () => {
        dispatch(nodesActions.addNode({
            name: 'Node 0',
            parent: '',
            level: 0
        }));
    };

    const getNodes = () => {
        let nodesElements = [];
        nodes.list.map(node => (
            <div key={node.id}>
                <span>{node.name}</span>
                <span>{node.level}</span>
            </div>
        ));

        return nodesElements;
    };

    return (
        <div className="col-md-6 col-md-offset-3">
            <h1>Hi {user.loginName}!</h1>
            <p>You're logged in with React & JWT!!</p>
            {nodes.list.length > 0 && getNodes()}
            <button className="btn btn-primary" onClick={onAddNode}>Add Node</button>
            <Link to="/login">Logout</Link>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { authentication, nodes } = state;
    const { user } = authentication;
    return { user, nodes };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };