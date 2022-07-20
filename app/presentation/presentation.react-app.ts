import { ReactAppOptions } from '@teambit/react';

export const BitThemingDeckApp: ReactAppOptions = {
  name: 'pull-request-meetup-presentation',
  entry: [require.resolve('./presentation.app-root')],
  prerender: {
    routes: ['/'],
  },
};

export default BitThemingDeckApp;
