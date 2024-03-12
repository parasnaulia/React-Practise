// context.js
import { createContext } from 'react';

const Content = createContext({
  obj: [], // specify the structure of your context object
  insert: () => {}, // insert is a function
  delete1: () => {},
   // delete1 is a function
});

export default Content;
