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
        
    }
};