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
      teacher: {
        type: "object",
        properties: {
          ar: { type: "number", default: 0 },
          fr: { type: "number", default: 0 },
        },
      },
      student: {
        type: "object",
        properties: {
          ar: { type: "number", default: 0 },
          fr: { type: "number", default: 0 },
        },
      },
    },
  },
  "cour-axiale": {
    type: "object",
    properties: {
      teacher: {
        type: "object",
        properties: {
          ar: { type: "number", default: 0 },
          fr: { type: "number", default: 0 },
        },
      },
      student: {
        type: "object",
        properties: {
          ar: { type: "number", default: 0 },
          fr: { type: "number", default: 0 },
        },
      },
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
    default: 0.2,
  },
  exoScore: {
    type: "array",
    default: [0, 0, 0, 0, 0],
  },
};

const store = new Store({ schema });

module.exports = store;
