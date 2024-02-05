import React from 'react';
import { useRouteChange } from 'nextjs13-router-events';
import { RouterEvent } from './RouterEvent';
import { useRouterEventStore } from './routerEventStore';

export const RouteChangeTriggers = () => {
  const { emit } = useRouterEventStore();

  useRouteChange({
    onRouteChangeStart: () => {
      console.log('onRouteChangeStart');
      emit(RouterEvent.RouteChangeStart);
    },
    onRouteChangeComplete: () => {
      console.log('onRouteChangeComplete');
      emit(RouterEvent.RouteChangeComplete);
    },
  });

  return <></>;
};
