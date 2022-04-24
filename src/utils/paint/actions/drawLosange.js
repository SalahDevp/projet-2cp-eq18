import { UNIT } from "pages/Paint";
import { getGridPos, getMousePos, getShapeFromPoint } from "utils/paint/basics";
import Shape from "../Shape";

const handleFirstClick = (event, state) => {
  const { x: mouseX, y: mouseY } = getMousePos(state.canvasRef, event);
  const { x, y } = getGridPos(mouseX, mouseY, UNIT);
  const { shape, pointIndex } = getShapeFromPoint(state.shapes, x, y);
  if (!shape) {
    state.setDrawing(true);
    state.setCurrent({ x, y });
    state.setShapes((prv) => [...prv, new Shape({ x, y })]);
  }
};
export const handleMouseMove = (event, state) => {
  if (!state.drawing) return;
  const { x, y } = getMousePos(state.canvasRef, event);
  const point1 = { x: state.current.x, y: state.current.y };
  const point2 = { x, y };
  const point3 = { x: 2 * x - state.current.x, y: state.current.y };
  const point4 = { x, y: 2 * state.current.y - y };
  state.shapes[state.shapes.length - 1].points = [
    point1,
    point2,
    point3,
    point4,
    point1,
  ];
  state.setLine({ x, y });
};
const handleSecondClick = (event, state) => {
  const { x: mouseX, y: mouseY } = getMousePos(state.canvasRef, event);
  const { x, y } = getGridPos(mouseX, mouseY, UNIT);
  const point1 = getGridPos(state.current.x, state.current.y, UNIT);
  const point2 = { x, y };
  const point3 = { x: 2 * x - state.current.x, y: state.current.y };
  const point4 = { x, y: 2 * state.current.y - y };
  state.shapes[state.shapes.length - 1].points = [
    point1,
    point2,
    point3,
    point4,
    { ...point1 },
  ];
  state.shapes[state.shapes.length - 1].polygone = true;
  state.setDrawing(false);
};
export const handleClick = (event, state) => {
  if (!state.drawing) handleFirstClick(event, state);
  else handleSecondClick(event, state);
};
