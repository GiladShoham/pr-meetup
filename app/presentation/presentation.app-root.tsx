import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { NavigationProvider } from '@teambit/base-react.navigation.link';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router-adapter';
import { BitByBitDeckApp } from './app';

ReactDOM.render(
  <BrowserRouter>
    <NavigationProvider implementation={reactRouterAdapter}>
      <BitByBitDeckApp />
    </NavigationProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
