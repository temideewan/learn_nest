const carMakers: string[] = ['toyota', 'chevy'];
const dates = [new Date(), new Date()]

const carsByMake: string[][] = []

// type retrieved values from array
const aCar = carMakers[1]

const myCar = carMakers.pop()

// prevent incompatible values
// won't work
// carMakers.push(100);

carMakers.map((car: string) => car.toUpperCase());

// flexible types

const importantDates: (Date | string)[] = []

importantDates.push('2030-10-10')
// won't work
// importantDates.push(1)
