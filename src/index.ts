import { MyClass, MyInterface } from "typings-package1-issue" 

export class MyOtherClass implements MyInterface {
    prop1 = "x";
    prop2 = 999;
    prop3 = true;

    doSomething():string {
        return "hey there";
    }
}

export const myclass = new MyClass()
export const myOtherClass = new MyOtherClass()
