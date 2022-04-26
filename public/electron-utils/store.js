const Store = require("electron-store");

const schema = {
  language: {
    type: "string",
    pattern: "^(ar|fr)$",
  },
  teacherPassword: {
    type: "string",
    minLength: 4,
    maxLength: 15,
    default: "0000",
  },
};

const store = new Store({ schema });

module.exports = store;
