import React from 'react';
import Displayform from './Displayform';
import Navbar from './Navbar';
import Footer from './Footer';
import Mainpage from './Mainpage';
import { Provider } from 'react-redux';
import store from '../store';


class App extends React.Component{

    render() {
        
        return (
          <Provider store={store}>
            <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
              <Navbar/>
              <Mainpage/>
              <Footer/>
            </div>
          </Provider>
        );
    }

}


export default App;
