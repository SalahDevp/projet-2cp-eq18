import { HEIGHT, UNIT, WIDTH } from "components/paint/PaintComponent";
import { getMousePos } from "utils/paint/basics";
import Shape from "../Shape";
import { clickInsidePolygone, clickOnShapeSegment } from "../geometry";

export const handleClick = (event, state) => {
  //get click pos
  const { x, y } = getMousePos(state.canvasRef, event);
  let shape;
  const initialPoint = { x, y };
  shape =
    clickInsidePolygone(state.shapes, initialPoint) ||
    clickOnShapeSegment(state.shapes, initialPoint).shape;
  //if user clicked inside polygone or on a shape segment
  const h = HEIGHT - (HEIGHT % UNIT) + (HEIGHT % UNIT >= UNIT / 2 ? UNIT : 0);
  const w = WIDTH - (WIDTH % UNIT) + (WIDTH % UNIT >= UNIT / 2 ? UNIT : 0);
  if (shape) {
    const newShape = new Shape({ x, y });
    newShape.points = shape.points.map((point) => ({
      x: w - point.x,
      y: h - point.y,
    }));
    if (shape.polygone === true) {
      newShape.polygone = true;
    }
    state.setShapes((prv) => [...prv, newShape]);
  }
};
