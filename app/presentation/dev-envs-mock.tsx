import React from 'react';

import type { ComponentCardProps } from '@teambit/explorer.ui.gallery.component-card';

const baseAspectsUrl = 'https://bit.dev/';
const staticBrandsBaseUrl = 'https://static.bit.dev/brands/';
const staticEnvBaseUrl = 'https://static.bit.dev/extensions-icons/';


function ComponentCardPreview({ src }: { src: string }) {
  return (
    <div style={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
      <img src={src} width="70" alt="" />
    </div>
  );
}

export const devEnvsMock: ComponentCardProps[] = [
  {
    id: 'teambit/react/react',
    href: `${baseAspectsUrl}teambit/react/react`,
    description: 'A Bit development environment for React Components.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-react.svg`} />,
  },
  {
    id: 'teambit/react/react-native',
    href: `${baseAspectsUrl}teambit/react/react-native`,
    description: 'A Bit development environment for React Native Components.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-react.svg`} />,
  },
  {
    id: 'teambit/harmony/node',
    href: `${baseAspectsUrl}teambit/harmony/node`,
    description: 'A Bit development environment for Node Components.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-nodejs.svg`} />,
  },
  {
    id: 'teambit/angular/angular',
    href: `${baseAspectsUrl}teambit/angular/angular`,
    description: 'A generic Bit development environment for Angular Components.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-angular.svg`} />,
  },
  {
    id: 'teambit/web-components/lit',
    href: `${baseAspectsUrl}teambit/web-components/lit`,
    description: 'A customized extension for Lit environment.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-lit.svg`} />,
  },
  {
    id: 'teambit/html/html',
    href: `${baseAspectsUrl}teambit/html/html`,
    description: 'A tools for developing framework-less components.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticBrandsBaseUrl}html5.svg`} />,
  },
  {
    id: 'teambit/harmony/aspect',
    href: `${baseAspectsUrl}teambit/harmony/aspect`,
    description: 'A component environment built for Aspects.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: <ComponentCardPreview src={`${staticEnvBaseUrl}default.svg`} />,
  },
];