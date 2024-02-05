# @fastfollowsoftware/tools

```console
npm i @fastfollowsoftware.com/tools
```

## Progress Bar

To install just add the RouteChangeComplete and ProgressBar component to the root of your layout.

```tsx
import {
  ProgressBar,
  RouteChangeComplete,
} from '@fastfollowsoftware/tools/router';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <RouteChangeComplete />
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}
```

## Router

### Trigger Router Events

You can trigger route start / complete events.

This is useful in scenarios where you want to trigger progress bar updates for server actions.

```ts
import {
  emitActionComplete,
  emitActionStart,
} from '@fastfollowsoftware/tools/router';

export const doAction = async (action: Promise<any>) => {
  emitActionStart();

  const actionResult = await action;

  emitActionComplete();

  return actionResult;
};
```

### Listen to Router Events

You can subscribe to router events using the `on` method.

Here's an example where we listen to router events and post messages to the parent.

```tsx
'use client';

import { RouterEvent, on } from '@fastfollowsoftware/tools/router';
import { useEffect } from 'react';

export const MyComponent = () => {
  useEffect(() => {
    const handleRouteChangeStart = () => {
      // handle route change start event
    };

    const handleRouteChangeComplete = () => {
      // handle route change complete event
    };

    on(RouterEvent.RouteChangeStart, handleRouteChangeStart);
    on(RouterEvent.RouteChangeComplete, handleRouteChangeComplete);

    // deregister on unmount
    return () => {
      on(RouterEvent.RouteChangeStart, handleRouteChangeStart);
      on(RouterEvent.RouteChangeComplete, handleRouteChangeComplete);
    };
  }, []);

  return <></>;
};
```
