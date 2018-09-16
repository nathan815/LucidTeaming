import React from 'react';
import MyProjects from '../Components/MyProjects';
import Welcome from '../Components/Welcome';

export default class Dashboard extends React.Component {
    render () {
        return (
            <div>
                <MyProjects />
                <Welcome />
            </div>
        );
    }
};
