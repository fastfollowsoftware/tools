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
