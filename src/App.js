import React from 'react';
import './App.css';


class App extends React.Component {

    sum(a, b) {
        return a+b;
    }

    userAction () {
        const response =  fetch('https://reqres.in/api/users?page=2');
        return response;
    }

    render() {
        return (
            <div className="App">
                <h2>Hello World!!</h2>
                <input type="checkbox" />
            </div>
        );
    }
}

export default App;
