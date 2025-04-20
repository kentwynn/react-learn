type Listener = () => void;

let count = 0;
const listeners = new Set<Listener>();

export const counterStore = {
  getSnapshot: () => count,
  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  increment: () => {
    count += 1;
    listeners.forEach((cb) => cb());
  },
  reset: () => {
    count = 0;
    listeners.forEach((cb) => cb());
  },
};
