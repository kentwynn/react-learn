'use client';

import Link from 'next/link';

const hooks = [
  /**
   * 💡 useState
   *
   * Basic hook for managing local component state.
   * Triggers a re-render when the value changes.
   *
   * Best for: toggles, form fields, counters, local UI state.
   */
  { name: 'useState', path: 'use-state' },

  /**
   * 💡 useReducer
   *
   * Manages complex or grouped state with reducer logic.
   * Returns state and dispatch function.
   *
   * Best for: forms, toggles, undo/redo, grouped logic updates.
   */
  { name: 'useReducer', path: 'use-reducer' },

  /**
   * 💡 useRef
   *
   * Stores a persistent, mutable value that doesn’t trigger re-render on change.
   * Also used to reference DOM elements.
   *
   * Best for: DOM refs, timers, previous values, silent mutable flags.
   */
  { name: 'useRef', path: 'use-ref' },

  /**
   * 💡 useMemo
   *
   * Memoizes expensive computed values.
   * Only recomputes when dependencies change.
   *
   * Best for: filtering, sorting, formatting, preventing unnecessary calculations.
   */
  { name: 'useMemo', path: 'use-memo' },

  /**
   * 💡 useCallback
   *
   * Memoizes a function so it doesn’t change on every render.
   * Helpful when passing functions to child components or effects.
   *
   * Best for: prop optimization, dependency arrays, function reuse.
   */
  { name: 'useCallback', path: 'use-callback' },

  /**
   * 💡 useContext
   *
   * Access shared data provided by a React Context Provider.
   *
   * Best for: auth state, theme settings, language config, global app settings.
   */
  { name: 'useContext', path: 'use-context' },

  /**
   * 💡 useTransition
   *
   * Defer non-urgent updates to improve perceived UI responsiveness.
   *
   * Best for: large list filtering, smooth transitions, responsive typing.
   */
  { name: 'useTransition', path: 'use-transition' },

  /**
   * 💡 useDeferredValue
   *
   * Delays using a value so urgent updates render first.
   * Used for UI that depends on slow-updating inputs.
   *
   * Best for: real-time search filtering, large list rendering without jank.
   */
  { name: 'useDeferredValue', path: 'use-deferred-value' },

  /**
   * 💡 useOptimistic
   *
   * Show temporary optimistic data before a server action completes.
   * App Router only.
   *
   * Best for: comment forms, todo lists, real-time updates.
   */
  { name: 'useOptimistic', path: 'use-optimistic' },

  /**
   * 💡 useActionState
   *
   * Handles async form actions in Server Components (Next.js App Router).
   *
   * Best for: form submissions, mutation handling, optimistic UX.
   */
  { name: 'use-action-state', path: 'use-action-state' },

  /**
   * 💡 useSyncExternalStore
   *
   * Subscribes safely to external stores (e.g. Zustand, Redux).
   * Supports concurrent rendering and SSR.
   *
   * Best for: global state, custom stores, stable subscriptions.
   */
  { name: 'useSyncExternalStore', path: 'use-sync-external-store' },

  /**
   * 💡 useEffect
   *
   * Run side-effects after the DOM has updated.
   *
   * Best for: API fetching, subscriptions, event listeners, DOM updates.
   */
  { name: 'useEffect', path: 'use-effect' },

  /**
   * 💡 useLayoutEffect
   *
   * Like `useEffect`, but runs synchronously before paint.
   *
   * Best for: measuring layout, synchronizing scroll, avoiding flicker.
   */
  { name: 'useLayoutEffect', path: 'use-layout-effect' },

  /**
   * 💡 useInsertionEffect
   *
   * Runs synchronously before any DOM mutations.
   * Intended for injecting styles or layout-critical operations.
   *
   * ⚠️ Use only in CSS-in-JS libraries or low-level libraries.
   */
  { name: 'useInsertionEffect', path: 'use-insertion-effect' },

  /**
   * 💡 useImperativeHandle
   *
   * Customize the instance value exposed to parent via `ref`.
   *
   * Best for: exposing methods in custom components (focus, clear, scroll).
   */
  { name: 'useImperativeHandle', path: 'use-imperative-handle' },

  /**
   * 💡 useId
   *
   * Generates a stable, unique ID for SSR + hydration consistency.
   *
   * Best for: accessibility, form `label → input` pairs.
   */
  { name: 'useId', path: 'use-id' },

  /**
   * 💡 useDebugValue
   *
   * Label a custom hook for display in React DevTools.
   * Has no effect on runtime behavior.
   *
   * Best for: improving hook debugging experience in development.
   */
  { name: 'useDebugValue', path: 'use-debug-value' },
  /**
   * 💡 useFetch
   *
   * Custom hook for fetching data from a URL.
   * Handles loading, error, and data states.
   *
   * Best for: API calls, quick data loads, isolated fetching logic.
   */
  { name: 'useFetch', path: 'use-fetch' },
];

export default function Index() {
  return (
    <div className="p-8 max-w-xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">🧠 React Hook Playground</h1>
      <p className="text-gray-600">Explore and learn React hooks:</p>
      <ul className="list-disc list-inside space-y-2">
        {hooks.map((hook) => (
          <li key={hook.name}>
            <Link
              href={`/hook/${hook.path}`}
              className="text-blue-600 hover:underline"
            >
              {hook.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
