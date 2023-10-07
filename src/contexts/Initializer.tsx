import React, { ReactNode } from "react";
import { AppContext } from "./AppContext";
import { AppManager } from "services/app";
import { SkeletonTheme } from "react-loading-skeleton";

type InitializerProps = {
  accessToken: string;
  children: ReactNode
}

const appManager = new AppManager();

export const Initializer = (props: InitializerProps) => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <AppContext.Provider value={appManager}>
        {props.children}
      </AppContext.Provider>
    </SkeletonTheme>
  )
}