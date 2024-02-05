import { create } from 'zustand';
import { RouterEvent } from './RouterEvent';

interface RouteEventState {
  eventHandlers: { [key: string]: (() => void)[] };
  on: (event: RouterEvent, handler: () => void) => void;
  off: (event: RouterEvent, handler: () => void) => void;
  emit: (event: RouterEvent) => void;
}

export const useRouterEventStore = create<RouteEventState>((set) => ({
  eventHandlers: {},
  on: (event, handler) =>
    set((state) => ({
      eventHandlers: {
        ...state.eventHandlers,
        [event]: [...(state.eventHandlers[event] || []), handler],
      },
    })),
  off: (event, handler) =>
    set((state) => ({
      eventHandlers: {
        ...state.eventHandlers,
        [event]: state.eventHandlers[event]?.filter((h) => h !== handler),
      },
    })),
  emit: (event) =>
    set((state) => {
      (state.eventHandlers[event] || []).forEach((handler) => {
        handler();
      });
      return state;
    }),
}));
