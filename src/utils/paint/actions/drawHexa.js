import { UNIT } from "pages/Paint";
import { getGridPos, getMousePos, getShapeFromPoint,pointIndex } from "utils/paint/basics";
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
function inf(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
function sup(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
export const handleMouseMove = (event, state) => {
  if (!state.drawing) return;
  const { x, y } = getMousePos(state.canvasRef, event);
  const point1 = { x: (state.current.x + x) / 2, y: inf(y, state.current.y) };
  const point2 = {
    x,
    y: inf(y, state.current.y) + Math.abs(state.current.y - y) / 3,
  };
  const point3 = {
    x,
    y: inf(y, state.current.y) + (2 * Math.abs(state.current.y - y)) / 3,
  };
  const point4 = { x: (state.current.x + x) / 2, y: sup(y, state.current.y) };
  const point6 = {
    x: state.current.x,
    y: inf(y, state.current.y) + (2 * Math.abs(state.current.y - y)) / 3,
  };
  const point5 = {
    x: state.current.x,
    y: inf(y, state.current.y) + Math.abs(state.current.y - y) / 3,
  };
  state.shapes[state.shapes.length - 1].points = [
    point1,
    point2,
    point3,
    point4,
    point6,
    point5,
    point1,
  ];
  state.setLine({ x, y });
};
const handleSecondClick = (event, state) => {
  const { x: mouseX, y: mouseY } = getMousePos(state.canvasRef, event);
  const { x, y } = getGridPos(mouseX, mouseY, UNIT);
  const point1 = getGridPos(
    (state.current.x + x) / 2,
    inf(y, state.current.y),
    UNIT
  );
  const point2 = getGridPos(
    x,
    inf(y, state.current.y) + Math.abs(state.current.y - y) / 3,
    UNIT
  );
  const point3 = getGridPos(
    x,
    inf(y, state.current.y) + (2 * Math.abs(state.current.y - y)) / 3,
    UNIT
  );
  const point4 = getGridPos(
    (state.current.x + x) / 2,
    sup(y, state.current.y),
    UNIT
  );
  const point6 = getGridPos(
    state.current.x,
    inf(y, state.current.y) + (2 * Math.abs(state.current.y - y)) / 3,
    UNIT
  );
  const point5 = getGridPos(
    state.current.x,
    inf(y, state.current.y) + Math.abs(state.current.y - y) / 3,
    UNIT
  );
  state.shapes[state.shapes.length - 1].points = [
    point1,
    point2,
    point3,
    point4,
    point6,
    point5,
    { ...point1 },
  ];
  state.shapes[state.shapes.length - 1].polygone = true;
  state.setDrawing(false);
};
export const handleClick = (event, state) => {
  if (!state.drawing) handleFirstClick(event, state);
  else handleSecondClick(event, state);
};
