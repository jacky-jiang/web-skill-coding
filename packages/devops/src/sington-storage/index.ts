function StorageBase() {}

StorageBase.prototype.getItem = (key: string) => {
  return localStorage.getItem(key);
}

StorageBase.prototype.setItem = (key: string, value: string) => {
  return localStorage.setItem(key, value);
}

const SingtonStorage: any = (function() {
  let instance: any = null;

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