import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension'
import moviesApp from './reducers/reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainView from './components/main-view/main-view';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

const store = createStore(moviesApp, devToolsEnhancer());


// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  
  render() {
    return (
     <div roote>
      <Provider store={store}>
        <Container>
          <MainView />
        </Container>
      </Provider>
      </div> 
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('root')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);