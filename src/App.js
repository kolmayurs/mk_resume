import React from 'react';
import './App.css';
import Resume from './Resume';

class App extends React.Component {
    render() {
        return (
            <div className="main-container">
              <Resume />
            </div>
        );
    }

}

export default App;