import { RouterEvent } from './RouterEvent';
import { useRouterEventStore } from './routerEventStore';

export const emitActionStart = () => {
  const state = useRouterEventStore.getState();

  state.emit(RouterEvent.ActionStart);
};

export const emitActionComplete = () => {
  const state = useRouterEventStore.getState();

  state.emit(RouterEvent.ActionComplete);
};

export const emitRouteChangeStart = () => {
  const state = useRouterEventStore.getState();

  state.emit(RouterEvent.RouteChangeStart);
};

export const emitRouteChangeComplete = () => {
  const state = useRouterEventStore.getState();

  state.emit(RouterEvent.RouteChangeComplete);
};
