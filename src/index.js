import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'
import Score from './components/Score'
import Expert from './components/Expert'

const store = createStore(rootReducer, applyMiddleware(logger));

const MyApp = () => (
    <Provider store={store}>
        <Fragment>
            <App />
            <Score />
            <Expert />
        </Fragment>
    </Provider>
);

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
