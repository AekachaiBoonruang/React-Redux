import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'
import Score from './components/Score'
import Alaphabet from "./components/Alphabet/index";

const store = createStore(rootReducer, applyMiddleware(logger));

const MyApp = () => (
    <Provider store={store}>
        <Fragment>
            <App />
            <Score />
            <Alaphabet />
        </Fragment>
    </Provider>
);

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
