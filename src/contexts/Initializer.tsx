import React, { ReactNode } from "react";
import { AppContext } from "./AppContext";
import { AppManager } from "services/app";

type InitializerProps = {
  accessToken: string;
  children: ReactNode
}

export const Initializer = (props: InitializerProps) => {
  const appManager = new AppManager(props.accessToken);

  return (
    <AppContext.Provider value={appManager}>
      {props.children}
    </AppContext.Provider>
  )
}