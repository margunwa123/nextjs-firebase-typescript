import { useEffect, useState } from "react";

const PREFIX_LOCAL_STORAGE = process.env.NEXT_PUBLIC_APP_NAME ?? "APP-";

function useLocalStorage<T = any>(name: string, initialState: any = null) {
  let prefixedName = PREFIX_LOCAL_STORAGE.toUpperCase() + name.toUpperCase();
  const [x, setX] = useState<T>(() => {
    const item = localStorage.getItem(prefixedName);
    if (item) {
      return JSON.parse(item);
    }
    if (typeof initialState == "function") {
      return initialState();
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(prefixedName, JSON.stringify(x));
  }, [x, prefixedName]);

  return [x, setX];
}

export default useLocalStorage;
