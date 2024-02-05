'use client';

import React from 'react';
import * as NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { progressBarDone, progressBarStart } from './progressBarTrigger';
import { useRouterEventStore } from '../router/routerEventStore';
import { RouterEvent } from '../router/RouterEvent';

export const ProgressBar = () => {
  const { on, off } = useRouterEventStore();
  let doneTimeout: NodeJS.Timeout | null = null;

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleRouteChangeStart = () => {
      // sometimes a refresh happens right after an action is completed so we cancel any done events
      // if the new start event happens within a short time frame. This way the the progress bar updates only one time
      // instead of two times
      if (doneTimeout) {
        clearTimeout(doneTimeout);
        doneTimeout = null;
      }
      progressBarStart();
    };

    const handleRouteChangeComplete = () => {
      doneTimeout = setTimeout(progressBarDone, 10);
    };

    on(RouterEvent.RouteChangeStart, handleRouteChangeStart);
    on(RouterEvent.RouteChangeComplete, handleRouteChangeComplete);
    on(RouterEvent.ActionStart, handleRouteChangeStart);
    on(RouterEvent.ActionComplete, handleRouteChangeComplete);

    return () => {
      off(RouterEvent.RouteChangeStart, handleRouteChangeStart);
      off(RouterEvent.RouteChangeComplete, handleRouteChangeComplete);
      off(RouterEvent.ActionStart, handleRouteChangeStart);
      off(RouterEvent.ActionComplete, handleRouteChangeComplete);
    };
  }, []);

  return <></>;
};
