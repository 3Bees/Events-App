import React from 'react';
import AppNavigation from './src/Services/navigation';
import store from './src/store';
import {Provider} from 'react-redux';
const App = () => {
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    );
}
export default App;
