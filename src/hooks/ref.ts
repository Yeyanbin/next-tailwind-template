
import { useState } from 'react';

export interface IRef<T> {
  value: T;
}

function useMyRef<T>(defaultValue: T): IRef<T>;
function useMyRef<T>(getDefaultValue: () => T): IRef<T>;
function useMyRef<T>(_value: any) {
  const defaultValue: T = typeof _value === 'function' ? _value() : _value;

  const [value, setValue] = useState(defaultValue);

  const ref = new Proxy({}, {
    get(_, p) {
      if (p === 'value') {
        return value;
      }
    },
    set(target, p, newValue, _) {
      console.log(p, newValue)
      if (p === 'value') {
        setValue(newValue);
      }
      return true;
    }
  })
  return ref;
};

export default useMyRef;
