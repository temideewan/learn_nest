interface Reportable {
  summary(): string;
}
const oldCivic = {
  name: 'civic',
  broken: true,
  year: new Date(2000, 1, 1),
  summary(): string {
    return `Name: ${this.name}`;
  },
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
}

const printSummary = (reportItem: Reportable): void => {
  console.log(reportItem.summary());
}

printSummary(oldCivic)
printSummary(drink)
