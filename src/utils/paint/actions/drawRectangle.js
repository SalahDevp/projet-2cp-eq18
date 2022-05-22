import { UNIT } from "components/paint/PaintComponent";
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
  const point2 = { x, y: state.current.y };
  const point3 = { x: state.current.x, y };
  const point4 = { x, y };
  state.shapes[state.shapes.length - 1].points = [
    point1,
    point2,
    point4,
    point3,
    point1,
  ];
  state.setLine({ x, y });
};
const handleSecondClick = (event, state) => {
  const { x: mouseX, y: mouseY } = getMousePos(state.canvasRef, event);
  const { x, y } = getGridPos(mouseX, mouseY, UNIT);
  const point1 = { x: state.current.x, y: state.current.y };
  const point2 = { x, y: state.current.y };
  const point3 = { x: state.current.x, y };
  const point4 = { x, y };
  state.shapes[state.shapes.length - 1].points = [
    point1,
    point2,
    point4,
    point3,
    { ...point1 },
  ];
  state.shapes[state.shapes.length - 1].polygone = true;
  state.setDrawing(false);
};
export const handleClick = (event, state) => {
  if (!state.drawing) handleFirstClick(event, state);
  else handleSecondClick(event, state);
};
