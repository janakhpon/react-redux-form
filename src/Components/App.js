import React from 'react';
import Displayform from './Displayform';
import { Provider } from 'react-redux';
import store from '../store';


class App extends React.Component{

    render() {
        
        return (
          <Provider store={store}>
            <Displayform />
          </Provider>
        );
    }

}


export default App;
