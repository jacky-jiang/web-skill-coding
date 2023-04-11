import { StorageBaseType } from '../../types/sington-storage'

function StorageBase() {}

StorageBase.prototype.getItem = (key: string) => {
  return localStorage.getItem(key);
}

StorageBase.prototype.setItem = (key: string, value: string) => {
  return localStorage.setItem(key, value);
}

const SingtonStorage: () => StorageBaseType = (function() {
  let instance: StorageBaseType = null;

  return function() {
    if (!instance) {
      // @ts-ignore
      instance = new StorageBase();
    }

    return instance;
  }
})();

export {
  SingtonStorage
}