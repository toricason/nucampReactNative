import Main from './screens/MainComponent';
import Loading from './components/LoadingComponent';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate
                loading={<Loading />}
                persistor={persistor}
            >
                <NavigationContainer>
                    <Main />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}
