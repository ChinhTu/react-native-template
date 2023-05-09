/**
 * React Native App
 * Everything starts from the entrypoint
 */
import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from './components';
import RootStack from './navigation/NavigationStack';
import i18next, { i18nInit } from './utils/i18n';
import { persistor, store } from './redux/store';
import vi from './fixtures/Languages/vi.json';
import en from './fixtures/Languages/en.json';

const languages = {
  vi,
  en,
};

const Entrypoint = () => {
  const onBeforeLift = async () => {
    await i18nInit(languages);
  };
  return (
    <Provider store={store}>
      <PersistGate loading={null} onBeforeLift={onBeforeLift} persistor={persistor}>
        <I18nextProvider i18n={i18next}>
          <ThemeProvider>
            <SafeAreaProvider>
              <RootStack />
            </SafeAreaProvider>
          </ThemeProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};

export default Entrypoint;
