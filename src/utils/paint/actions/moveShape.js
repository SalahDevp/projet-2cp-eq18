import { UNIT } from "components/paint/PaintComponent";
import { getGridPos, getMousePos } from "utils/paint/basics";
import {
  checkPoints,
  clickInsidePolygone,
  clickOnShapeSegment,
} from "../geometry";

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
  //update all points
  state.current.shape.points.forEach((point) => {
    point.x += offsetX;
    point.y += offsetY;
  });
  //update intial point
  state.setCurrent((prv) => ({ ...prv, initialPoint: { x, y } }));
  //rerender canvas
  state.setLine({});
};

const handleSecondClick = (event, state) => {
  const newPoints = [];
  //we create a new points array and not directly uppdate shape points to check first if those new points are in valid positons
  state.current.shape.points.forEach((point) =>
    newPoints.push(getGridPos(point.x, point.y, UNIT))
  );
  //check if positions are valid
  if (checkPoints(state.shapes, newPoints)) {
    //we update shape points
    state.current.shape.points = newPoints;
    return state.setDrawing(false);
  } //else selected shape will continue moving with the mouse
};

export const handleClick = (event, state) => {
  if (!state.drawing) handleFirstClick(event, state);
  else handleSecondClick(event, state);
};
