import {View, StatusBar, Platform, KeyboardAvoidingView} from 'react-native';
import React, {Component} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import stores from './src/Store/index';
import {PersistGate} from 'redux-persist/integration/react';
import {Loader} from './src/Config';
import AppNavigation from './AppNavigation';

const {store, persistor} = stores();

class App extends Component {
  render() {
    return (
      <Wrapper style={{flex: 1}}>
        <GestureHandlerRootView style={{flex: 1, backgroundColor: 'black'}}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <Loader />
              <AppNavigation />
              <Toast />
            </PersistGate>
          </Provider>
        </GestureHandlerRootView>
      </Wrapper>
    );
  }
}

export default App;

function Wrapper({children}) {
  if (Platform.OS === 'ios')
    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        // keyboardVerticalOffset={20}
      >
        {children}
      </KeyboardAvoidingView>
    );
  return <View style={{flex: 1}}>{children}</View>;
}
