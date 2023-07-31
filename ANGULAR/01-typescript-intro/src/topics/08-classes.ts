export class Person{
    public otraForma: string;

    constructor( 
        public name: string,
        public lastname: string,
        private address: string = 'No address'
    ){
        this.name = name;
        this.address = address;
        this.otraForma = '';
    }
}

export class Hero {
    constructor(
        public alterHego: string,
        public age: number,
        public realname: string,
        public person: Person
    ){
        // this.person = new Person(person);
    }
}

const person = new Person('Tony Stark', 'New York');
const ironman = new Hero('Ironman',45,'Tony',person);

console.log(ironman);