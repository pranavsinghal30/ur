import React from 'react';
import { Link } from 'react-router';

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
    }
}

export default List;