import {useEffect, useState} from "react";

export function useLocalStorage(key, initialState = '') {
  const [token, setToken] = useState(localStorage.getItem(key));

  function setItem(newValue) {
    localStorage.setItem(key, JSON.stringify(newValue))
    setToken(localStorage.getItem(key));
  }

  function removeItem() {
    localStorage.removeItem(key)
    setToken(null);
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(initialState));
  }, []);

  return [
    token,
    {
      setItem,
      removeItem
    }
  ]
}