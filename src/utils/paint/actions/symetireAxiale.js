import { UNIT, HEIGHT, WIDTH } from "pages/Paint";
import { getGridPos, getMousePos, getShapeFromPoint } from "utils/paint/basics";
import Shape from "../Shape";
import { clickInsidePolygone, clickOnShapeSegment } from "../geometry";

export const handleClick = (event, state) => {
  const { x, y } = getMousePos(state.canvasRef, event);
  let shape;
  const initialPoint = { x, y };
  shape =
    clickInsidePolygone(state.shapes, initialPoint) ||
    clickOnShapeSegment(state.shapes, initialPoint).shape;
  let axeSymetire = 3;
  if (shape) {
    if (axeSymetire === 0) {
      // X=0
      const newShape = new Shape({ x, y });
      newShape.points = shape.points.map((point) => ({
        x: WIDTH - point.x,
        y: point.y,
      }));
      if (shape.polygone === true) newShape.polygone = true;
      state.setShapes((prv) => [...prv, newShape]);
    }
    if (axeSymetire === 1) {
      // Y=0
      const newShape = new Shape({ x, y });
      newShape.points = shape.points.map((point) => ({
        x: point.x,
        y: HEIGHT - point.y,
      }));
      if (shape.polygone === true) newShape.polygone = true;
      state.setShapes((prv) => [...prv, newShape]);
    }
    if (axeSymetire === 2) {
      // Y=X
      const newShape = new Shape({ x, y });
      newShape.points = shape.points.map((point) => ({
        x: WIDTH - point.y,
        y: WIDTH - point.x,
      }));
      if (shape.polygone === true) newShape.polygone = true;
      state.setShapes((prv) => [...prv, newShape]);
    }
    if (axeSymetire === 3) {
      //Y=-X
      const newShape = new Shape({ x, y });
      newShape.points = shape.points.map((point) => ({
        x: point.y,
        y: point.x,
      }));
      if (shape.polygone === true) newShape.polygone = true;
      state.setShapes((prv) => [...prv, newShape]);
    }
  }
  state.setLine({ x, y });
};
