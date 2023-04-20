import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './components/GlobalStyles';
import './assets/css/responsive.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { SearchContextProvider } from './context/SearchContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

let persistor = persistStore(store);
// import 'bootstrap/dist/css/bootstrap.min.css';
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <SearchContextProvider>
                {/* <React.StrictMode> */}
                <App />
                {/* </React.StrictMode>, */}
            </SearchContextProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);

reportWebVitals();
