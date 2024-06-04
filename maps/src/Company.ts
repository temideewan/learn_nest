import { faker } from '@faker-js/faker';
export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      long: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `
    <div class="map_content">
    <h1>
    company name is ${this.companyName}
    </h1>

    <h3>
    catch phrase is ${this.catchPhrase}
    </h3>
    </div>
    `;
  }
}
