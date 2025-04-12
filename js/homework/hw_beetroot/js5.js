// 1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку,
// середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// 1.1.Метод, який виводить на екран інформацію про автомобіль.
// 1.2.Додавання ім’я водія у список
// 1.3.Перевірка водія на наявність його ім’я у списку
// 1.4.Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
//  Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

let car = {
  producer: "BMW",
  model: "3",
  year: 2012,
  medSpeed: 100,
  fuelTank: 50,
  fuelFor100km: 10,
  drivers: [],

  // 1.1.
  info() {
    console.log(`Information about this car`, this);
  },
  // 1.2.
  addDriver(driver) {
    if (!this.drivers.includes(driver)) {
      this.drivers.push(driver);
    }
    console.log(car.drivers);
  },

  // 1.3.
  checkDrivers(driver) {
    return this.drivers.includes(driver);
  },

  // 1.4.
  calcTrip(distance) {
    let time = distance / this.medSpeed;
    let breaks = Math.floor(time / 4);
    time += breaks;

    let fuel = (distance / 100) * this.fuelFor100km;

    console.log(`Time: ${time} hours`);
    console.log(`Fuel: ${fuel} liters`);
  },
};

car.info();
car.addDriver("Vanya");
car.addDriver("Dasha");
car.addDriver("Vlad");
console.log(car.checkDrivers("Vlad"));
console.log(car.checkDrivers("Masha"));
car.drivers.push("Masha");
console.log(car);
car.calcTrip(1000);
