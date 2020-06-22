import { MyInterface, ClassFromPackage1 } from "typings-package1-issue" 

export class ClassFromPackage2 implements MyInterface {
    name = "package2";
    doSomething():string {
        return `hello from ${this.name}!`;
    }
}

console.log('Calling package1 from the package2')
new ClassFromPackage1().doSomething()