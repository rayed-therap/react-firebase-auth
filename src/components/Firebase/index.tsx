import React from "react";
import Firebase from "./firebase";

export default Firebase;

export const FirebaseContext = React.createContext<Firebase | null>(null);

export const FirebaseProvider = ({ children }: any) => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      {children}
    </FirebaseContext.Provider>
  );
};
