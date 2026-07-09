"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  return localStorage.getItem("user");
}

function getServerSnapshot() {
  return null;
}

export function useUser() {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return stored ? JSON.parse(stored) : null;
}