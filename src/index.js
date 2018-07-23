import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import Score from './components/Score'

const store = createStore(rootReducer)

const MyApp = () => (
    <Provider store={store}>
        <Fragment>
            <App />
            <Score />
        </Fragment>
    </Provider>
);

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
