import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
class Componete extends React.Component{
    render(){
        return(
            <div>
                <App />
            </div>
        );
    }
}
ReactDOM.render(<Componete />, document.getElementById('root'));