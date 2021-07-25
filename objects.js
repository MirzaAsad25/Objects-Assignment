// 1.
const itemsArray = [
    { name: 'juice', price: 50, quantity: 3 },
    { name: 'cookie', price: 30, quantity: 9 },
    { name: 'shirt', price: 880, quantity: 1 },
    { name: 'pen', price: 100, quantity: 2 },
];

function calculateTotalPrices() {
    let itemTotalPrice = [];
    let totalPrice = 0;

    for (const item of itemsArray) {
        const total = item.price * item.quantity;
        itemTotalPrice.push(total);
        totalPrice += total;
    }

    console.log(itemTotalPrice);
    console.log(totalPrice);
}

calculateTotalPrices();

// 2.
const user = {
    name: 'Asad',
    email: 'asad@gmail.com',
    password: 'asad123',
    age: 22,
    gender: 'male',
    city: 'Karachi',
    country: 'Pakistan',
};

console.log('age' in user);
console.log('country' in user);
console.log('firstName' in user);
console.log('lastName' in user);

// 3.
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getInfo = function () {
        console.log(`${this.make} ${this.model} ${this.year}`);
    };
}

const car1 = new Car('Toyota', 'Prius', '2015');
const car2 = new Car('Honda', 'Civic', '2016');

car1.getInfo();
car2.getInfo();

// 4.
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
});
