'use client';

import {
  AppRouterInstance,
  NavigateOptions,
  PrefetchOptions,
} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter as useNextRouter } from 'next/navigation';
import { useRouterEventStore } from './routerEventStore';
import { RouterEvent } from './RouterEvent';

export function useRouter() {
  const router = useNextRouter();
  const { emit } = useRouterEventStore();

  const proxy: AppRouterInstance = {
    back: function (): void {
      emit(RouterEvent.RouteChangeStart);
      router.back();
    },
    forward: function (): void {
      emit(RouterEvent.RouteChangeStart);
      router.forward();
    },
    refresh: function (): void {
      emit(RouterEvent.RouteChangeStart);
      router.refresh();
    },
    push: function (href: string, options?: NavigateOptions | undefined): void {
      emit(RouterEvent.RouteChangeStart);
      router.push(href, options);
    },
    replace: function (
      href: string,
      options?: NavigateOptions | undefined
    ): void {
      emit(RouterEvent.RouteChangeStart);
      router.replace(href, options);
    },
    prefetch: function (
      href: string,
      options?: PrefetchOptions | undefined
    ): void {
      router.prefetch(href, options);
    },
  };

  return proxy;
}
