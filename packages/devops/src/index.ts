import { SingtonStorage, StorageBase } from "./sington-storage";

const storage1: StorageBase = SingtonStorage();
const storage2: StorageBase = SingtonStorage();

storage1.setItem('name', '李雷');
storage2.setItem('sex', '男');

console.log('storage1 name', storage1.getItem('name'));
console.log('storage2 name', storage2.getItem('name'));
console.log('storage1 sex', storage1.getItem('sex'));
console.log('storage2 sex', storage2.getItem('sex'));
console.log(storage1 === storage2);