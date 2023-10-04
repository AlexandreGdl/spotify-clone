import React, { ReactNode } from "react";
import { AppContext } from "./AppContext";
import { AppManager } from "services/app";

type InitializerProps = {
  accessToken: string;
  children: ReactNode
}

const appManager = new AppManager();

export const Initializer = (props: InitializerProps) => {
  return (
    <AppContext.Provider value={appManager}>
      {props.children}
    </AppContext.Provider>
  )
}