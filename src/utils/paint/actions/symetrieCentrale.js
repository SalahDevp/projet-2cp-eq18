import { getMousePos } from "utils/paint/basics";
import { clickInsidePolygone, clickOnShapeSegment } from "../geometry";
import { generateSymetrieCentrale } from "../symetrie";

export const handleClick = (event, state) => {
  //get click pos
  const { x, y } = getMousePos(state.canvasRef, event);
  let shape;
  const initialPoint = { x, y };
  shape =
    clickInsidePolygone(state.shapes, initialPoint) ||
    clickOnShapeSegment(state.shapes, initialPoint).shape;
  //if user clicked inside polygone or on a shape segment
  if (shape) {
    const newShape = generateSymetrieCentrale(shape);
    state.setShapes((prv) => [...prv, newShape]);
  }
};
