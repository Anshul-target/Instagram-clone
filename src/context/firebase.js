import { Component, createContext } from "react";
const FirebaseContext = createContext(null);

export default FirebaseContext





//provider -------Component 1---------------- we want (firebase init here)
// -------Component 2----------------
// consumer-------Component 3----------------(firebase init here)
// -------Component 4----------------
// -------Component 5----------------
//consumer -------Component 6----------------(firebase init here)
// -------Component 7----------------
// -------Component 8----------------
//consumer -------Component 9----------------(firebase init here)
