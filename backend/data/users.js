import bcrypt from 'bcryptjs'

const users = [
  {
    name: "Admin User 0",
    email: "admin0@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "miles morales",
    email: "miles@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "peter parker",
    email: "peterparker@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;