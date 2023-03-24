/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { store } from './Src/Store';
import { Provider } from 'react-redux';

const AppRedux = () => {
    return (
        <Provider {...{ store }}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => AppRedux);
