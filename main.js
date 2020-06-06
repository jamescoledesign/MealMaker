const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {

    },
    set appetizers() {

    },
    get mains() {

    },
    set mains() {

    },
    get desserts() {

    },
    set desserts() {

    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    }
    addDishToCourse(courseName, dishName, dishPrice) {
        return {
            const dish = {
                return {
                    name: this.dishName,
                    price: this.dishPrice
                }
                this._courses[courseName].push(dish);
            }
        }
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        let randomDish = Math.floor(Math.random() * dishes.length);
        return randomDish;
    },
    generateRandomMeal() {
        const appetiser = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + mains.price + desserts.price;

        return `Your meal is ${appetizer.name}, ${mains.name}, and ${desserts.name}. The price is ${totalPrice}.`;
    }
};

menu.addDishToCourse('appetizers', 'bread', 3.50);
menu.addDishToCourse('mains', 'pasta', 8.00);
menu.addDishToCourse('desserts', 'cookie', 2.00);

