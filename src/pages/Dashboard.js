import React from 'react';
import MyProjects from '../Components/MyProjects';
import RecommendedProjects from '../Components/RecommendedProjects';
import Welcome from '../Components/Welcome';

export default class Dashboard extends React.Component {
    render () {
        return (
        	<div class="card">
                <MyProjects />
                <RecommendedProjects />
                <Welcome />
            </div>
        );
    }
};