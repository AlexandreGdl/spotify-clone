import { createContext } from "react";
import { AppManager } from "services/app";

export const AppContext = createContext<AppManager | null>(null);