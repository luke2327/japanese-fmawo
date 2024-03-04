"use client";

import { createContext, useContext } from "react";
import { AnimationConfig } from "@/components/animate/animate-items";

export interface AppStateContext {
  previousPathname?: string;
  hasLoaded?: boolean;
  setHasLoaded?: (hasLoaded: boolean) => void;
  nextPhotoAnimation?: AnimationConfig;
  setNextPhotoAnimation?: (animation?: AnimationConfig) => void;
  clearNextPhotoAnimation?: () => void;
}

export const AppStateContext = createContext<AppStateContext>({});

export const useAppState = () => useContext(AppStateContext);
