import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

//在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = {
    ...object,
  };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

//custom hook
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

//custom debounce
// export const useDebounceFunc = (func, delay) => {
//     let timeOut;
//     return (...param) => {
//         if (timeOut) {
//             clearTimeout(timeOut);
//         }
//         timeOut = setTimeout(() => {
//             func(...param);
//         }, delay);
//     };
// };

export const useDebounce = <S>(value: S, delay?: number): S => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

//test
export const useArray = (persons: { name: string; age: number }[]) => {
  const [value, setValue] = useState(persons);

  const add = (person: { name: string; age: number }): void => {
    value.unshift(person);
    const add_value = value;
    setValue([...add_value]);
  };

  const removeIndex = (index: number): void => {
    value.splice(0, 1);
    const remove_value = value;
    setValue([...remove_value]);
  };

  const clear = (): void => {
    setValue([]);
  };

  return {
    value,
    clear,
    removeIndex,
    add,
  };
};
