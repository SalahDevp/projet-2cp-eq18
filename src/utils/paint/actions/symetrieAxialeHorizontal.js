import { UNIT, HEIGHT, WIDTH } from "components/paint/PaintComponent";
import { getGridPos, getMousePos, getShapeFromPoint } from "utils/paint/basics";
import Shape from "../Shape";
import { clickInsidePolygone, clickOnShapeSegment } from "../geometry";
import { generateSymetrieAxialeH } from "../symetrie";

export const handleClick = (event, state) => {
  const { x, y } = getMousePos(state.canvasRef, event);
  let shape;
  const initialPoint = { x, y };
  shape =
    clickInsidePolygone(state.shapes, initialPoint) ||
    clickOnShapeSegment(state.shapes, initialPoint).shape;
  if (shape) {
    const newShape = generateSymetrieAxialeH(shape);
    state.setShapes((prv) => [...prv, newShape]);
  }
  state.setLine({ x, y });
};
