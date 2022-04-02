import { UNIT } from "pages/Paint";
import { getGridPos, getMousePos, getShapeFromPoint } from "utils/paint/basics";
import { clickInsidePolygone, clickOnShapeSegment } from "../geometry";
import Shape from "../Shape";

const handleFirstClick = (event, state) => {
  //get click pos
  const { x, y } = getMousePos(state.canvasRef, event);
  let shape;
  const initialPoint = { x, y };
  shape =
    clickInsidePolygone(state.shapes, initialPoint) ||
    clickOnShapeSegment(state.shapes, initialPoint).shape;
  //if user clicked inside polygone or on a shape segment
  if (shape) {
    state.setCurrent({ shape, initialPoint });
    state.setDrawing(true);
  }
};

export const handleMouseMove = (event, state) => {
  if (!state.drawing) return;
  //get mouse pos
  const { x, y } = getMousePos(state.canvasRef, event);
  const offsetX = x - state.current.initialPoint.x,
    offsetY = y - state.current.initialPoint.y;
  state.current.shape.points.forEach((point) => {
    point.x += offsetX;
    point.y += offsetY;
  });
  //update intial point
  state.setCurrent((prv) => ({ ...prv, initialPoint: { x, y } }));
  //to rerender
  state.setLine({});
};

const handleSecondClick = (event, state) => {
  state.setDrawing(false);
  state.current.shape.points.forEach((point) => {
    const newPoint = getGridPos(point.x, point.y, UNIT);
    point.x = newPoint.x;
    point.y = newPoint.y;
  });
};

export const handleClick = (event, state) => {
  if (!state.drawing) handleFirstClick(event, state);
  else handleSecondClick(event, state);
};
