"use client";

import { useSyncExternalStore } from "react";

export const SHOOT_MODE_STORAGE_KEY = "shoot-toggle-state";

function readShootModeFromStorage(): boolean {
  if (typeof window === "undefined") return false;

  try {
    return window.localStorage.getItem(SHOOT_MODE_STORAGE_KEY) === "on";
  } catch {
    return false;
  }
}

const listeners = new Set<() => void>();

/**
 * Notify subscribers AFTER the current render cycle.
 * This prevents:
 * "Cannot update a component while rendering a different component"
 */
export function notifyShootModeSubscribers(): void {
  queueMicrotask(() => {
    for (const listener of listeners) {
      listener();
    }
  });
}

export function subscribeShootMode(onStoreChange: () => void): () => void {
  if (typeof window !== "undefined") {
    const onStorage = (event: StorageEvent): void => {
      if (event.key === SHOOT_MODE_STORAGE_KEY || event.key === null) {
        onStoreChange();
      }
    };

    window.addEventListener("storage", onStorage);
    listeners.add(onStoreChange);

    return () => {
      window.removeEventListener("storage", onStorage);
      listeners.delete(onStoreChange);
    };
  }

  return () => {
    listeners.delete(onStoreChange);
  };
}

export function getShootModeSnapshot(): boolean {
  return readShootModeFromStorage();
}

/** True while the paintball / shoot-mode toggle is on. */
export function useShootModeOn(): boolean {
  return useSyncExternalStore(
    subscribeShootMode,
    getShootModeSnapshot,
    () => false,
  );
}
