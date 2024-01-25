import { createContext } from "react";
import { user } from '../useContext';
export const userContext = createContext<user>(undefined);