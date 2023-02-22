import { useState, useEffect } from "react";

const useLocalStorage = (key, defaulValue = null) => {
  const [value, SetValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) {
        return JSON.parse(item);
      }
      return defaulValue;
    } catch (error) {
      return defaulValue;
    }
  });

useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
}, [key, value]);


return [value, SetValue];

};

export default useLocalStorage