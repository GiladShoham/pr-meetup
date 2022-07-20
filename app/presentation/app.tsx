import React from 'react';
import { Slides } from '@teambit/slides.slides';
import {
  ThemeSwitcher,
  ThemeToggler,
} from '@teambit/design.themes.theme-toggler';
import { slides } from './deck';

export function BitByBitDeckApp() {
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
