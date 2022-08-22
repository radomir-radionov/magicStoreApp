module.exports = class UserDto {
  id;
  name;
  genre;
  description;
  price;
  img;
  rating;
  age;
  paltform;

  constructor(model) {
    this.id = model._id;
    this.name = model.name;
    this.genre = model.genre;
    this.platform = model.platform;
    this.description = model.description;
    this.rating = model.rating;
    this.age = model.age;
    this.price = model.price;
    this.img = model.img;
  }
};
