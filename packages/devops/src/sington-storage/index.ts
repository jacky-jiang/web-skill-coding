declare class StorageBase {
  getItem: (key: string) => string;
  setItem: (key: string, value: string) => void
}

function StorageBase() {}

StorageBase.prototype.getItem = (key: string) => {
  return localStorage.getItem(key);
}

StorageBase.prototype.setItem = (key: string, value: string) => {
  return localStorage.setItem(key, value);
}

const SingtonStorage: () => StorageBase = (function() {
  let instance: StorageBase = null;

  return function() {
    if (!instance) {
      // @ts-ignore
      instance = new StorageBase();
    }

    return instance;
  }
})();

export {
  SingtonStorage,
  StorageBase
}