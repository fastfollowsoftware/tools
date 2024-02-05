import { RouterEvent } from './RouterEvent';
import { useRouterEventStore } from './routerEventStore';

export const on = (event: RouterEvent, handler: () => void) => {
  const state = useRouterEventStore.getState();
  state.on(event, handler);
};
