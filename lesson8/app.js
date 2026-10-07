const cars = [
  {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Черный",
    start: function () {
      console.log("Машина " + this.brand + " " + this.model + " завелась!");
    }
  },
  {
    brand: "BMW",
    model: "M5",
    year: 2021,
    color: "Синий",
    start: function () {
      console.log("Машина " + this.brand + " " + this.model + " завелась!");
    }
  }
];

console.log(cars[0].brand);
console.log(cars[0]["model"]);

cars[0].color = "Белый";
cars[0].price = 25000;
delete cars[0].year;

cars[0].start();

console.log(cars[0]); 
