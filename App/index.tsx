import './Config';
import DebugConfig from './Config/DebugConfig';
import React, { Suspense } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import RootContainer from './RootContainer';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { InitializeStore } from './RTK/Setup';
import i18n from './i18n';
import { MenuProvider } from 'react-native-popup-menu';

// create our store
export const { reduxStore } = InitializeStore();

i18n.then(() => {});
/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
const App = gestureHandlerRootHOC(() => (
  <Suspense fallback={<ActivityIndicator />}>
    <Provider store={reduxStore}>
      <MenuProvider>
        <RootContainer />
      </MenuProvider>
    </Provider>
  </Suspense>
));

export default DebugConfig.useReactotron ? console.tron.overlay(App) : App;
