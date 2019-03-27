import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './pages/App';
import { my_store } from './store';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';



//Redux code - 




ReactDOM.render(<Provider store={my_store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>,
                 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.register();
