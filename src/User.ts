import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap.ts'

export class User implements Mappable{
    name:string;
    location: {
      lat: number;
      lng: number;
    }
    color:string = 'red';

    constructor(){
      this.name = faker.person.fullName();
      this.location = {
        lat: faker.location.latitude(),
        lng: faker.location.longitude()
      };
    }

    markerContent():string{
      return `<h1>User Name : ${this.name}</h1>`
    }
}














// npm install @faker-js/faker@7.6.0