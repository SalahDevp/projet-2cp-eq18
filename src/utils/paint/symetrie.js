const { WIDTH, HEIGHT } = require("components/paint/PaintComponent");
const { default: Shape } = require("./Shape");

export const generateSymetrieCentrale = (shape) => {
  const newShape = new Shape();
  newShape.points = shape.points.map((point) => ({
    x: WIDTH - point.x,
    y: HEIGHT - point.y,
  }));
  if (shape.polygone === true) {
    newShape.polygone = true;
  }
  return newShape;
};

export const generateSymetrieAxialeH = (shape) => {
  const newShape = new Shape();
  newShape.points = shape.points.map((point) => ({
    x: point.x,
    y: HEIGHT - point.y,
  }));
  if (shape.polygone === true) newShape.polygone = true;
  return newShape;
};

export const generateSymetrieAxialeV = (shape) => {
  const newShape = new Shape();
  newShape.points = shape.points.map((point) => ({
    x: WIDTH - point.x,
    y: point.y,
  }));
  if (shape.polygone === true) newShape.polygone = true;
  return newShape;
};
