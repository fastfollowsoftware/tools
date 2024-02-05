'use client';

import React, { Suspense, useEffect } from 'react';
import { useRouterEventStore } from './routerEventStore';
import { usePathname, useSearchParams } from 'next/navigation';
import { RouterEvent } from './RouterEvent';

const RouteChangeCompleteComponent = () => {
  const { emit } = useRouterEventStore();

  // Not doing anything with these values, but they are required to trigger the effect
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    emit(RouterEvent.RouteChangeComplete);
  });

  return null;
};

export const RouteChangeComplete = () => {
  return (
    <Suspense>
      <RouteChangeCompleteComponent />
    </Suspense>
  );
};
