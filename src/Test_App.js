import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BoardForm from './App_BoardForm';
import BoardList from './App_BoardList';

class Test_App extends Component {
    
    render() {
        return (
            <div>

                <h3>React(Redux) + Firestore Board I</h3>
                <BoardForm/>
                <BoardList/>

            </div>
        );
    }
}

export default Test_App;