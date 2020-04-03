import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

class List extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div>
              <Match exactly pattern="/google" component={() => window.location = 'http://google.com'} />
              
              <Match pattern="/store/:storeId" component={App} />
              <Miss component={NotFound} />
            </div>
            </BrowserRouter>
        );
    }
}

export default List;