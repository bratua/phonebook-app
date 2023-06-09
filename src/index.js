import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import { App } from 'components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  ChakraBaseProvider,
  extendBaseTheme,
  ChakraProvider,
  ColorModeScript,
} from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';
import { store, persistor } from 'redux/store';

const theme = extendBaseTheme();
console.log(theme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/phonebook-app">
          {/* <ChakraProvider> */}
          <ChakraBaseProvider theme={chakraTheme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
          </ChakraBaseProvider>
          {/* </ChakraProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
