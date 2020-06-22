export interface MyInterface {
    prop1: string;
    prop2: number;
    prop3: boolean;
    doSomething():string;
}

export class MyClass implements MyInterface {
    prop1 = "1";
    prop2 = 999;
    prop3 = true;

    doSomething():string {
        return "hello!";
    }
}
