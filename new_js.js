console.log("from js");

let car = {
    color: "blue",
    model: 2011,
}

console.log(car["color"]);
console.log(car["model"]);

//car['company'] = "maruti";
car.speed = 200;
console.log(car.speed);

car.company = "Maruti";
console.log(car.company);

car["type"] = "hatchBack";
console.log(car['type'])

console.log(car);