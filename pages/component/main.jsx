import { createContext,useState} from "react";
import { useContext } from 'react'
const Context=createContext(/*{
    item: undefined,
    //setItem: async (theme) => null,
  }*/)
  export const useItem = () => useContext(Context)
export default Context;