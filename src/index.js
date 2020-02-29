class User {
  create(name = "", surname = "", posts = [], age = "", email = "") {
    this.id;
    this.name = name;
    this.surname = surname;
    this.posts = posts;
    this.age = age;
    this.email = email;
  }

  init(userArr) {
    this.userAPI = userArr;
  }

  findByID(id) {
    return new Promise((resolve, reject) => {
      throw "Korona virus w PL";
      resolve(this.userAPI.filter(el => el.id == id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve, reject) => {
      resolve(this.userAPI.filter(el => el.email == email));
    });
  }

  getAll() {
    return this.userAPI;
  }
}

let Users = [
  {
    id: 1,
    name: "Darek",
    surname: "B",
    posts: [1, 23, 3],
    age: 24,
    email: "asdasd@asd.cpl"
  }
];

//Initializacja
const user = new User();
user.init(Users);

//get all
const users = user.getAll();

//find by id
user
  .findByID(2)
  .then(userById => console.log(userById))
  .catch(err => console.log(err));
user.findByEmail("asdasd@asd.cpl").then(userByEmail => {
  console.log(userByEmail);
});
