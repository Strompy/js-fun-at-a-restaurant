class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(name, isMorning) {
    if (isMorning) {
        return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }

  checkForFood(item) {
    if (this.restaurant.menus[item.type].includes(item)) {
      return `Yes, we're serving ${item.name} today!`;
    } else {
      return `Sorry, we aren't serving ${item.name} today.`;
    }
  }
}

module.exports = Chef;
