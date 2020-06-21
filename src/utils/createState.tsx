import { useState } from 'react';
import StateObject from "../interfaces/StateObject";
const createState = (defaultValue: any = ''): StateObject => {
  const [value, set] = useState(defaultValue);
  return {
    value: value,
    set: set
  }
};
export default createState;
