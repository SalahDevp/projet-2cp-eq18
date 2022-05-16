const Store = require("electron-store");

const schema = {
  language: {
    type: "string",
    pattern: "^(ar|fr)$",
  },
  teacherPassword: {
    type: "string",
    minLength: 4,
    default: "0000",
  },
  "cour-centrale": {
    type: "object",
    properties: {
      teacher: { type: "number" },
      student: { type: "number" },
    },
  },
  "cour-axiale": {
    type: "object",
    properties: {
      teacher: { type: "number" },
      student: { type: "number" },
    },
  },
  sound: {
    type: "number",
    maximum: 1,
    minimum: 0,
    default: 1,
  },
  music: {
    type: "number",
    maximum: 1,
    minimum: 0,
    default: 1,
  },
};

const store = new Store({ schema });

module.exports = store;
