import React from 'react';
import './css/loading.css';

const AppLoading = (props) => {
  return (
    <div className="loading-screen">
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    </div>
  );
}
export default AppLoading;
