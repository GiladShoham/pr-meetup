import React from 'react';
import { GiladUserCard } from './gilad-user-card';
import { CloudProvider } from "@teambit/cloud.cloud-provider";


export const BasicGiladUserCard = ({ style }) => {
  return (
    <CloudProvider>
      <GiladUserCard style={style} />
    </CloudProvider>
  );
}
