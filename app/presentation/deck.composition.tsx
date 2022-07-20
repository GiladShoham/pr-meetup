import React from 'react';
import { slides } from './deck';
import { Slides } from '@teambit/slides.slides';
import {
  ThemeSwitcher,
  ThemeToggler,
} from '@teambit/design.themes.theme-toggler';

export const BasicDeck = () => {
  return (
    <Slides
      slides={slides}
      plugins={[
        {
          controlPanel: ThemeToggler,
          providers: [
            ({ children }) => <ThemeSwitcher> {children}</ThemeSwitcher>,
          ],
        },
      ]}
    />
  );
}
