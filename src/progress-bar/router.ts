'use client';

import {
  AppRouterInstance,
  NavigateOptions,
  PrefetchOptions,
} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter as useNextRouter } from 'next/navigation';
import { useRouteChangeContext } from 'nextjs13-router-events/dist/context/RouteChangeProvider';

export function useRouter() {
  const router = useNextRouter();
  const { onRouteChangeStart } = useRouteChangeContext();

  const proxy: AppRouterInstance = {
    back: function (): void {
      onRouteChangeStart();
      router.back();
    },
    forward: function (): void {
      onRouteChangeStart();
      router.forward();
    },
    refresh: function (): void {
      onRouteChangeStart();
      router.refresh();
    },
    push: function (href: string, options?: NavigateOptions | undefined): void {
      onRouteChangeStart();
      router.push(href, options);
    },
    replace: function (
      href: string,
      options?: NavigateOptions | undefined
    ): void {
      onRouteChangeStart();
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
