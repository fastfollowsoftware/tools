'use client';

import { RouteChangeProvider } from 'nextjs13-router-events';
import React from 'react';
import { ReactNode } from 'react';

export const RouteChange = ({ children }: { children: ReactNode }) => {
  return <RouteChangeProvider>{children}</RouteChangeProvider>;
};
