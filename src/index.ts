import { MyInterface } from "typings-package1-issue" 

export class ClassFromPackage2 implements MyInterface {
    name = "package2";
    doSomething():string {
        return `hello from ${this.name}!`;
    }
}

export const instanceFromPackage2 = new ClassFromPackage2()
