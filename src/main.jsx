import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import rootReducer from './store/index.js';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
