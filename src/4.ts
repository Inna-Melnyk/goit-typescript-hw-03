class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature():number {
    return this.signature;
  }
}


class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  public comeIn(person: Person) {
    if (this.door) {
      return this.tenants.push(person);
    } else {
      console.log("The door is closed");
    }
  }
}

class MyHouse extends House{

    openDoor(key: Key): void {
    if (key === this.key) {
      this.door = true;
      console.log('The door is open.');
    } else {
      this.door = false;
      console.log('The door is closed. Invalid key.');
    }
  }
    
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);



export {};