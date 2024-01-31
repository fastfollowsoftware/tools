'use client';

import React from 'react';
import { useRouteChange } from 'nextjs13-router-events';
import * as NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';

export const ProgressBar = () => {
  useRouteChange({
    onRouteChangeStart: () => {
      NProgress.start();
    },
    onRouteChangeComplete: () => {
      NProgress.done();
    },
  });

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
  }, []);

  useEffect(() => {
    NProgress.done();
  });

  return <></>;
};
