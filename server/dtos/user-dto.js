module.exports = class UserDto {
  id;
  role;
  email;
  name;
  description;

  constructor(model) {
    this.id = model._id;
    this.role = model.role;
    this.email = model.email;
    this.name = model.name;
    this.description = model.description;
  }
};
