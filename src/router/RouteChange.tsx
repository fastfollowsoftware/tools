'use client';

import { RouteChangeProvider } from 'nextjs13-router-events';
import React from 'react';
import { ReactNode } from 'react';
import { RouteChangeTriggers } from './RouteChangeTriggers';

export const RouteChange = ({ children }: { children: ReactNode }) => {
  return (
    <RouteChangeProvider>
      <RouteChangeTriggers />
      {children}
    </RouteChangeProvider>
  );
};
