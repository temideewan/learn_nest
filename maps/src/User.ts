import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      long: faker.location.longitude(),
    };
  }
  markerContent(): string {
    return `user name is ${this.name}`;
  }
}
