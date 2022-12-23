class Person {
    constructor() {}
    msg: string;
    speak() {
        console.log(this.msg)
    }
}

const tom = new Person();
tom.msg = 'Hello';
tom.speak();