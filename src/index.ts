import { MyInterface } from "typings-package1-issue" 

export class ClassFromPackage2 implements MyInterface {
    doSomething():string {
        return "hello from package2!";
    }
}