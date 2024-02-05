import { RouterEvent } from './RouterEvent';
import { useRouterEventStore } from './routerEventStore';

export const off = (event: RouterEvent, handler: () => void) => {
  const state = useRouterEventStore.getState();
  state.off(event, handler);
};
