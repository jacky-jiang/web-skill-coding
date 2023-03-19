import { SingtonStorage } from "./sington-storage";

const storage1: any = new SingtonStorage();
const storage2: any = new SingtonStorage();

storage1.setItem('name', '李雷');

console.log(storage1.getItem('name'));
console.log(storage2.getItem('name'));
console.log(storage1 === storage2);