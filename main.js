const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomDish = Math.floor(Math.random() * dishes.length);
        return dishes[randomDish];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${totalPrice}.`;
    }
};

menu.addDishToCourse('appetizers', 'bread', 3.50);
menu.addDishToCourse('appetizers', 'salad', 2.00);
menu.addDishToCourse('appetizers', 'sampler', 6.00);

menu.addDishToCourse('mains', 'steak fajitas', 12.00);
menu.addDishToCourse('mains', 'broccoli pasta', 8.50);
menu.addDishToCourse('mains', 'bbq sandwich', 6.00);

menu.addDishToCourse('desserts', 'cake', 3.50);
menu.addDishToCourse('desserts', 'cookies', 2.00);
menu.addDishToCourse('desserts', 'ice cream', 3.75);

const meal = menu.generateRandomMeal();

console.log(meal);