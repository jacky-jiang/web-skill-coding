declare class StorageBaseType {
  getItem: (key: string) => string;
  setItem: (key: string, value: string) => void
}

export {
  StorageBaseType
}