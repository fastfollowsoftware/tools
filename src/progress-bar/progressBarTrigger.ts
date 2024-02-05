'use client';

import * as NProgress from 'nprogress';

export const progressBarStart = () => {
  if (NProgress.isStarted()) {
    return;
  }

  NProgress.start();
};

export const progressBarDone = () => {
  NProgress.done();
};
